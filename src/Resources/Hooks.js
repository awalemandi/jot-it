import React, { useState, useContext, useEffect } from 'react';
import { insightsDocRef } from '../firebase';

const useCurrentRead = () => {
    const [insightDetails, setInsightDetails] = useState({});

    useEffect(() => {
        insightsDocRef.where('completed', '==', 'false')
            .get()
            .then(doc => {
                let incompleteInsight = {};
                doc.exists ?
                    incompleteInsight = doc.data() : console.log("No incomplete insight in the library!");
            })
            .catch(e => { console.log(e) });
        console.log(incompleteInsight);
    }, []);
}