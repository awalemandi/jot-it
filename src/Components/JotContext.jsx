import React, { useState, createContext } from 'react';
import CurrentRead from '../Components/ContentPages/CurrentRead';
import Library from '../Components/ContentPages/Library';
import ToBeRead from '../Components/ContentPages/ToBeRead';
import Statistics from '../Components/ContentPages/Statistics';
import Feedback from '../Components/ContentPages/Feedback';
import Bin from '../Components/ContentPages/Bin';

export const JotContext = createContext();

export const JotDistributor = props => {
    const [content, setContent] = useState(<CurrentRead />);
    
    const [jotInfo, setJotInfo] = useState([
        {
            title: '',
            author: '',
            commenceDate: '',
            insight: ''
        }
    ]);
    return (
        <JotContext.Provider value={{content: [content, setContent], info: [jotInfo, setJotInfo]}}>
            {props.children}
        </JotContext.Provider>
    );
}