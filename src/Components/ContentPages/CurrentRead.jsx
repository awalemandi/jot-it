import React, { useState, useContext } from 'react';
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
  const [infoValue, setinfoValue] = info;
  const classes = useStyles();
  
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
                        // variant="outlined"
                        fullWidth
                        id="title"
                        label="Title"
                        autoFocus
                    />
                </Grid>

                <Grid item xs={4}>
                    <TextField
                        // variant="outlined"
                        fullWidth
                        id="author"
                        label="Author"
                        name="author"
                    />
                </Grid>

                <Grid item xs={8}>
                    <DatePicker/>
                </Grid>
                
                <Grid item xs={8} className={classes.textEditor}>
                    <TextEditor/>
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