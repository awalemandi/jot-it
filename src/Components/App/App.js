import React, { useContext } from 'react';
import { JotContext } from '../../Resources/JotContext';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Paper, CssBaseline } from '@material-ui/core';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer';
import CurrentRead from '../ContentPages/CurrentRead';
import Library from '../ContentPages/Library';
import ToBeRead from '../ContentPages/ToBeRead';
import Statistics from '../ContentPages/Statistics';
import Bin from '../ContentPages/Bin';

import Feedback from "feeder-react-feedback"; // import Feedback component
import "feeder-react-feedback/dist/feeder-react-feedback.css"; // import stylesheet

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    minHeight: '100vh',
    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(1, 0, 0, 1),
      padding: theme.spacing(3, 0, 0, 2),
    },
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(2, 0, 0, 0),
      padding: theme.spacing(3, 0, 0, 0),
    },
    backgroundColor: theme.palette.action.hover,
  },

  navigation: {
    marginBottom: theme.spacing(5),
  },

  content: {
    flexGrow: 1,
    flexShrink: 1,
    position: 'relative',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      width: '75%',
      marginTop: theme.spacing(1),
    },
    [theme.breakpoints.up('md')]: {
      width: '50%',
      marginTop: theme.spacing(5),
    },
    height: 'auto',
    textAlign: 'center',
  },

  footer: {
    display: 'flex',
    marginTop: '3rem',
    width: '100%',
    height: '7rem',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: fade(theme.palette.secondary.main, 0.45)
  },

  paper: {
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      maxHeight: 550,
    },
    [theme.breakpoints.up('sm')]: {
      maxHeight: 650,
    },
    [theme.breakpoints.up('md')]: {
      maxHeight: 750,
    },
    [theme.breakpoints.up('lg')]: {
      maxHeight: 850,
    },
    padding: theme.spacing(2),
    textAlign: 'center',
    overflow: 'auto'
  }
}));



function App() {
  const { content } = useContext(JotContext);
  const [contentValue, setContentValue] = content;
  const classes = useStyles();

  const displayPage = {
    currentRead: function () {
      setContentValue(<CurrentRead />)
    },
    library: function () {
      setContentValue(<Library />)
    },
    toBeRead: function () {
      setContentValue(<ToBeRead />)
    },
    statistics: function () {
      setContentValue(<Statistics />)
    },
    bin: function () {
      setContentValue(<Bin />)
    }
  }


  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <header className={classes.navigation}>
          <Navigation page={displayPage} />
        </header>

        <main className={classes.content} >
          <Paper elevation={3} className={classes.paper}>
            {contentValue}
          </Paper>
        </main>

        <footer className={classes.footer}>
          <Footer />
        </footer>

        <Feedback
          primaryColor="#00897b"
          projectId="5f864c3404ba4d0004fb43a1"
        />
      </div>
    </>
  );
}

export default App;
