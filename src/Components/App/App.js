import React from 'react';
import {Grid} from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import TestBody from '../Body/TestBody';
import Header from '../Header/Header';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import theme from '../theme';

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
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <TestBody />
          {/* <Grid container direction="column">
            <Grid item xs={12}>
              <Header />
            </Grid>
            <Grid item xs={12}>
              
            </Grid>
            <Grid item xs={12}>
              <Body />
            </Grid>
            <Grid item xs={12}>
              <Footer />
            </Grid>
          </Grid> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
