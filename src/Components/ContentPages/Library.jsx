import React, { useState, useEffect } from 'react';
import { insightsDocRef } from '../../firebase';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Divider, Grid } from '@material-ui/core';

import InsightCard from '../../Resources/InsightCard';



const useStyles = makeStyles((theme) => ({
    paper: {
        margin: theme.spacing(0, 0, 0, 1),
        padding: theme.spacing(1, 4, 1, 2),
    },
}));


const useInsightsArray = () => {
    const [insightsArray, setInsightsArray] = useState([]);
    useEffect(() => {
        const unsubcribe = insightsDocRef.where('completed', '==', true)
            .where('archived', '==', false)
            .onSnapshot(snapshot => {
                const newInsights = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setInsightsArray(newInsights);
            });
        return () => unsubcribe;
    }, [])
    return insightsArray;
};

const Library = () => {
    const classes = useStyles();
    const userInsights = useInsightsArray();

    return userInsights ? (
        <Grid container className={classes.paper} spacing={2} justify="space-around">
            <Grid item xs={false} lg={2}></Grid>
            <Grid item xs={8}>
                <Typography component="h1" variant="h6">
                    Your Insights Library
                        <Divider />
                </Typography>
            </Grid>
            <Grid item sm={false} lg={2}></Grid>
            {
                !userInsights ?
                    <Typography variant="h10">😐 You don't have any insights yet. Complete your current read to add!</Typography>
                : userInsights.map((insight) =>
                <Grid item xs={7} sm={7} md={5} lg={4}>
                    <InsightCard
                        key={insight.id}
                        insightId={insight.insightId}
                        title={insight.title}
                        author={insight.author}
                        commenceDate={insight.commenceDate}
                        jots={insight.jots}
                    />
                </Grid>
            )
            }
        </Grid>
    )
    : <>Loading ... </>
};

export default Library;