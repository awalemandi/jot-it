import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';



const Copyright = () => {
    return (
        <>
            <Box mt={5}>
                <Typography variant="body2" color="textSecondary" align="center">
                    {'Copyright © '}
                    <Link color="inherit" href="https://github.com/awalemandi/">
                    Jot.it
                    </Link>{' '}
                    {new Date().getFullYear()}
                    {'.'}
                    All Rights Reserved.
                </Typography>
            </Box>
        </>
    );
  }

  export default Copyright;