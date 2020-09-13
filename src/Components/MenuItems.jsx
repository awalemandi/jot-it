import React from 'react';
import Paper from '@material-ui/core/Paper';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LibraryBooksRoundedIcon from '@material-ui/icons/LibraryBooksRounded';
import MenuBookRoundedIcon from '@material-ui/icons/MenuBookRounded';
import PlaylistAddRoundedIcon from '@material-ui/icons/PlaylistAddRounded';
import FunctionsRoundedIcon from '@material-ui/icons/FunctionsRounded';


const MenuItems = () => {

  return (
    <List
      subheader={
        <ListSubheader>
          Menu
        </ListSubheader>
      }
    >
      <Paper>
      <ListItem button>
        <ListItemIcon>
          <MenuBookRoundedIcon />
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
      </Paper>
    </List>
  );
}

export default MenuItems;