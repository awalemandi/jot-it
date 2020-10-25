import React, { useState, useContext, useEffect } from 'react';
import { db, insightsDocRef } from '../../firebase';
import { JotContext } from '../../Resources/JotContext';

import { CssBaseline, Grid, Divider, Typography, makeStyles, TextField, IconButton, Input, Snackbar, Tooltip } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';


import SaveRoundedIcon from '@material-ui/icons/SaveRounded';
import DoneAllRoundedIcon from '@material-ui/icons/DoneAllRounded';

import DateFnsUtils from '@date-io/date-fns';
import { startOfToday } from 'date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import { format } from 'date-fns/esm';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    height: 'auto',
    flexShrink: 5,
  },
  textEditor: {
    height: 130,
    width: '100%',
    overflowY: 'auto',
    overflowX: 'hidden'
  },
  button: {
    margin: theme.spacing(0),
    backgroundColor: theme.palette.common.white,
  },
}));



const CurrentRead = () => {
  const classes = useStyles();
  const { info } = useContext(JotContext);
  const [infoValue, setInfoValue] = info;
  const [preloadData, setPreloadData] = useState({});
  const [alertOpen, setAlertOpen] = useState(false);

  //preload current read information
  useEffect(() => {
    const unsubcribe = insightsDocRef.where('completed', '==', false)
      .onSnapshot(snapshot => {
        let currentInsight = {};
        snapshot.forEach(doc => {
          currentInsight = { id: doc.id, ...doc.data() }
        })
        setPreloadData(
          {
            title: currentInsight.title,
            author: currentInsight.author,
            commenceDate: currentInsight.commenceDate,
            completeDate: currentInsight.completeDate,
            jots: currentInsight.jots,
            completed: currentInsight.completed,
            archived: currentInsight.archived,
          })
      })
    return () => unsubcribe;
  }, []);

  
  const handleAlertOpen = () => {
    setAlertOpen(true);
  };

  const handleAlertClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlertOpen(false);
  };

  //onChange handlers for updating state
  const updateState = {
    title: function (e) {
      setInfoValue({
        ...infoValue,
        title: e.target.value
      })
      setPreloadData({
        ...preloadData,
        title: e.target.value
      })
    },

    author: function (e) {
      setInfoValue({
        ...infoValue,
        author: e.target.value
      })
      setPreloadData({
        ...preloadData,
        author: e.target.value
      })
    },

    commenceDate: function (date) {
      setInfoValue({
        ...infoValue,
        commenceDate: date
      })
      setPreloadData({
        ...preloadData,
        commenceDate: date
      })
    },

    jots: function (e, editor) {
      const data = editor.getData();
      setInfoValue({
        ...infoValue,
        jots: data
      })
      setPreloadData({
        ...preloadData,
        jots: data
      })
    },
  };

  // function Alert(props) {
  //   return <MuiAlert elevation={6} variant="filled" {...props} />;
  // }

  // const saveSuccessAlert = () => {
  //   console.log(`snackbar being returned ${alertOpen}`);
  //   console.log(alertOpen);
  //   return <Snackbar open={alertOpen} autoHideDuration={6000} onClose={handleAlertClose}>
  //     <Alert onClose={handleAlertClose} severity="success">
  //       Your progress has been saved! 👍
  //             </Alert>
  //   </Snackbar>;
  // };

  // const completeSuccessAlert = () => {
  //   return <Snackbar open={alertOpen} autoHideDuration={6000} onClose={handleAlertClose}>
  //     <Alert onClose={handleAlertClose} severity="success">
  //       Wow, you finished your read! 👏
  //                 </Alert>
  //   </Snackbar>
  // };

  // const deleteWarningAlert = () => {
  //   return <Snackbar open={alertOpen} autoHideDuration={6000} onClose={handleAlertClose}>
  //     <Alert onClose={handleAlertClose} severity="warning">
  //       Your progress has been saved! 👍
  //                 </Alert>
  //   </Snackbar>
  // };

  const progressSavedAlert = () => {
    alert('Your progress has been saved! 👍');
  };

  const finishedReadAlert = () => {
    alert('Wow, you finished your read! 👏');
  };

  //onClick handlers for save and markAsComplete button
  //if !currentInsight create new document, else update currentInsight
  const handleSave = () => {
    if (preloadData.id) {
      insightsDocRef.doc(preloadData.id)
        .update({
          title: info[0].title,
          author: info[0].author,
          commenceDate: info[0].commenceDate,
          completeDate: '',
          jots: info[0].jots,
          archived: false,
          completed: false
        })
        .then(() => {
          progressSavedAlert();
        })
        .catch(e => { console.log(e) })
    } else {
      insightsDocRef.doc()
        .set({
          title: info[0].title,
          author: info[0].author,
          commenceDate: info[0].commenceDate,
          completeDate: '',
          jots: info[0].jots,
          archived: false,
          completed: false
        })
        .then(() => {
          progressSavedAlert();
        })
        .catch(e => { console.log(e) })
    }
  };

  //if !currentInsight create new document, else update currentInsight to completed
  const handleComplete = () => {
    console.log(info[0].title)
    if (preloadData.id) {
      insightsDocRef.doc(preloadData.id)
        .update({
          title: info[0].title,
          author: info[0].author,
          commenceDate: info[0].commenceDate,
          completeDate: startOfToday(),
          jots: info[0].jots,
          completed: true,
          archived: false
        })
        .then(() => {
          setPreloadData({});
          setInfoValue({
            title: '',
            author: '',
            commenceDate: startOfToday(),
            completeDate: '',
            jots: '',
            completed: false,
            archived: false
          });
          finishedReadAlert();
        })
        .catch(e => { console.log(e) });
    } else {
      insightsDocRef.doc()
        .set({
          title: info[0].title,
          author: info[0].author,
          commenceDate: info[0].commenceDate,
          completeDate: startOfToday(),
          jots: info[0].jots,
          completed: true,
          archived: false
        })
        .then(() => {
          setPreloadData({});
          setInfoValue({
            title: '',
            author: '',
            commenceDate: startOfToday(),
            completeDate: '',
            jots: '',
            completed: false,
            archived: false
          });
          finishedReadAlert();
        })
        .catch(e => { console.log(e) });
    }
  };


  return (
    <>
      <CssBaseline />
      <form noValidate className={classes.root}>
        <Grid container spacing={5} justify="center">
          <Grid item xs={false} lg={2}></Grid>
          <Grid item xs={8}>
            <Typography component="h1" variant="h6">
              New Insight
                <Divider />
            </Typography>
          </Grid>
          <Grid item xs={false} lg={2}></Grid>
          <Grid item xs={8} lg={4}>
            <Input
              value={
                  preloadData ?
                    preloadData.title : info[0].title
                }
              name="title"
              placeholder="Title"
              fullWidth
              onChange={updateState.title}
              required
              inputProps={{ 'aria-label': 'description' }}
            />
          </Grid>

          <Grid item xs={8} lg={4}>
            <Input
              value={
                  preloadData ?
                    preloadData.author : info[0].author
                }
              name="author"
              placeholder="Author"
              fullWidth
              onChange={updateState.author}
              required
              inputProps={{ 'aria-label': 'description' }}
            />
          </Grid>

          <Grid item xs={7} lg={5}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                // format="dd/MM/yyyy"
                margin="normal"
                label="commenceDate"
                value={
                  preloadData ?
                    preloadData.commenceDate : info[0].commenceDate
                }
                placeholder="dd/MM/yyyy"
                onChange={updateState.commenceDate}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item xs={false} lg={3}></Grid>

          <Grid className={classes.textEditor} item xs={8}>
            <CKEditor
              editor={ClassicEditor}
              data={
                  preloadData ?
                    preloadData.jots : info[0].jots
                }
              onChange={updateState.jots}
            />
          </Grid>

          <Grid item container xs={12} justify="space-around" alignItems="center">
            <Grid item xs={4}></Grid>
            <Grid item xs={2}>
              <Tooltip title="Save">
                <IconButton
                color="secondary"
                size="medium"
                className={classes.button}
                onClick={handleSave}
                >
                  <SaveRoundedIcon />
                </IconButton>
              </Tooltip>
            </Grid>

            <Grid item xs={2}>
              <Tooltip title="Mark complete">
                <IconButton
                color="secondary"
                size="medium"
                className={classes.button}
                onClick={handleComplete}
                >
                  <DoneAllRoundedIcon />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item xs={3}></Grid>
          </Grid>
        </Grid>
      </form>
    </>
  )
}

export default CurrentRead;