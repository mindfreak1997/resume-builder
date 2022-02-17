import React from "react";
import {makeStyles} from '@mui/styles'
import {AppBar, Toolbar, Typography} from '@mui/material'
import { Outlet } from "react-router";

const useStyles = makeStyles((theme) => ({

    title: {
      flexGrow: 1,
    },
  }))

const Header=()=>{
    const classes = useStyles();
    return (
        <div>
            <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>Resume Builder</Typography>
            </Toolbar>
        </AppBar>
        <Outlet/>
        </div>
    )
}

export default Header