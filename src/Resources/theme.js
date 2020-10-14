import { createMuiTheme } from '@material-ui/core/styles';



const lightTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#00897b',
      main: '#00897b',
      dark: '#005b4f',
      contrastText: '#f5f5f5',
    },
    secondary: {
      light: '#82e9de',
      main: '#4db6ac',
      dark: '#00867d',
      contrastText: '#212121',
    },
  },
});


const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

export { lightTheme, darkTheme };