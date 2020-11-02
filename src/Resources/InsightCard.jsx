import React from 'react'

import {Card, CardActions, CardContent, IconButton, Typography, Grid, Tooltip, Paper } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';
import RestoreFromTrashRoundedIcon from '@material-ui/icons/RestoreFromTrashRounded';

import ReactHtmlParser from 'react-html-parser';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: 240,
        height: 275,
        margin: theme.spacing(1, 1, 8, 1),
        pading: theme.spacing(2),
        backgroundColor: fade(theme.palette.secondary.main, 0.45),
        boxShadow: `0 6px 12px 0 #ccc`,
        borderRadius: 16,
        transition: '0.3s',
        '&:hover': {
            transform: 'scale(1.2)',
            backgroundColor: fade(theme.palette.secondary.main, 0.75),
            boxShadow: `1px 2.8px 2.2px rgba(0, 0, 0, 0.034),
                        1px 6.7px 5.3px rgba(0, 0, 0, 0.048),
                        1px 12.5px 10px rgba(0, 0, 0, 0.06),
                        1px 22.3px 17.9px rgba(0, 0, 0, 0.072)`
        },
    },
    header: {
        height: 35,
    },
    text: {
        margin: theme.spacing(2, 1, 0, 1),
        width: '100%',
        height: 130,
        overflow: 'auto',
        padding: 0,
    },
    button: {
        margin: theme.spacing(0, 1, 1, 0)
    }
}));


const InsightCard = ({ id, title, author, jots, onDelete, renderRestore, onRestore }) => {

    const classes = useStyles();
    return (
        <Card raised className={classes.root} variant="outlined">
                <CardContent>
                    <div className={classes.header}>
                        <Typography variant="button" gutterBottom>
                            <b>{title}</b>
                        </Typography>

                        <Typography variant="caption" color="textSecondary">  by {author}</Typography>
                    </div>
                    
                        <Typography className={classes.text} variant="body2" component="p" align="left">
                            {ReactHtmlParser(jots)}
                        </Typography>
                    
                </CardContent>
                <CardActions>
                    <Grid container justify="space-between">
                        <Grid item xs={2}>
                            <Tooltip title="Delete">
                                <IconButton variant="outlined" color="inherit" className={classes.button} size="medium" onClick={onDelete}>
                                    <DeleteOutlineRoundedIcon />
                                </IconButton>
                            </Tooltip>
                        </Grid>
                        <Grid item xs={6}></Grid>
                        <Grid item xs={3}>
                            {
                            renderRestore ?
                            <Tooltip title="Restore">
                                <IconButton variant="outlined" color="inherit" className={classes.button} size="medium" onClick={onRestore}>
                                    <RestoreFromTrashRoundedIcon color="primary"/>
                                </IconButton>
                            </Tooltip>
                            :
                            <></>
                            }
                        </Grid>
                    </Grid>
                </CardActions>
        </Card>
    )
};

export default InsightCard;
