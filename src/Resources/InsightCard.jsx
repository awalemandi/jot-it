import React from 'react'
import { insightsDocRef } from '../firebase';

import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
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
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {/* {commenceDate} */}
                </Typography>
                <Typography variant="h5" component="h2">
                    {title} by {author}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {jots}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => handleDelete(docId)}>Delete</Button>
            </CardActions>
        </Card>
    )
};

export default InsightCard;
