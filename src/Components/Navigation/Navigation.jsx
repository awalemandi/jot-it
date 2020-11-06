import React, { useState, useContext, useEffect } from 'react';
import { JotContext } from '../../Resources/JotContext';

import { fade, withStyles, makeStyles } from '@material-ui/core/styles';
import {CssBaseline, AppBar, Toolbar, Drawer, List, ListItem, ListItemIcon, ListItemText, Hidden, Divider, IconButton, InputBase, Tooltip, ClickAwayListener } from '@material-ui/core';
import clsx from 'clsx';

import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenRoundedIcon from '@material-ui/icons/MenuOpenRounded';
import CodeRoundedIcon from '@material-ui/icons/CodeRounded';
import FiberNewRoundedIcon from '@material-ui/icons/FiberNewRounded';
import StoreRoundedIcon from '@material-ui/icons/StoreRounded';
import LayersRoundedIcon from '@material-ui/icons/LayersRounded';
import InsertChartRoundedIcon from '@material-ui/icons/InsertChartRounded';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import logo from './jotit_white.png';

const drawerWidth = 200;
const helpMessage = `Jot it is a note taking app that helps you track and revisit insights. 
                    You can add new insights by completing a new read. You can browse through your insights library or use the search bar to find it.
                    You can also delete and restore them as needed and use the TBR list to track future reads.
                    Happy Jotting! 📖✍️`;

const LightTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 11,
        maxWidth: 200,
},
}))(Tooltip);


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'space-between',
    },
    
    appBar: {
        maxHeight: 60,
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
    },
    
    icon: {
        display: 'flex',
        flexShrink: 2,
        margin: theme.spacing(0),
    },
    
    logo: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
        display: 'block',
        },
        height: 'auto',
        width: 'auto',
        maxHeight: 40,
        maxWidth: 'auto',
    },
    
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.45),
        '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(1),
        marginLeft: theme.spacing(2),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
        },
    },

    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    inputRoot: {
        color: 'inherit',
    },

    inputInput: {
        flexGrow: 2,
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1.5em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('xs')]: {
        },
    },

    
    hide: {
    display: 'none',
    },
    
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },

    drawerOpen: {
    
    [theme.breakpoints.up('md')]: {
            backgroundColor: theme.palette.secondary.main,
            width: drawerWidth,
            transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },  
    backgroundColor: theme.palette.secondary.main,
    width: theme.spacing(9) + 1,
    },
    
    drawerClose: {
        backgroundColor: theme.palette.secondary.main,
        transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
        },
    },
    
    toolbar: {
        display: "flex",
        alignItems: 'center',
        justifyContent: 'space-between',
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));


const Navigation = props => {
    const classes = useStyles();
    const { search } = useContext(JotContext);
    const [searchField, setSearchField] = search;
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [tipOpen, setTipOpen] = useState(false);

    const handleTooltipClose = () => {
        setTipOpen(false);
    };

    const handleTooltipState = () => {
        setTipOpen(!tipOpen);
    }

    const handleDrawerState = () => {
        (drawerOpen) ? setDrawerOpen(false) : setDrawerOpen(true);
    };
    
    const handleSearch = e => {
        setSearchField(e.target.value);
    };
    

    return (
        <div>
        <CssBaseline />
        <AppBar
        position="fixed"
        className={clsx(classes.appBar)}
        
        >
                <Toolbar className={classes.toolbar}>
                <Hidden smDown>
                    <IconButton
                        color="default"
                        aria-label="open drawer"
                        onClick={handleDrawerState}
                        edge="start"
                        className={classes.icon}
                    >
                        {
                            !drawerOpen ? <MenuIcon /> : <MenuOpenRoundedIcon />
                        }
                    </IconButton>
                </Hidden>
                <div>
                    <img className={classes.logo} src={logo} alt="logo"/>
                </div>
                <div></div>
                
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    
                    <InputBase
                            placeholder="Search insights.."
                            onChange={handleSearch}
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
                <div></div>
                <div></div>
                
                <div className={classes.icon} edge="end">
                    <ClickAwayListener onClickAway={handleTooltipClose}>
                        <div>
                        <LightTooltip
                            PopperProps={{
                            disablePortal: true,
                            }}
                            onClose={handleTooltipClose}
                            open={tipOpen}
                            disableFocusListener
                            disableHoverListener
                            disableTouchListener
                            title={helpMessage}
                            arrow
                        >
                            <IconButton onClick={handleTooltipState} >
                                <LiveHelpIcon/>
                            </IconButton>
                        </LightTooltip>
                        </div>
                    </ClickAwayListener>
                    <div></div>
                        <Tooltip title="Source code">
                            <a href="https://github.com/awalemandi/jot-it" target="_blank">
                                <IconButton >
                                    <CodeRoundedIcon />
                                </IconButton>
                            </a>
                        </Tooltip>
                </div>
                
            </Toolbar>
        </AppBar>
        
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
            [classes.drawerOpen]: drawerOpen,
            [classes.drawerClose]: !drawerOpen,
            })}
            classes={{
            paper: clsx({
                [classes.drawerOpen]: drawerOpen,
                [classes.drawerClose]: !drawerOpen,
            }),
            }}
        >
            <div className={classes.toolbar}/>
            
            <List>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem button onClick={props.page.currentRead}>
                    <ListItemIcon>
                        <FiberNewRoundedIcon/>
                    </ListItemIcon>
                        <ListItemText primary="Current Read" />
                </ListItem>

                <ListItem button onClick={props.page.library}>
                    <ListItemIcon>
                        <LayersRoundedIcon color="action"/>
                    </ListItemIcon>
                        <ListItemText primary="Insights Library" />
                </ListItem>

                <ListItem button onClick={props.page.toBeRead}>
                    <ListItemIcon>
                        <StoreRoundedIcon/>
                    </ListItemIcon>
                        <ListItemText primary="To Be Read" />
                </ListItem>
                    
                <ListItem button onClick={props.page.statistics}>
                    <ListItemIcon>
                        <InsertChartRoundedIcon/>
                    </ListItemIcon>
                        <ListItemText primary="Statistics" />
                </ListItem>  
            </List>
            
            <Divider />
            
            <List>

                <ListItem button onClick={props.page.bin}>
                    <ListItemIcon>
                        <DeleteForeverRoundedIcon/>
                    </ListItemIcon>
                        <ListItemText primary="Bin" />
                </ListItem>
                    
            </List>
            
        </Drawer>
    </div>
    );
}

export default Navigation;