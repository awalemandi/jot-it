import React, { useState, useContext, useEffect } from 'react';
import { db } from '../../firebase';
import { JotContext } from '../../Resources/JotContext';

import { CssBaseline, Grid, Divider, Typography, Container, makeStyles, TextField, IconButton, Button } from '@material-ui/core';

import SaveRoundedIcon from '@material-ui/icons/SaveRounded';
import DoneAllRoundedIcon from '@material-ui/icons/DoneAllRounded';

import DatePicker from '../../Resources/DatePicker';
import TextEditor from '../../Resources/TextEditor';


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
        commenceDate: e.target.value
      })
    },

    jots: function (e, editor) {
      console.log(editor.getData());
      setInfoValue({
        ...infoValue,
        jots: e.target.value
      })
    },
}

  const saveInsight = () => {
    console.log(info[0].title);
    console.log(info[0].commenceDate);
    console.log(info[0].jots);
    // db.collection('insights')
    //   .add({
    //     title: info.title,
    //     author: info.author,
    //     commenceDate: info.commenceDate,
    //     jots: info.jots,
    //     archived: info.archived,
    //   })
    //   .then(() => {
    //     alert('Your progress has been saved! emoji ')
    //   })
    //   .catch(e => { console.log(e) });
  }

  const markAsComplete = () => {
    // firebase
    //   .firestore()
    //   .collection('insights')
    //   .doc(id)
    //   .update({
    //     title: info.title,
    //     author: info.author,
    //     commenceDate: info.commenceDate,
    //     jots: info.jots,
    //     completed: true,
    //     archived: info.archived,
    //   })
  } 

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
                        id="author"
                        label="Author"
                        name="author"
                        onChange={updateState.author}
                    />
              </Grid>

                <Grid item xs={8}>
              <DatePicker onChange={updateState.commenceDate}/>
                </Grid>
                
                <Grid item xs={8} className={classes.textEditor}>
                  <TextEditor onUpdate={updateState.jots}/>
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
                    onClick={saveInsight}
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
                    onClick={markAsComplete}
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