import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Typography, Divider, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        minHeight: 500,
        maxHeight: 650,
        textAlign: 'center',
        overflowY: 'auto',
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
            <Grid item xs={8}>
                <Typography component="h1" variant="h6" className={classes.header}>
                    Statistics Page 📊
                </Typography>
                <Divider />
            </Grid>
            <Grid item xs={12}>
                🚧
            </Grid>
            <Grid item xs={12}>
            </Grid>
            <Grid item xs={12}>
            </Grid>
        </Grid>
    )
};

export default Statistics;