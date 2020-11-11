import React from 'react'

import {Card, CardActions, CardContent, IconButton, Typography, Grid, Tooltip, Paper } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';
import RestoreFromTrashRoundedIcon from '@material-ui/icons/RestoreFromTrashRounded';

import ReactHtmlParser from 'react-html-parser';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexGrow: 1,
        flexShrink: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
            [theme.breakpoints.down('sm')]: {
                maxWidth: '12rem',
                height: '16rem'
            },
            [theme.breakpoints.up('sm')]: {
                maxWidth: '14rem',
                maxHeight: '20rem'
            },
        margin: theme.spacing(2),
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
        flexShrink: 1,
        height: '2rem',
    },
    text: {
        flexShrink: 1,
        margin: theme.spacing(2, 1, 0, 1),
        padding: theme.spacing(2, 0, 0, 0),
        width: '100%',
        [theme.breakpoints.down('sm')]: {
                height: '6rem'
            },
            [theme.breakpoints.up('md')]: {
                height: '9rem'
            },
        overflowY: 'auto',
        overflowX: 'hidden'
    },
    button: {
        flexShrink: 1,
        margin: 0
    },
}));


const InsightCard = ({ id, title, author, jots, commenceDate, completeDate, onDelete, renderRestore, onRestore }) => {

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
                        {/* <Typography variant="caption" color="textSecondary">{commenceDate} to {completeDate}</Typography> */}
                        <Typography className={classes.text} variant="body2" component="p" align="left">
                            {ReactHtmlParser(jots)}
                        </Typography>
                </CardContent>
                <CardActions>
                    <Grid container justify="space-between" className={classes.action}>
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
