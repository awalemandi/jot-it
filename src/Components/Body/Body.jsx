import { Grid, Container, Typography } from "@material-ui/core";

import React from 'react';
import Paper from '@material-ui/core/Paper';

const Body = () => {
    return (  
        <Grid container spacing={3}>
            <Paper elevation={0}>
                <Grid container item >
                    <Typography> left</Typography>
                    <Typography> left</Typography>
                    <Typography> left</Typography>
                </Grid>
                <Grid container item>
                    <Typography> Right</Typography>
                    <Typography> Right</Typography>
                    <Typography> Right</Typography>
                    <Typography> Right</Typography>
                </Grid>
            </Paper>
        </Grid>
    );
}
 
export default Body;