import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Divider, List, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, Checkbox, IconButton, TextField, Button, Grid, Icon } from '@material-ui/core';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';

const useStyles = makeStyles((theme) => ({
    paper: {
        margin: theme.spacing(0, 0, 0, 2),
        padding: theme.spacing(0, 0, 0, 2),
        minHeight: 400,
    },
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    button: {
        margin: theme.spacing(0,1,1,0),
        backgroundColor: '#E8F8F5',
    },
}));


const ToBeRead = () => {
    const classes = useStyles();
    const [checked, setChecked] = React.useState([0]);
    const [input, setInput] = React.useState('');
    
    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <Grid container className={classes.paper} spacing={2} justify="center">
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
                <Typography component="h1" variant="h6">
                    To Be Read
                        <Divider />
                </Typography>
            </Grid>
            <Grid item xs={2}></Grid>

            <Grid item xs={1}></Grid>
            <Grid item xs={7}>
                <TextField
                    name="input"
                    value={input}
                    fullWidth
                    placeholder="Add a new book"
                    autoFocus
                    onChange={handleChange}
                />
            </Grid>

            <Grid item xs={2}>
                <IconButton
                    variant="contained"
                    size="large"
                    color="primary"
                    className={classes.button}
                >
                    <AddRoundedIcon />
                </IconButton>
            </Grid>

            <List className={classes.root}>
                {[0, 1, 2, 3].map((value) => {
                    const labelId = `checkbox-list-label-${value}`;

                    return (
                        <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={checked.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="comments">
                                    <CancelRoundedIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    );
                })}
            </List>
        </Grid>
    )
};

export default ToBeRead;