import React from 'react';
import { BottomNavigationAction, Typography, Container, IconButton, Button, BottomNavigation } from '@material-ui/core';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';


const Footer = () => {
    return (  
          <div>
            <BottomNavigation>
                <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
            </BottomNavigation>
          </div>
    );
}
 
export default Footer;