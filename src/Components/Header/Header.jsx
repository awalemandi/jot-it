import React from 'react';
import { Grid, Hidden, Container, Typography, Icon } from "@material-ui/core";
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Brightness6RoundedIcon from '@material-ui/icons/Brightness6Rounded';
import logo from './logo.png';


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logo: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    height: 'auto',
    width: 'auto',
    maxHeight: 72,
    maxWidth: 250,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
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
}));

const Header = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.grow}>
      <Grid container spacing={1} justify="space-between">
        <AppBar position="sticky" style={{maxHeight: 80 }}>
            <Toolbar>
    
                <Grid item xs={1}>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>
                </Grid>

                <Grid item xs={0} sm={2} lg={3}>
                    <img className={classes.logo} src={logo} alt="logo"/>
                </Grid>

                <Grid item xs={8} sm={6} md={7}>
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
                </Grid>

                <Grid item xs={0} sm={0} md={1} lg={3}>
                    <div className={classes.grow} />
                 </Grid>

                <Grid container item xs={3} sm={3} justify="space-evenly">
                    <Grid item>
                        <IconButton>
                            <Brightness6RoundedIcon />
                        </IconButton>
                    </Grid>

                    <Grid item>
                        <IconButton>
                            <AccountCircleIcon />
                        </IconButton>
                    </Grid>
                </Grid>

            </Toolbar>
        </AppBar>
      </Grid>
    </div>
  );
}

export default Header;