import React, { useState } from 'react';

import { CssBaseline, Grid, Divider, Typography, Container, makeStyles, TextField, IconButton, Button } from '@material-ui/core';

import SaveRoundedIcon from '@material-ui/icons/SaveRounded';
import DoneAllRoundedIcon from '@material-ui/icons/DoneAllRounded';

import DatePicker from './DatePicker';
import TextEditor from './TextEditor';

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 600,
  },
  textEditor: {
    minHeight: 400,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  saveButton: {
    margin: theme.spacing(3, 0, 2),
  },
  completeButton: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const JotForm = () => {
  const classes = useStyles();
  return (
    <Container component="main">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h6">
          New Jotting
          <Divider />
        </Typography>

        

        <form className={classes.form} noValidate>
            <Grid container spacing={2} justify="center">
                <Grid item xs={7}>
                    <TextField
                        name="title"
                        // variant="outlined"
                        fullWidth
                        id="title"
                        label="Title"
                        autoFocus
                    />
                </Grid>

                <Grid item xs={7}>
                    <TextField
                        // variant="outlined"
                        fullWidth
                        id="author"
                        label="Author"
                        name="author"
                    />
                </Grid>

                <Grid item xs={7}>
                    <DatePicker/>
                </Grid>
                
                <Grid item xs={7}>
                    <TextEditor  className={classes.textEditor}/>
                </Grid>
            
              <Grid item container xs={12} justify="space-around" alignItems="center">
                <Grid item xs={4}></Grid>
                <Grid item xs={2}>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="large"
                    className={classes.saveButton}
                    startIcon={<SaveRoundedIcon />}
                  >
                  
                  </Button>
                </Grid>
              
                <Grid item xs={2}>
                  <Button
                    variant="outlined"
                    color="primary"
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
    </Container>
  );
}

export default JotForm;