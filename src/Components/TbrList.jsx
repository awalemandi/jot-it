import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import { userDocRef } from '../firebase';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, Checkbox, IconButton } from '@material-ui/core';
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';

const useStyles = makeStyles((theme) => ({
    paper: {
        margin: theme.spacing(0, 0, 0, 1),
        padding: theme.spacing(0, 0, 0, 1),
        width: '100%',
        height: 'auto',
        overflow: 'auto',
    },
    complete: {
        textDecoration: 'line-through',
        opacity: 0.4,
    }
}));

const handleItemDelete = item => {
    userDocRef.update({
        toBeRead: firebase.firestore.FieldValue.arrayRemove(item)
    })
    .catch(e=> {console.log(e)});
};


const TbrList = () => {
    const classes = useStyles();
    const [loading, setLoading] = useState(true);
    const [itemsArray, setItemsArray] = useState(null);

    useEffect(() => {
        const unsubcribe = userDocRef
            .onSnapshot(snapshot => {
                const newItems = [];
                snapshot.data().toBeRead.map(e => {
                    newItems.push(e);
                });
                setItemsArray(newItems);
                setLoading(false);
            })
        return () => unsubcribe;
    }, [])
    
    return !loading ? (
        <List className={classes.paper}>
            {itemsArray.map(item => {
                return (
                    <ListItem dense>
                        <ListItemIcon>
                            <ChevronRightRoundedIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText className={classes.itemText} primary={item} />
                        <ListItemSecondaryAction>
                            <IconButton
                                edge="end"
                                aria-label="comments"
                                onClick={() => { handleItemDelete(item) }}
                            >
                                <HighlightOffRoundedIcon color="primary" />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                );
            })}
        </List>
    )
        : <>Loading...</>
};

export default TbrList;
