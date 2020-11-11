import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Typography, Divider, Grid, Hidden } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        textAlign: 'center',
        minHeight: 400,
    },
    header: {
        textAlign: 'center',
        margin: theme.spacing(0, 0, 2, 0)
    },

}));

const Statistics = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.root} spacing={2} justify="center">
            <Hidden xsDown>
                <Grid item xs={2}></Grid>
            </Hidden>
            <Grid item xs={12} sm={8}>
                <Typography component="h1" variant="h6" className={classes.header}>
                    Statistics Page 📊
                </Typography>
                <Divider />
            </Grid>
            <Hidden xsDown>
                <Grid item xs={2}></Grid>
            </Hidden>
            <Grid item xs={12}>
                🚧
            </Grid>
            <Grid item xs={12}>
            </Grid>
            <Grid item xs={12}>
                <Grid item xs={2}></Grid>
            </Grid>
        </Grid>
    )
};

export default Statistics;