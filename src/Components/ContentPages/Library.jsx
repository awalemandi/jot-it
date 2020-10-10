import React, { useState, useEffect } from 'react';
import { db, insightsDocRef } from '../../firebase';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Divider, Grid } from '@material-ui/core';

import InsightCard from '../../Resources/InsightCard';

const useStyles = makeStyles((theme) => ({
    paper: {
        margin: theme.spacing(0, 0, 0, 2),
        padding: theme.spacing(0, 0, 0, 2),
        minHeight: 400,
    },
}));


const useInsightsArray = () => {
    const [insightsArray, setInsightsArray] = useState([]);

    useEffect(() => {
        const unsubcribe = insightsDocRef
            .onSnapshot(snapshot => {
                const newInsights = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
            // console.log(newInsights);
            setInsightsArray(newInsights);
        });
        
        return unsubcribe;
    }, [])
    return insightsArray;
};

const Library = () => {
    const classes = useStyles();
    const userInsights = useInsightsArray();

    return (
        <>
            <div className={classes.paper} overflow="visible">
                <Typography component="h1" variant="h6">
                    Your Insights Library
                    <Divider />
                </Typography>

                <Grid container spacing={2} justify="center">
                        <Grid item xs={8} sm={5} md={4}>
                            {userInsights.map((insight) =>
                                <InsightCard 
                                    docId={insight.id}
                                    insightId={insight.insightId}
                                    title={insight.title} 
                                    author={insight.author}
                                    commenceDate={insight.commenceDate}
                                    jots={insight.jots}
                                />
                            )}
                        </Grid>
                </Grid>
            </div>
        </>
    )
};

export default Library;