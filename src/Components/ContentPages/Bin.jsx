import React, { useState, useContext, useEffect } from 'react';
import { JotContext } from '../../Resources/JotContext';
import { insightsDocRef } from '../../firebase';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Divider, Grid, Snackbar, Hidden } from '@material-ui/core';
import PulseLoader from 'react-spinners/PulseLoader';
import Alert from '../../Resources/Alert';

import InsightCard from '../../Resources/InsightCard';

const renderRestoreButton = true ;
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: 'auto',
        minHeight: 500,
        maxHeight: '100%',
        padding: theme.spacing(0, 0, 1, 0),
        textAlign: 'center',
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

const Bin = () => {
    const classes = useStyles();
    const { search } = useContext(JotContext);
    const [searchField, setSearchField] = search;
    const [loading, setLoading] = useState(true);
    const [insightsArray, setInsightsArray] = useState([]);
    const [filteredInsightsArray, setFilteredInsightsArray] = useState([]);
    const [deleteAlertOpen, setDeleteAlertOpen] = useState(false);
    const [restoreAlertOpen, setRestoreAlertOpen] = useState(false);

    const openAlert = action => {
    action == 'delete' && setDeleteAlertOpen(true);
    action == 'restore' && setRestoreAlertOpen(true);
};

const closeAlert = (event, reason) => {
    if (reason === 'clickaway') {
    return;
    }

    setDeleteAlertOpen(false);
    setRestoreAlertOpen(false);
};

    const deleteAlert = <Snackbar open={deleteAlertOpen} autoHideDuration={4000} onClose={closeAlert}>
                    <Alert onClose={closeAlert} severity="error">
                        Insight has been permanently deleted! ❌
                    </Alert>
</Snackbar>

const restoreAlert = <Snackbar open={restoreAlertOpen} autoHideDuration={4000} onClose={closeAlert}>
                    <Alert onClose={closeAlert} severity="success">
                        Insight has been restored to library! ♻ 
                    </Alert>
</Snackbar>
    

//deletes insight from the database
const handleDelete = insightId => {
    insightsDocRef.doc(insightId)
        .delete()
        .then(() => {
            openAlert('delete');
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
            openAlert('restore');
        })
        .catch(e => console.log(e));
}
    
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
        <Grid container className={classes.root} justify="space-evenly" alignItems="center">
            <Hidden xsDown>
                <Grid item xs={2}></Grid>
            </Hidden>
            <Grid item xs={12} sm={8}>
            <Typography component="h1" variant="h6" className={classes.header}>
                Archive 🗑️
            </Typography>
            <Divider />
            </Grid>
            <Hidden xsDown>
                <Grid item xs={2}></Grid>
            </Hidden>
            <Grid item xs={12} className={classes.cardContainer}>
            {
                !filteredInsightsArray?
                    <Typography variant="h10">Your archived insights will show up here.</Typography>
                : filteredInsightsArray.map((insight) =>
                        <InsightCard
                            key={insight.id}
                            id={insight.id}
                            title={insight.title}
                            author={insight.author}
                            commenceDate={insight.commenceDate}
                            completeDate={insight.completeDate}
                            jots={insight.jots}
                            onDelete={() => handleDelete(insight.id)}
                            renderRestore={renderRestoreButton}
                            onRestore={() => handleRestore(insight.id)}
                        />
                )
            }
            </Grid>
            {deleteAlert} {restoreAlert}
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