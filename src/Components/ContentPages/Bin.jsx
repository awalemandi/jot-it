import React, { useState, useContext, useEffect } from 'react';
import { JotContext } from '../../Resources/JotContext';
import { insightsDocRef } from '../../firebase';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Divider, Grid } from '@material-ui/core';
import PulseLoader from 'react-spinners/PulseLoader';

import InsightCard from '../../Resources/InsightCard';

const renderRestoreButton = true ;
const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        maxHeight: 650,
        textAlign: 'center',
        overflowY: 'auto',
        margin: theme.spacing(0, 0, 1, 0),
        padding: theme.spacing(0, 0, 3, 0),
    },
    header: {
        textAlign: 'center',
        margin: theme.spacing(0, 0, 2, 0)
    },
    card: {
        marginTop: theme.spacing(2)
    }
}));

//deletes insight from the database
const handleDelete = insightId => {
    insightsDocRef.doc(insightId)
        .delete()
        .then(() => {
            alert('Insight has been permanently deleted! ❌' );
        })
        .catch(e => { console.log(e) });
};

//restores insight back from bin to library
const handleRestore = insightId => {
    insightsDocRef.doc(insightId)
        .update({
            archived: false
        })
        .then(() => {
            alert('Insight has been restored to library!');
        })
        .catch(e => console.log(e));
}

const Bin = () => {
    const classes = useStyles();
    const { search } = useContext(JotContext);
    const [searchField, setSearchField] = search;
    const [loading, setLoading] = useState(true);
    const [insightsArray, setInsightsArray] = useState([]);
    const [filteredInsightsArray, setFilteredInsightsArray] = useState([]);

    useEffect(() => {
        const unsubcribe = insightsDocRef.where('archived', '==', true)
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
        <Grid container className={classes.root} spacing={2} justify="space-around">
            <Grid item xs={false} lg={2}></Grid>
            <Grid item xs={8}>
                <Typography component="h1" variant="h6" className={classes.header}>
                    Archive 🗑️
                </Typography>
                <Divider />
            </Grid>
            <Grid item sm={false} lg={2}></Grid>
            {
                !filteredInsightsArray?
                    <Typography variant="h10">😐 You don't have any insights yet. Complete your current read to add!</Typography>
                : filteredInsightsArray.map((insight) =>
                <Grid item xs={10} md={6} xl={4} className={classes.card}>
                    <InsightCard
                        key={insight.id}
                        id={insight.id}
                        title={insight.title}
                        author={insight.author}
                        commenceDate={insight.commenceDate}
                        jots={insight.jots}
                        onDelete={() => handleDelete(insight.id)}
                        renderRestore={renderRestoreButton}
                        onRestore={() => handleRestore(insight.id)}
                    />
                </Grid>
            )
            }
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

export default Bin;