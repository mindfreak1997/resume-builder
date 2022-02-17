import React, { useEffect, useState } from 'react'
import {Button, Grid, InputBase, Paper, Typography} from '@mui/material'
import Select from 'react-select'
import { makeStyles } from '@mui/styles'
import { Col, Row } from 'react-bootstrap'
import axios from 'axios'
import SideMenu from './sideMenu'
import { useDispatch } from 'react-redux'
import { getPersonal, resetPersonal } from '../actions/personalAction'
import { useNavigate } from 'react-router'
import { getInterest, resetInterest } from '../actions/interestAction'
import { getEducation, resetEducation } from '../actions/educationAction'
import { getCertification, resetCertificate } from '../actions/certificationAction'
import { getProject, resetProject } from '../actions/projectActions'
import { getSkill, resetSkill } from '../actions/skillAction'
import SearchIcon from '@mui/icons-material/Search';

const useStyle= makeStyles({
  SideMenu:{
      
          display: 'flex',
          flexDirection:'column',
          position: 'absolute',
          left:'0px',
          width:'40%',
          height:' 100%',
          backgroundColor:'#253053'
      
  },
  appMain:{
    paddingLeft:'30%',
    height:'100%'
  }
})
const HomePage = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [select,setSelect]=useState()
  const [employees,setEmployees]=useState([])
  const classes=useStyle()
  //to get all employee name in select
 useEffect(()=>[
   axios.get('http://localhost:3055/api/resume/allPersonal')
   .then((res)=>{
     setEmployees(res.data)
   })
 ],[])

 //data for select input
  let selectEmployee=[]
employees.forEach(ele=>{
    selectEmployee.push({label:ele.first_name+" "+ele.last_name,value:ele.id})
})


  const handleChange=(opt)=>{
    setSelect(opt.value)
    }
    //to add employee data in store
    const getState=()=>{
      dispatch(getPersonal(select))
      dispatch(getEducation(select))
      dispatch(getProject(select))
     dispatch(getInterest(select))
      dispatch(getCertification(select))
      dispatch(getSkill(select)) 
    }
    //to view or edit employee
  const handleEdit=()=>{
    stateReset()
    if(select){
      getState()
      navigate('/personal',{replace:true})
    }else{
      alert('select employee')
    }
 
  }

  //to reset store
  const stateReset=()=>{
    dispatch(resetPersonal())
    dispatch(resetEducation())
    dispatch(resetProject())
    dispatch(resetSkill())
    dispatch(resetCertificate())
    dispatch(resetInterest())
  }
  //to go the report page
  const handleReport=()=>{
      stateReset()
      getState()
      navigate('/report',{replace:true})
  }
  //to create a new resume
  const handleNew=()=>{
    stateReset()
    navigate('/personal',{replace:true})
    }
    //to move to search page 
    const handleSearch=()=>{
      navigate('/search',{replace:true})
    }
  return (
    <div >
        <SideMenu/>
        <div  className={classes.appMain}>
          <Grid container style={{padding:'40px'}} >
          <Grid item md={8} sm={12} xs={12} lg={8}/>
          <Grid item md={2} sm={12} xs={12} lg={2}>

          {/* <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
<InputBase
className={classes.SearchInput}
placeholder='search'
startAdornment={<SearchIcon fontSize='small'/>}
/>
      </Paper> */}
          <Button
              style={{width:'110px',height:'50px'}}
              variant="contained" 
              color="primary"
              onClick={handleSearch}> Advance Search</Button>
          
          </Grid>
            <Grid item md={4} sm={12} xs={12} lg={4}/>
            <Grid item md={4} sm={12} xs={12} lg={4}>
              <Button
              style={{width:'110px',height:'50px'}}
              variant="contained" 
              color="primary"
              onClick={handleNew}>Create New</Button>
            </Grid>
            <Grid item md={4} sm={12} xs={12} lg={4}/>
            <Grid item md={4} sm={12} xs={12} lg={4}/>
            <Grid item md={4} sm={12} xs={12} lg={4}>
              <Typography mt={3} mb={3} variant='h6' > OR</Typography>
            </Grid>
            <Grid item md={4} sm={12} xs={12} lg={4}/>
          <Grid item md={4} sm={12} xs={12} lg={4}>
       <Select
                
                isSearchable={true}
                placeholder='Select Employee'
                options={selectEmployee}
                onChange={handleChange} />
       </Grid>
       <Grid item md={4} sm={12} xs={12} lg={4}>
         <Button
         style={{width:'110px',height:'50px'}}
         variant="contained" 
         color="primary"
         onClick={handleEdit}>View/Edit

         </Button>
       </Grid>
       <Grid item md={4} sm={12} xs={12} lg={4}>
         <Button
         style={{width:'110px',height:'50px'}}
         variant="contained" 
         color="primary"
         onClick={handleReport}>Report

         </Button>
       </Grid>
          </Grid>
        
        </div>
       
       
       

    </div>
  )
}

export default HomePage