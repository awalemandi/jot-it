import React from 'react';
import firebase from 'firebase/app';
import { userDocRef } from '../../firebase';


import { fade, makeStyles } from '@material-ui/core/styles';
import { Typography, Divider, Fab, TextField, Button, Grid, Icon, Tooltip, Hidden } from '@material-ui/core';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import TbrList from '../TbrList';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        textAlign: 'center',
    },
    header: {
        textAlign: 'center',
        margin: theme.spacing(0, 0, 2, 0)
    },
    button: {
        margin: theme.spacing(0,1,1,0),
    },
}));


const ToBeRead = () => {
    const classes = useStyles();
    const [input, setInput] = React.useState('');
    
    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleAddItem = item => {
        item = input;
        if (!item || item == '')
            return;
            userDocRef
        .update({
            toBeRead: firebase.firestore.FieldValue.arrayUnion(item)
        })
        .then(() => {
            setInput('');
        })
        .catch(e => { console.log(e) });
    };


    return (
        <Grid container className={classes.root} justify="space-around" alignItems="center">
            <Hidden xsDown>
                <Grid item xs={2}></Grid>
            </Hidden>
            <Grid item xs={12} sm={8}>
                <Typography component="h1" variant="h6" className={classes.header}>
                To Be Read 🛒 
                </Typography>
                <Divider />
            </Grid>
            <Hidden xsDown>
                <Grid item xs={2}></Grid>
            </Hidden>

            <Grid item xs={2}></Grid>
            <Grid item xs={5}>
                <TextField
                    name="input"
                    value={input}
                    fullWidth
                    placeholder="Add a new book"
                    autoFocus
                    onChange={handleChange}
                />
            </Grid>
            <Grid item xs={1}>
                <Tooltip title="Add">
                    <Fab
                    size="small"
                    color="primary"
                    className={classes.button}
                    onClick={handleAddItem}
                    >
                        <AddRoundedIcon />
                    </Fab>
                </Tooltip>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs ={12} sm={10} md={8}>
                <TbrList/>
            </Grid>
            
        </Grid>
    )
};

export default ToBeRead;