import React, { useContext } from 'react';
import { JotContext} from '../../Resources/JotContext';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer';
import theme from '../../Resources/theme';
import CurrentRead from '../ContentPages/CurrentRead';
import Library from '../ContentPages/Library';
import ToBeRead from '../ContentPages/ToBeRead';
import Statistics from '../ContentPages/Statistics';
import Feedback from '../ContentPages/Feedback';
import Bin from '../ContentPages/Bin';


const useStyles = makeStyles((theme) => ({

root: {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  flexGrow: 1,
  minHeight: 700,
  height: 'auto',
  margin: theme.spacing(1, 4, 0, 9),
  padding: theme.spacing(1, 5, 0, 9)
},

navigation: {
  marginRight: theme.spacing(1),
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
  padding: theme.spacing(2, 0, 0, 0),
  alignItems: 'center',
  justifyContent: 'space-evenly',
  minWidth: 700,
  maxWidth: 900,
  margin: theme.spacing(1, 8, 0, 8),
  height: 'auto',
},

footer: {
  flexGrow: 1,
  padding: theme.spacing(5),
  margin: theme.spacing(1, 8, 0, 8),
  minWidth: 800,
  maxWidth: 900,
  height: 'auto',
},

paper: {
  display: 'flex',
  padding: theme.spacing(5,1),
  alignItems: 'center',
  justifyContent: 'space-evenly',
},
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
    feedback: function () {
      setContentValue(<Feedback />)
    },
    bin: function () {
      setContentValue(<Bin />)
    }
  }
  
  
  return (
    <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <header className={classes.navigation}>
            <Navigation page={displayPage}/>
          </header>

          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Paper elevation={3} className={classes.paper}>
              {contentValue}
            </Paper>
          </main>

          <div className={classes.toolbar} />
          <footer className={classes.footer}>
            <Paper elevation={3} className={classes.paper}>
              <Footer />
            </Paper>
          </footer>
        </div>
    </ThemeProvider>
  );
}

export default App;
