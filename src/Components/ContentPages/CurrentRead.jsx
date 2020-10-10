import React, { useContext, useEffect } from 'react';
import { db, insightsDocRef } from '../../firebase';
import { JotContext } from '../../Resources/JotContext';

import { CssBaseline, Grid, Divider, Typography, makeStyles, TextField, IconButton, Button } from '@material-ui/core';

import SaveRoundedIcon from '@material-ui/icons/SaveRounded';
import DoneAllRoundedIcon from '@material-ui/icons/DoneAllRounded';

import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import ReactHtmlParser from 'react-html-parser';


const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(1,5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: 800,
  },
  textEditor: {
    minHeight: 200,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  saveButton: {
    margin: theme.spacing(7),
  },
  completeButton: {
    margin: theme.spacing(7),
  },
}));

const CurrentRead = () => {
  const { info } = useContext(JotContext);
  const [infoValue, setInfoValue] = info;
  
  const classes = useStyles();

  useEffect(() => {

  }, [info[0]]);
  

  const updateState = {
    title: function (e) {
      setInfoValue({
        ...infoValue,
        title: e.target.value
      })
    },

    author: function (e) {
      setInfoValue({
        ...infoValue,
        author: e.target.value
      })
    },

    commenceDate: function (e) {
      setInfoValue({
        ...infoValue,
        commenceDate: e
      })
    },

    jots: function (e, editor) {
      const data = editor.getData();
      setInfoValue({
        ...infoValue,
        jots: data
      })
    },
  };

  const progressSavedAlert = () => {
    alert('Your progress has been saved! 👍');
  };

  const finishedReadAlert = () => {
    alert('Wow, you finished your read! 👏' );
  };

  const handleSave = () => {
    insightsDocRef.doc()
    .set({
      insightId: `${(info[0].title+info[0].author).toLowerCase()}`,
      title: info[0].title,
      author: info[0].author,
      commenceDate: info[0].commenceDate,
      jots: info[0].jots,
      archived: false,
      completed: false
    })
    .then(() => 
      progressSavedAlert()
    )
    .catch(e => { console.log(e) });
  };

  const handleComplete = () => {
    console.log('Mark as complete function started')
    insightsDocRef.doc()
    .update({
      insightId: `${(info[0].title+info[0].author).toLowerCase()}`,
      title: info[0].title,
      author: info[0].author,
      commenceDate: info[0].commenceDate,
      jots: info[0].jots,
      archived: false,
      completed: true
    })
    .then(() => {
      setInfoValue({
        title: '',
        author: '',
        commenceDate: '01/01/2020',
        jots: 'Jots here..',
        completed: false,
        archived: false,
      });
      console.log('Mark as complete fucntion finished')
      finishedReadAlert()
    })
    .catch(e => { console.log(e) });
  };


  return (
    <>
      <CssBaseline />
      <div className={classes.paper} overflow="visible">
        <Typography component="h1" variant="h6">
          New Insight
          <Divider />
        </Typography>
        
        <form className={classes.form} noValidate >
            <Grid container spacing={2} justify="center">
                <Grid item xs={4}>
                    <TextField
                      name="title"
                      value={info[0].title}
                      fullWidth
                      id="title"
                      label="Title"
                      autoFocus
                      onChange={updateState.title}
                    />
                </Grid>
                
                <Grid item xs={4}>
                    <TextField
                        // variant="outlined"
                        fullWidth
                        value={info[0].author}
                        id="author"
                        label="Author"
                        name="author"
                        onChange={updateState.author}
                    />
              </Grid>

              <Grid item xs={8}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    clearable
                    value={info[0].commenceDate}
                    placeholder="01/01/2020"
                    onChange={updateState.commenceDate}
                    format="dd/MM/yyyy"
                  />
              </MuiPickersUtilsProvider>
                </Grid>
                
                <Grid item xs={8} className={classes.textEditor}>
                  <CKEditor editor={ClassicEditor}
                    data={info[0].jots}
                    onChange={updateState.jots}
                  />
                </Grid>

              <Grid item container xs={12} justify="space-around" alignItems="center">
                <Grid item xs={4}></Grid>
                <Grid item xs={2}>
                  <Button
                    variant="outlined"
                    color="secondary"
                    size="large"
                    className={classes.saveButton}
                    startIcon={<SaveRoundedIcon />}
                    onClick={handleSave}
                  >
                  
                  </Button>
                </Grid>

                <Grid item xs={2}>
                  <Button
                    variant="outlined"
                    color="secondary"
                    size="large"
                    className={classes.completeButton}
                    startIcon={<DoneAllRoundedIcon />}
                    onClick={handleComplete}
                  >
                  
                  </Button>
                </Grid>
                <Grid item xs={3}></Grid>
              </Grid>
            </Grid>

        </form>
      </div>
    </>
  );
}

export default CurrentRead;