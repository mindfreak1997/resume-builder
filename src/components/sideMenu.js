import React from 'react'
import {makeStyles} from '@mui/styles'


const useStyle= makeStyles({
    SideMenu:{
        
            display: 'flex',
            flexDirection: 'column',
            position: 'absolute',
            left:'0px',
            width:'30%',
            height:' 100%',
            backgroundColor:'#253053'
        
    },
    h1:{
        fontFamily: 'Source Serif Pro',
        color:'white',
        padding:'50px'
      }
})
const SideMenu = () => {
    const classes=useStyle()
    return (
        <div className={classes.SideMenu}>
            <h1 className={classes.h1}>WELCOME!</h1>
        </div>
    )
}

export default SideMenu