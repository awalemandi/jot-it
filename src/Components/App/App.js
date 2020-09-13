import React from 'react';
import {Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Header/Header';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';

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

function App() {

  const classes = useStyles();

  return (
    <div className={classes.root} spacing={2} justify="space-between">
          <Grid container direction="column">
            <Grid item xs={12}>
              <Header />
            </Grid>
            <Grid item xs={12}>
              <Body />
            </Grid>
            <Grid item xs={12}>
              <Footer />
            </Grid>
          </Grid>
    </div>
  );
}

export default App;
