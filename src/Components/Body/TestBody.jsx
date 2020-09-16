import React from 'react';
import clsx from 'clsx';
import {fade, makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Brightness6RoundedIcon from '@material-ui/icons/Brightness6Rounded';
import InputBase from '@material-ui/core/InputBase';
import logo from './Jotit-logo-small.png';

import LibraryBooksRoundedIcon from '@material-ui/icons/LibraryBooksRounded';
import MenuBookRoundedIcon from '@material-ui/icons/MenuBookRounded';
import PlaylistAddRoundedIcon from '@material-ui/icons/PlaylistAddRounded';
import FunctionsRoundedIcon from '@material-ui/icons/FunctionsRounded';

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
     root: {
        display: 'flex',
        flexGrow: 1,
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
        display: 'block',
        margin: theme.spacing(2),
    },
    
    logo: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
        display: 'block',
        },
        height: 'auto',
        width: 'auto',
        maxHeight: 200,
        maxWidth: 400,
    },
    
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.45),
        '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
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
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1.5em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
        width: '60ch',
        },
    },

    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
        display: 'flex',
        },
    },

    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
        display: 'none',
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
        width: drawerWidth,
        transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
        }),
    },
     
    drawerClose: {
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
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default function TestBody() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerState = () => {
    (open) ? setOpen(false) : setOpen(true);
  };

  return (
    <div className={classes.root}>
        <CssBaseline />
        <AppBar
        position="fixed"
        className={clsx(classes.appBar)}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerState}
                    edge="start"
                    className={clsx(classes.icon)}
                >
                    <MenuIcon />
                </IconButton>
                  
                <div className={classes.logo}>
                    <img className={classes.logo} src={logo} alt="logo"/>
                </div>
                  
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>

                    <InputBase
                    placeholder="Search…"
                    classes={{
                         root: classes.inputRoot,
                         input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
                  
                <div className={classes.icon}>
                    <IconButton>
                        <Brightness6RoundedIcon />
                    </IconButton>
                </div>
                
                <div className={classes.icon}>
                    <IconButton>
                        <AccountCircleIcon />
                    </IconButton>
                </div>

            </Toolbar>
        </AppBar>
          
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
            })}
            classes={{
            paper: clsx({
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            }),
            }}
        >
            <div className={classes.toolbar}/>
         
            <List>
                  
                <ListItem button>
                    <ListItemIcon>
                        <MenuBookRoundedIcon/>
                    </ListItemIcon>
                        <ListItemText primary="Current Read" />
                </ListItem>
              
                <ListItem button>
                    <ListItemIcon>
                        <LibraryBooksRoundedIcon />
                    </ListItemIcon>
                        <ListItemText primary="Library" />
                 </ListItem>
          
                <ListItem button>
                    <ListItemIcon>
                        <PlaylistAddRoundedIcon />
                    </ListItemIcon>
                        <ListItemText primary="TBR List" />
                </ListItem>
                    
                <ListItem button>
                    <ListItemIcon>
                        <FunctionsRoundedIcon />
                    </ListItemIcon>
                        <ListItemText primary="Statistics" />
                </ListItem>  
            
            </List>
              
            <Divider />
                  
            <List>
                  
                <ListItem button>
                    <ListItemIcon>
                        <MenuBookRoundedIcon/>
                    </ListItemIcon>
                        <ListItemText primary="Current Read" />
                </ListItem>
              
                <ListItem button>
                    <ListItemIcon>
                        <LibraryBooksRoundedIcon />
                    </ListItemIcon>
                        <ListItemText primary="Library" />
                 </ListItem>
          
                <ListItem button>
                    <ListItemIcon>
                        <PlaylistAddRoundedIcon />
                    </ListItemIcon>
                        <ListItemText primary="TBR List" />
                </ListItem>
                    
                <ListItem button>
                    <ListItemIcon>
                        <FunctionsRoundedIcon />
                    </ListItemIcon>
                        <ListItemText primary="Statistics" />
                </ListItem>  
            
            </List>
              
        </Drawer>
          
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
            facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
            gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
            donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
            adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
            Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
            imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
            arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
            donec massa sapien faucibus et molestie ac.
            </Typography>
            <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
            facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
            tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
            consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
            vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
            hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
            tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
            nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
            accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
            </Typography>
        </main>
    </div>
  );
}
