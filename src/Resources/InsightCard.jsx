import React from 'react'
import { insightsDocRef } from '../firebase';

import {Card, CardActions, CardContent, IconButton, Typography } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';

import ReactHtmlParser from 'react-html-parser';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: 250,
        height: 280,
        overflow: 'scroll',
        backgroundColor: fade(theme.palette.common.white),
    },
    text: {
        margin: theme.spacing(2, 1, 0, 1),
        width: '100%',
        height: 130,
        overflow: 'scroll',
        padding: 0,
    },
    button: {
        margin: theme.spacing(0, 1, 0, 0),
        backgroundColor: fade(theme.palette.secondary.light),
    }
}));

const handleDelete = insightId => {
    // console.log(`insight being deleted: ${insightId}`)
    insightsDocRef.doc(insightId)
        .delete()
        .then(() => {
            alert('Insight deleted! 🗑');
        })
        .catch(e => { console.log(e) });
};

const InsightCard = ({ docId, insightId, title, author, jots }) => {
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
                    <IconButton variant="outlined" color="secondary" className={classes.button} size="medium" onClick={() => handleDelete(docId)}>
                        <DeleteOutlineRoundedIcon />
                    </IconButton>
                </CardActions>
        </Card>
    )
};

export default InsightCard;
