import React, { useState, createContext } from 'react';
import CurrentRead from '../Components/ContentPages/CurrentRead';
import { startOfToday } from 'date-fns';
import { format } from 'date-fns/esm';



export const JotContext = createContext();

export const JotDistributor = props => {
    const [content, setContent] = useState(<CurrentRead />);
    const [searchField, setSearchField] = useState('');
    
    return (
        <JotContext.Provider value={{content: [content, setContent], search: [searchField, setSearchField]}}>
            {props.children}
        </JotContext.Provider>
    );
}