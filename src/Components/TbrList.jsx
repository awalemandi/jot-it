import React, { useState, useEffect } from 'react';
import { userDocRef } from '../firebase';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, Checkbox, IconButton } from '@material-ui/core';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';


const useStyles = makeStyles((theme) => ({
    paper: {
        margin: theme.spacing(0, 0, 0, 1),
        padding: theme.spacing(0, 0, 0, 1),
        width: '100%',
        height: 'auto',
        overflow: 'auto',
    },
}));


const useListItemsArray = () => {
    const [itemsArray, setItemsArray] = useState([]);

    useEffect(() => {
        const unsubcribe = userDocRef
            .onSnapshot(snapshot => {
                const newItems = [];
                snapshot.data().toBeRead.map(e => {
                    newItems.push(e);
                });
                setItemsArray(newItems);
            })
        return unsubcribe;
    }, [])
    return itemsArray;
};

// handleItemDelete = item => {
//     //need to create method to remove array items
// };



// const handleToggle = (value) => () => {
    
    // const currentIndex = checked.indexOf(value);
    // const newChecked = [...checked];

    // if (currentIndex === -1) {
    //     newChecked.push(value);
    // } else {
    //     newChecked.splice(currentIndex, 1);
    // }

    // setChecked(newChecked);
// };
 

const TbrList = () => {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(false);

    const handleCheck = () => {
        checked ? setChecked(false) : setChecked(true);
    };

    

    const listItemsArray = useListItemsArray();
    return (
        <List className={classes.paper}>
            {listItemsArray.map(item => {
                // const labelId = `checkbox-list-label-${value}`;

                return (
                    <ListItem dense>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                checked={checked}
                                onChange={handleCheck}
                            />
                        </ListItemIcon>
                        <ListItemText primary={item} />
                        <ListItemSecondaryAction>
                            <IconButton 
                                edge="end" 
                                aria-label="comments"
                                // onClick={handleItemDelete}
                                >
                                <CancelRoundedIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                );
            })}
        </List>
    )
}

export default TbrList;
