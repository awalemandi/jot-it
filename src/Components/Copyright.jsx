import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';



const Copyright = () => {
    return (
        <>
                <Typography variant="subtitle" color="textSecondary" align="center">
                    {'Copyright © '}
                    <Link color="inherit" href="https://github.com/awalemandi/">
                    Jot.it
                    </Link>{' '}
                    {new Date().getFullYear()}
                    {'.'}
                    All Rights Reserved.
                </Typography>
        </>
    );
}

export default Copyright;