import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

const Copyright = () => {
    return (
      <Typography variant="body2" color="textSecondary">
        {'Copyright © '}
        <Link color="inherit" href="https://github.com/awalemandi">
          Jot it
        </Link>{' '}
        {new Date().getFullYear()}
        {'. '}
        All Rights Reserved.
      </Typography>
    );
  }
  

const Footer = () => {

    return (
    <div>
      <CssBaseline />
        <Container maxWidth="sm">
          <Typography variant="body1">  </Typography>
          <Copyright />
        </Container>
    </div>
    );
}

export default Footer;