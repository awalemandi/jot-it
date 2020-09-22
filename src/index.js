import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import { JotDistributor } from './Components/JotContext';

ReactDOM.render(
    <JotDistributor>
        <App />
    </JotDistributor>,
    document.getElementById('root')
);


