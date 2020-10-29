import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

const Copyright = () => {
    return (
      <Typography variant="body2" color="textPrimary">
        {'Copyright © '}
        <Link color="inherit" href="https://github.com/awalemandi/jot-it">
          Jot it
        </Link>{' '}
        {new Date().getFullYear()}
        {'. '}
      </Typography>
    );
  }
  

const Footer = () => {

    return (
    <div>
      <CssBaseline />
        <Container maxWidth="sm">
          <Typography variant="inherit">  </Typography>
          <Copyright />
        </Container>
    </div>
    );
}

export default Footer;