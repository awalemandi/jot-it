import { Grid, Container, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary
    },
}));



const Body = () => {

const classes = useStyles();

    return (  
        <div className={classes.root}>
            <Grid container spacing={1} justify="space-evenly" alignItems="stretch">
                    <Grid container item xs={4}>
                        <Paper className="paper">
                          <Typography variant="body2">
                          Menu Bar Menu Bar Menu Bar Menu Bar Menu Bar Menu Bar Menu Bar Menu Bar Menu Bar Menu Bar Menu Bar Menu Bar Menu Bar
                           Menu Bar Menu Bar Menu Bar Menu Bar Menu Bar Menu Bar Menu Bar Menu Bar Menu Bar Menu Bar Menu Bar Menu Bar Menu Bar

                           Menu Bar Menu Bar Menu Bar Menu Bar Menu Bar Menu Bar Menu Bar Menu Bar Menu Bar Menu Bar Menu Bar Menu Bar Menu Bar

                           Menu Bar Menu Bar Menu Bar Menu Bar Menu Bar Menu Bar Menu Bar Menu Bar Menu Bar Menu Bar Menu Bar Menu Bar Menu Bar

                           Menu Bar Menu Bar Menu Bar Menu Bar Menu Bar Menu Bar Menu Bar Menu Bar Menu Bar Menu Bar Menu Bar Menu Bar Menu Bar

                          </Typography>
                        </Paper>
                    </Grid>
                    <Grid container item xs={8}>
                        <Paper className="paper">
                           <Typography variant="body2">
                                Content Window Content Window Content Window Content Window Content Window Content Window Content Window Content Window
                                Content Window Content Window Content Window Content Window Content Window Content Window Content Window Content Window

                                Content Window Content Window Content Window Content Window Content Window Content Window Content Window Content Window

                                Content Window Content Window Content Window Content Window Content Window Content Window Content Window Content Window

                                Content Window Content Window Content Window Content Window Content Window Content Window Content Window Content Window
                                Content Window Content Window Content Window Content Window Content Window Content Window Content Window Content Window

                           </Typography>
                        </Paper>
                    </Grid>
            </Grid>
        </div>
    );
}
 
export default Body;