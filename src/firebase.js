import firebase from 'firebase/app';
import firestore from  'firebase/firestore';


const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCO2y7VKX0SX9Suu_qbjY58dY7vEUKRK0E",
    authDomain: "jot-it-476ba.firebaseapp.com",
    databaseURL: "https://jot-it-476ba.firebaseio.com",
    projectId: "jot-it-476ba",
    storageBucket: "jot-it-476ba.appspot.com",
    messagingSenderId: "100593912640",
    appId: "1:100593912640:web:967a0f5a595d3ba59108a5",
    measurementId: "G-FH0WZEX1RS"
});

const db = firebaseConfig.firestore();

const userDocRef = db.collection('users').doc('cussinstoic');
const insightsDocRef = db.collection('users/cussinstoic/insights');





// const saveInsight = insightObject => {
//     insightsDocRef
//     .set({
//         insights: {
//             insightObject
//         }
//     })
//     .then(() => {
//         alert('Your progress has been saved! 👍')
//     })
//     .catch(e => { console.log(e) });
// }

//   const markAsComplete = insightObject => {
//     insightsDocRef
//       .update({
//         insightObject
//       })
//     } 

export { db, userDocRef, insightsDocRef };