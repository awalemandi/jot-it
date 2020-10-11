import React from 'react'
import { insightsDocRef } from '../firebase';

import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 200,
        height: 'auto',
    },
    title: {
        fontSize: 14,
    },
    text: {
        height: 150,
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
                    {title} by {author}
                </Typography>
                <Typography variant="h5" component="h2">
                </Typography>
                <Typography className={classes.text} variant="body2" component="p">
                    {jots}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="outlined" className={classes.button} size="small" onClick={() => handleDelete(docId)}>Delete</Button>
            </CardActions>
        </Card>
    )
};

export default InsightCard;
