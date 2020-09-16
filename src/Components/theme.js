import { createMuiTheme } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';
import lightBlue from '@material-ui/core/colors/lightBlue';


const theme = createMuiTheme({
  palette: {
    primary: cyan,
    secondary: lightBlue,
  },
});

export default theme;