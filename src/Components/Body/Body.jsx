import { Grid, Container, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Paper from '@material-ui/core/Paper';
import MenuItems from "../MenuItems";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    }
}));



const Body = () => {

const classes = useStyles();

    return (  
        <div className={classes.root}>
            <Grid container justify="center" xs={12}>
                    <Grid container item xs={2} sm={4} lg={3}>
                        <Paper>
                            <MenuItems />
                        </Paper>
                    </Grid>
                    <Grid container item xs={10} sm={8} lg={9}>
                        <Paper>
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