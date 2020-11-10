import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { lightTheme, darkTheme } from '../src/Resources/theme';
import App from './Components/App/App';
import { JotDistributor } from './Resources/JotContext';

ReactDOM.render(
    <ThemeProvider theme={lightTheme}>
        <JotDistributor>
            <App />
        </JotDistributor>
    </ThemeProvider>,
        document.getElementById('root')
);


