import React from 'react'
import { insightsDocRef } from '../firebase';

import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import ReactHtmlParser from 'react-html-parser';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: 250,
        height: 300,
        overflow: 'scroll',
    },
    text: {
        margin: theme.spacing(2,1,0,1),
        width: '100%',
        height: 150,
        overflow: 'scroll',
        padding: 0,
    },
    button: {
        marginTop: 0,
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
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography variant="button" gutterBottom>
                    {title} by {author}
                </Typography>
                <Typography variant="h5" component="h2">
                </Typography>
                <Typography className={classes.text} variant="body2" component="p">
                    {ReactHtmlParser(jots)}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="outlined" className={classes.button} size="small" onClick={() => handleDelete(docId)}>Delete</Button>
            </CardActions>
        </Card>
    )
};

export default InsightCard;
