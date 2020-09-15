import React from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import LibraryBooksRoundedIcon from '@material-ui/icons/LibraryBooksRounded';
import MenuBookRoundedIcon from '@material-ui/icons/MenuBookRounded';
import PlaylistAddRoundedIcon from '@material-ui/icons/PlaylistAddRounded';
import FunctionsRoundedIcon from '@material-ui/icons/FunctionsRounded';
import { Hidden } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const MenuItems = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
          {/*Grid container for small container (icons only)  */}
      <Hidden smUp>
        <Grid container item>
            <List>
                <Grid item>
                  <ListItem button>
                    <ListItemIcon>
                      <MenuBookRoundedIcon />
                    </ListItemIcon>
                  </ListItem>
                </Grid>
               
                <Grid item>
                  <ListItem button>
                    <ListItemIcon>
                      <LibraryBooksRoundedIcon />
                    </ListItemIcon>
                  </ListItem>
                </Grid>

                <Grid item>
                  <ListItem button>
                    <ListItemIcon>
                      <PlaylistAddRoundedIcon />
                    </ListItemIcon>
                  </ListItem>
                </Grid>

                <Grid item>
                  <ListItem button>
                    <ListItemIcon>
                      <FunctionsRoundedIcon />
                    </ListItemIcon>
                  </ListItem>
                </Grid>
            </List>
        </Grid>
      </Hidden>

          {/* Second grid container for non small screen (icons + menulabels) */}
      <Hidden xsDown>
        <Grid container item>
          <List>
              <Grid item>
                <ListItem button>
                  <ListItemIcon>
                    <MenuBookRoundedIcon/>
                  </ListItemIcon>
                    <ListItemText primary="Current Read" />
                </ListItem>
              </Grid>

              <Grid item>
                <ListItem button>
                  <ListItemIcon>
                    <LibraryBooksRoundedIcon />
                  </ListItemIcon>
                    <ListItemText primary="Library" />
                </ListItem>
              </Grid>

              <Grid item>
                <ListItem button>
                  <ListItemIcon>
                    <PlaylistAddRoundedIcon />
                  </ListItemIcon>
                    <ListItemText primary="TBR" />
                </ListItem>
              </Grid>

              <Grid item>
                <ListItem button>
                  <ListItemIcon>
                    <FunctionsRoundedIcon />
                  </ListItemIcon>
                    <ListItemText primary="Statistics" />
                </ListItem>
              </Grid>


          </List>
        </Grid>
      </Hidden>
      
    </div>
  );
}

export default MenuItems;