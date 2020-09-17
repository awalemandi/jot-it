import React, { useState } from 'react';
import ReactQuill from 'react-quill';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import DatePicker from './DatePicker';
import SaveRoundedIcon from '@material-ui/icons/SaveRounded';
import DoneAllRoundedIcon from '@material-ui/icons/DoneAllRounded';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
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
  const [content, setContent] = useState('');
  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          New Jot
        </Typography>
        <form className={classes.form} noValidate>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        name="title"
                        variant="outlined"
                        required
                        fullWidth
                        id="title"
                        label="Title"
                        autoFocus
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="author"
                        label="Author"
                        name="author"
                    />
                </Grid>

                <Grid item xs={12}>
                    <DatePicker/>
                </Grid>
                
                {/* <Grid item xs={12}>
                    <ReactQuill value={content}
                    onChange={event => setContent(event.target.value)}/>
                </Grid> */}
            </Grid>

            <Grid container justify="center" alignItems="center">
                <Grid item xs={3}></Grid>
                <Grid item xs={2}>
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.saveButton}
                    >
                    <SaveRoundedIcon/>
                    </Button>
                </Grid>

                <Grid item xs={2}></Grid>

                <Grid item xs={2}>
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.completeButton}
                    >
                        <DoneAllRoundedIcon/>
                    </Button>
                </Grid>

                <Grid item xs={3}></Grid>
            
            </Grid>
        </form>
      </div>
    </Container>
  );
}

export default JotForm;