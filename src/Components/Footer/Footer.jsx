import React from 'react';
import { BottomNavigationAction, Typography, Container, IconButton, Button, BottomNavigation } from '@material-ui/core';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';


const Footer = () => {
    return (  
          <div>
            <BottomNavigation>
                <Typography variant="body1">Footer</Typography>
                <Typography variant="body1">Footer</Typography>
                <Typography variant="body1">Footer</Typography>
            </BottomNavigation>
          </div>
    );
}
 
export default Footer;