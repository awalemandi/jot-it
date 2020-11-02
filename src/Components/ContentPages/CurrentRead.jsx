import React, { useState, useEffect } from 'react';
import { insightsDocRef } from '../../firebase';

import { CssBaseline, Grid, Divider, Typography, makeStyles, IconButton, Input, TextField, Snackbar, Tooltip, Fab, Hidden } from '@material-ui/core';
import PulseLoader from 'react-spinners/PulseLoader';


import SaveRoundedIcon from '@material-ui/icons/SaveRounded';
import DoneAllRoundedIcon from '@material-ui/icons/DoneAllRounded';

import DateFnsUtils from '@date-io/date-fns';
import { startOfToday } from 'date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import { format } from 'date-fns/esm';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Alert from '../../Resources/Alert';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    minHeight: 500,
    maxHeight: 650,
    textAlign: 'center',
  },
  header: {
    textAlign: 'center',
    margin: theme.spacing(0, 0, 2, 0)
  },
  textEditor: {
    height: 130,
    width: '100%',
    overflowY: 'auto',
    overflowX: 'hidden'
  },
  buttonGrid: {
    textAlign: 'center',
  },
  button: {
    margin: theme.spacing(5, 3, 5, 3),
    textAlign: 'center',
    backgroundColor: theme.palette.common.white,
  },
}));
const dateFormat = 'MM/dd/yyyy';

const CurrentRead = () => {
  const newInsightDetails = {
    title: '',
    author: '',
    commenceDate: format(new Date(), dateFormat),
    completeDate: '',
    jots: '',
    completed: false,
    archived: false,
  };

  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [preloadData, setPreloadData] = useState(newInsightDetails);
  const [saveAlertOpen, setSaveAlertOpen] = useState(false);
  const [completeAlertOpen, setCompleteAlertOpen] = useState(false);

  //state handlers for alerts
  const openAlert = action => {
    action == 'save' && setSaveAlertOpen(true);
    action == 'complete' && setCompleteAlertOpen(true);
  };

  const closeAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSaveAlertOpen(false);
    setCompleteAlertOpen(false);
  };

  const saveAlert = <Snackbar open={saveAlertOpen} autoHideDuration={4000} onClose={closeAlert}>
                    <Alert onClose={closeAlert} severity="success">
                      Your progress has been saved! 👍
                    </Alert>
</Snackbar>

  const completeAlert = <Snackbar open={completeAlertOpen} autoHideDuration={4000} onClose={closeAlert}>
                    <Alert onClose={closeAlert} severity="success">
                      Wow, you finished your read! 👏
                    </Alert>
</Snackbar>
  
 //preload current read information on initial render
  useEffect(() => {
    const unsubcribe = insightsDocRef.where('completed', '==', false)
      .onSnapshot(snapshot => {
        let currentInsight = {};
        snapshot.forEach(doc => {
          currentInsight = { id: doc.id, ...doc.data() }
        })
        //Only set preloadData if incoming data is defined 
        currentInsight.id ? setPreloadData(currentInsight) : setPreloadData(newInsightDetails);
        setLoading(false);
      })
    return () => unsubcribe;
  }, []);


  const currentInsightDetails = {
    title: preloadData.title,
    author: preloadData.author,
    commenceDate: preloadData.commenceDate,
    completeDate: '',
    jots: preloadData.jots,
    archived: false,
    completed: false
  };

  const completeInsightDetails = {
    title: preloadData.title,
    author: preloadData.author,
    commenceDate: preloadData.commenceDate,
    completeDate: format(new Date(), dateFormat),
    jots: preloadData.jots,
    archived: false,
    completed: true
  }


  //onChange handlers for updating input state
  const updateState = {
    title: function (e) {
      setPreloadData({
        ...preloadData,
        title: e.target.value
      })
    },

    author: function (e) {
      setPreloadData({
        ...preloadData,
        author: e.target.value
      })
    },

    commenceDate: function (date) {
      const formattedDate = (format(date, dateFormat));
      setPreloadData({
        ...preloadData,
        commenceDate: formattedDate,
      })
    },

    jots: function (e, editor) {
      const data = editor.getData();
      setPreloadData({
        ...preloadData,
        jots: data
      })
    },
  };

  //onClick handlers for save and markAsComplete button
  //if !currentInsight create new document, else update currentInsight
  const handleSave = () => {
    if (preloadData.id) {
      insightsDocRef.doc(preloadData.id)
        .update(currentInsightDetails)
        .then(() => {
          openAlert('save');
        })
        .catch(e => { console.log(e) })
    } else {
      console.log(preloadData);
      insightsDocRef.doc()
        .set(currentInsightDetails)
        .then(() => {
          openAlert('save');
        })
        .catch(e => { console.log(e) })
    }
  };

  //if !currentInsight create new document, else update currentInsight to completed
  const handleComplete = () => {
    if (preloadData.id) {
      insightsDocRef.doc(preloadData.id)
        .update(completeInsightDetails)
        .then(() => {
          setPreloadData(newInsightDetails);
          openAlert('complete');
        })
        .catch(e => { console.log(e) });
    } else {
      console.log(completeInsightDetails);
      insightsDocRef.doc()
        .set(completeInsightDetails)
        .then(() => {
          setPreloadData(newInsightDetails);
          openAlert('complete');
        })
        .catch(e => { console.log(e) });
    }
  };


  return !loading ?
    <form className={classes.root}>
      <Grid container spacing={5} justify="center">

          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <Typography component="h1" variant="h6" className={classes.header}>
              New Insight 🌱 
            </Typography>
            <Divider />
          </Grid>
          <Grid item xs={2}></Grid>

            <Grid item xs={2}></Grid>
          <Grid item xs={8} lg={4}>
            <Input
              value={preloadData.title}
              name="title"
              placeholder="Title"
              fullWidth
              onChange={updateState.title}
              required
              inputProps={{ 'aria-label': 'description' }}
            />
          </Grid>
          <Hidden lgUp>
            <Grid item xs={2}></Grid>
          </Hidden>
          <Hidden lgUp>
            <Grid item xs={2}></Grid>
          </Hidden>
          <Grid item xs={8} lg={4}>
            <Input
              required
              value={preloadData.author}
              name="author"
              placeholder="Author"
              fullWidth
              onChange={updateState.author}
              inputProps={{ 'aria-label': 'description' }}
            />
        </Grid>
            <Grid item xs={2}></Grid>
          
          <Grid item xs={8} lg={4}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                label="Commence Date:"
                value={preloadData.commenceDate}
                placeholder="MM/dd/yyyy"
                onChange={updateState.commenceDate}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
          </Grid>
        <Grid item xs={8} lg={4}></Grid>
        <Hidden lgUp>
          <Grid item xs={2}></Grid>
        </Hidden>

          <Grid className={classes.textEditor} item xs={8}>
            <CKEditor
              editor={ClassicEditor}
              data={preloadData.jots}
              onChange={updateState.jots}
            />
          </Grid>

          <Grid item container xs={12} justify="space-around" alignItems="center">
            <Grid item xs={3}></Grid>
            <Grid item xs={3} className={classes.buttonGrid}>
              <Tooltip title="Save">
                <Fab
                color="inherit"
                size="medium"
                variant="extended"
                className={classes.button}
                onClick={handleSave}
                >
                  <SaveRoundedIcon color="primary"/>
                </Fab>
              </Tooltip>
            </Grid>

            <Grid item xs={3} className={classes.buttonGrid}>
              <Tooltip title="Mark complete">
                <Fab
                  color="inherit"
                  size="medium"
                  variant="extended"
                  className={classes.button}
                  onClick={handleComplete}
                >
                  <DoneAllRoundedIcon color="primary" />
                </Fab>
              </Tooltip>
            </Grid>
            <Grid item xs={3}></Grid>

          </Grid>
        </Grid>
      {saveAlert}
      {completeAlert}
    </form>
    :
    <PulseLoader
      size={10}
      margin={5}
      color={'#4db6ac'}
      loading={true}
    />
}

export default CurrentRead;