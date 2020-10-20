import React, { useContext } from 'react'
import { insightsDocRef } from '../firebase';
import { JotContext} from '../Resources/JotContext';

import {Card, CardActions, CardContent, IconButton, Typography } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';

import ReactHtmlParser from 'react-html-parser';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: 240,
        height: 280,
        backgroundColor: fade(theme.palette.common.white),
    },
    text: {
        margin: theme.spacing(2, 1, 0, 1),
        width: '100%',
        height: 130,
        overflow: 'auto',
        padding: 0,
    },
    button: {
        margin: theme.spacing(0, 1, 0, 0),
        backgroundColor: fade(theme.palette.secondary.light),
    }
}));


const InsightCard = ({ id, title, author, jots, onDelete }) => {
    const { content } = useContext(JotContext);
    const [contentValue, setContentValue] = content;

    const classes = useStyles();
    return (
        <Card raised={true} className={classes.root} variant="outlined">
                <CardContent>
                    <div>
                        <Typography variant="button" gutterBottom>
                            {title}
                        </Typography>

                        <Typography variant="caption" color="textSecondary">  by {author}</Typography>
                    </div>
                    <Typography className={classes.text} variant="body2" component="p">
                        {ReactHtmlParser(jots)}
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton variant="outlined" color="secondary" className={classes.button} size="medium" onClick={onDelete}>
                        <DeleteOutlineRoundedIcon />
                    </IconButton>
                </CardActions>
        </Card>
    )
};

export default InsightCard;
