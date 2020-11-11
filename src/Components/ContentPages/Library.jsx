import React, { useState, useContext, useEffect } from 'react';
import { JotContext } from '../../Resources/JotContext';

import { insightsDocRef } from '../../firebase';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Divider, Grid, Snackbar, Hidden } from '@material-ui/core';
import PulseLoader from 'react-spinners/PulseLoader';
import Alert from '../../Resources/Alert';

import InsightCard from '../../Resources/InsightCard';



const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: 'auto',
        minHeight: 500,
        textAlign: 'center',
        overflowY: 'hidden',
    },
    header: {
        textAlign: 'center',
        margin: theme.spacing(0, 0, 2, 0)
    },
    cardContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: theme.spacing(1),
    }
}));

const Library = () => {
    const { search } = useContext(JotContext);
    const [searchField, setSearchField] = search;
    const [loading, setLoading] = useState(true);
    const [insightsArray, setInsightsArray] = useState([]);
    const [filteredInsightsArray, setFilteredInsightsArray] = useState([]);
    const [archiveAlertOpen, setArchiveAlertOpen] = useState(false);
    const classes = useStyles();

    const openAlert = () => {
        setArchiveAlertOpen(true);
    };

    const closeAlert = (event, reason) => {
    if (reason === 'clickaway') {
        return;
    }
        setArchiveAlertOpen(false);
    };
    
    const archiveAlert = <Snackbar open={archiveAlertOpen} autoHideDuration={4000} onClose={closeAlert}>
                            <Alert onClose={closeAlert} severity="warning">
                                Insight has archived! You can restore it from the bin. 🗑
                            </Alert>
    </Snackbar>
    

//moves insight from library to bin
const handleArchive = insightId => {
    insightsDocRef.doc(insightId)
        .update({
            archived: true
        })
        .then(() => {
            openAlert();
        })
        .catch(e => console.log(e));
}

    useEffect(() => {
        const unsubcribe = insightsDocRef.where('completed', '==', true)
            .where('archived', '==', false)
            .onSnapshot(snapshot => {
                const newInsights = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setInsightsArray(newInsights);
                setLoading(false);
            });
        return () => unsubcribe;
    }, []);

    useEffect(() => {
        setFilteredInsightsArray(
            insightsArray.filter(insight => {
                return (
                    insight.title.toLowerCase().includes(searchField.toLowerCase())
                    || insight.author.toLowerCase().includes(searchField.toLowerCase())
                )
            })
        )
    }, [searchField, insightsArray]);

    return !loading ? (
        <Grid container className={classes.root} justify="space-around" alignItems="center">
            <Hidden xsDown>
                <Grid item xs={2}></Grid>
            </Hidden>
            <Grid item xs={12} sm={8}>
            <Typography component="h1" variant="h6" className={classes.header}>
                Insights Library 📚
            </Typography>
            <Divider />
            </Grid>
            <Hidden xsDown>
                <Grid item xs={2}></Grid>
            </Hidden>
            <Grid item xs={12}className={classes.cardContainer}>
            {
                !filteredInsightsArray?
                    <Typography variant="h10">😐 You don't have any insights yet. Complete your current read to add!</Typography>
                : filteredInsightsArray.map((insight) =>
                        <InsightCard
                            key={insight.id}
                            id={insight.id}
                            title={insight.title}
                            author={insight.author}
                            commenceDate={insight.commenceDate}
                            completeDate={insight.completeDate}
                            jots={insight.jots}
                            onDelete={() => handleArchive(insight.id)}
                        />
                )
            }
            </Grid>
            {archiveAlert}
        </Grid>
    )
    :
        <PulseLoader
            size={10}
            margin={5}
            color={'#4db6ac'}
            loading={true}
        />
};

export default Library;