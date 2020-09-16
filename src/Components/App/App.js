import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Navigation from '../Navigation/Navigation';
import ContentWindow from '../ContentWindow/ContentWindow';
import theme from '../theme';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
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
    padding: theme.spacing(3),
  },
}));

function App() {

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Navigation/>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <ContentWindow/>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
