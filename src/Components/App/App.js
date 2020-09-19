import React, { useState } from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import {Paper} from '@material-ui/core';
import Navigation from '../Navigation/Navigation';
import Copyright from '../Copyright';
import theme from '../theme';
import CurrentRead from '../ContentPages/CurrentRead';
import Library from '../ContentPages/Library';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexGrow: 1,
    minHeight: 700,
    height: 'auto',
    minWidth: 300,
    marginBottom: 0,
  },

  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },

  content: {
    flexGrow: 1,
    maxHeight: 600,
    width: 'auto',
    padding: theme.spacing(5),
  },

  footer: {
    flexGrow: 1,
    padding: theme.spacing(5),
    minHeight: 250,
    width: 'auto',
  },
}));



function App() {
  const [content, setContent] = useState(<CurrentRead/>);
  const classes = useStyles();

  const displayCurrentRead = () => {
    setContent(CurrentRead)
  }

  const displayLibrary = () => {
    setContent(Library)
  }

  // const displayCurrentRead = () => {
  //   setContent(CurrentRead)
  // }

  // const displayCurrentRead = () => {
  //   setContent(CurrentRead)
  // }

  // const displayCurrentRead = () => {
  //   setContent(CurrentRead)
  // }

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Navigation/>
        <main className={classes.content}>
          <div className={classes.toolbar} />
            <Paper>
              {content}
            </Paper>
        </main>
        <div className={classes.toolbar} />
        <footer className={classes.footer}>
          <Paper>
            <Copyright />
          </Paper>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
