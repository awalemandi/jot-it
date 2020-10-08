import React, { useState, useEffect } from 'react';
import { db, insightsDocRef } from '../../firebase';

import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, Button, Typography, Divider, Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    paper: {
        margin: theme.spacing(0, 0, 0, 2),
        padding: theme.spacing(0, 0, 0, 2),
        minHeight: 400,
    },
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
}));

const useInsightsArray = () => {
    const [insightsArray, setInsightsArray] = useState([]);

    useEffect(() => {
        insightsDocRef
            .onSnapshot(snapshot => {
                const newInsights = snapshot.docs.map(doc => ({
                    ...doc.data()
                }));
                console.log(newInsights);
                setInsightsArray(newInsights);
            });
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
                        {/* {userInsights.map((insight) =>
                            <Card className={classes.root} variant="outlined">
                                <CardContent>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        {insight.commenceDate}
                                </Typography>
                                    <Typography variant="h5" component="h2">
                                        {insight.title} by {insight.author}
                                </Typography>
                                    <Typography className={classes.pos} color="textSecondary">
                                        {insight.jots}
                                </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Delete</Button>
                                </CardActions>
                            </Card>
                        )} */}
                    </Grid>
                </Grid>
            </div>
        </>
    )
};

export default Library;