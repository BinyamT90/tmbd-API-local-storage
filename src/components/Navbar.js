import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,

    },
}));

export default function Navbar() {
    const classes = useStyles();

    return (
        <Box className={classes.root} mb={4}>
            <AppBar position="static" color='default'>
                <Toolbar>

                    <Typography className={classes.title} variant="h6" noWrap>
                        {/*Color Elephant Logo*/}
                        <img width="20%" height="100%"
                             src="https://colorelephant.com/wp-content/uploads/2021/02/color_logo_2020@2x.png"
                             className="attachment-full size-full" alt="Color Elephant Challenge" loading="lazy"
                        />
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
