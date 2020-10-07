import firebase from 'firebase/app';
import 'firebase/firestore';


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
const insightsDocRef = db.collection('users/cussinstoic/insights');


const saveInsight = insightObject => {
    insightsDocRef
    .add({
        insights: {
            insightObject
        }
    })
    .then(() => {
        alert('Your progress has been saved! 👍')
    })
    .catch(e => { console.log(e) });
}

  const markAsComplete = () => {
    // insightRef
    //   .update({
    //     title: info[0].title,
    //     author: info[0].author,
    //     commenceDate: info[0].commenceDate,
    //     jots: info[0].jots,
    //     archived: false,
    //     completed: true,
    //   })
    //   .then(() => {
    //     setInfoValue({
    //       title: '',
    //       author: '',
    //       commenceDate: '01/01/2020',
    //       jots: 'Enter jots here...',
    //       completed: false,
    //       archived: false,
    //     });
    //     console.log(info);
    //     db.collection('users/cussinstoic/insights/').doc();
    //     alert('Wow, you finished your read! 👏' )
    // })
    // .catch(e => { console.log(e) });
  } 

export { db, saveInsight, markAsComplete };