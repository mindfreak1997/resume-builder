import { Paper, Card, CardHeader, CardContent, Grid, TextField, InputAdornment, Container, Button, FormLabel } from '@mui/material'
import {Row,Col} from 'react-bootstrap'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { asyncPersonal, updatePersonal } from '../actions/personalAction';
import validator from 'validator';
import { color } from '@mui/system';


const initialState={first_name:'',last_name:'',email:'',phone:'',address:'',total_experience:'',from:'',to:'',website:'', github:'',linkedIn:''}
const PersonalDetails=()=>{
const navigate=useNavigate()
const dispatch=useDispatch()
const details=useSelector(state=>{
  return state.personal
})
const [personal,setPersonal]=useState(initialState)
const [errors,setError]=useState({})
useEffect(()=>{
setPersonal(Object.keys(details).length > 0 ? details : initialState)
},[details])
console.log('state',personal)
const dateValidation=(date_1,date_2)=>{
  const date1=new Date(date_1)
  const date2=new Date (date_2) 
  console.log('date1',date_1)
  
  function datesArray(start, end) {
      let result = [], current = new Date(start);
      while (current <= end)
          result.push(current) && (current = new Date(current)) && current.setDate(current.getDate() + 1);
      return result;
  }
  const array=datesArray(date1,date2)
  console.log('arr',array)
  return array
}

let error={}
const validate=()=>{
  console.log('personal',personal)
  if(validator.isEmail(personal.email)===false){
     error.email='invalid email'
     console.log(validator.isEmail(personal.email))
  }
  
  if((personal.phone.toString().length === 10)===false){
    error.phone='mobile number should be 10 digits'
    console.log('phone',personal.phone.length )
  }
  
  console.log('github',personal.github)
  if(personal.github.length > 0){
    if(validator.isURL(personal.github)===false){
      error.github='invalid URL'
      console.log(validator.isURL(personal.github))
    }
  }
  console.log(personal.github)
  if(personal.linkedIn.length > 0){
    if(validator.isURL(personal.linkedIn)===false){
      error.linkedIn='invalid URL'
    }
  }
  console.log(personal.linkedIn)
  
  console.log(personal.from,personal.to)
  if(dateValidation(personal.from,personal.to).length === 0){
    error.to='invalid Date';
  }else if(personal.from===personal.to){
    error.to='invalid Date';
  }

}
const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(personal)
    validate()
    console.log('errors',errors)
    if(Object.keys(error).length === 0){

      if(Object.keys(details).length > 0){
        dispatch(updatePersonal(personal,personal.id))
        console.log('update')
      }else{
        dispatch(asyncPersonal(personal))
        console.log('add')
      }
      
      navigate('/education',{replace:true})
    }else{
      setError(error)
    }

    
    
}
const handleChange=(e)=>{
   setPersonal({...personal,[e.target.name]:e.target.value})
   
}
    return (
        <Paper style={{padding:'5%'}}>
        <Card>
          <CardHeader title="Personal Details" />
        </Card>
        <CardContent>
          <div style={{margin:'5%'}}>
              <form onSubmit={handleSubmit}>
            <Grid container spacing={2} alignItems="center" >
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="first_name"
                  label="First Name"
                  value={personal.first_name}
                  onChange={ handleChange}
                  style={{width: '80%'}}
                  required
                  
                />
              </Grid>
              <Grid item md={4} sm={12} xs={12} lg={4}/>
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  label="Last_name"
                  variant="outlined"
                  style={{width: '80%'}}
                  name="last_name"
                  value={personal.last_name}
                  onChange={handleChange}
                  required
                  
                />
              </Grid>

              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  label="Email"
                  variant="outlined"
                  name="email"
                  value={personal.email}
                  onChange={handleChange}
                  required
                  style={{alignItems: 'left', width: '80%'}}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                  {...(errors.email && {error:true,helperText:errors.email})}
                />
              </Grid>

              <Grid item lg={4} xs={12} sm={12} md={4}>
                <TextField
                  margin="dense"
                  label="Phone Number"
                  variant="outlined"
                  name="phone"
                  required
                  value={personal.phone.toString()}
                  onChange={handleChange}
                  style={{alignItems: 'left', width: '80%'}}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <PhoneIcon />
                      </InputAdornment>
                    ),
                  }}
                  {...(errors.phone && {error:true,helperText:errors.phone})}
                />
              </Grid>

              <Grid item lg={4} xs={12} sm={12} md={4}>
                <TextField
                  margin="dense"
                  label="Address"
                  variant="outlined"
                  name="address"
                  required
                  value={personal.address}
                  onChange={handleChange}
                  style={{alignItems: 'left', width: '80%'}}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <HomeIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item lg={4} xs={12} sm={12} md={4}>
                <TextField
                  margin="dense"
                  label="total experience"
                  variant="outlined"
                  name="total_experience"
                  required
                  value={personal.total_experience}
                  onChange={handleChange}
                  style={{alignItems: 'left', width: '80%'}}
                  
                />
              </Grid>
              <Grid item lg={4} xs={12} sm={12} md={4}>
                <TextField
                  margin="dense"
                  label="from"
                  variant="outlined"
                  name="from"
                  type='date'
                  required
                  value={personal.from.slice(0,10)}
                  onChange={handleChange}
                  style={{alignItems: 'left', width: '80%'}}
                  
                />
              </Grid>
              
              <Grid item lg={4} xs={12} sm={12} md={4}>
                <TextField
                  margin="dense"
                  label="to"
                  variant="outlined"
                  name="to"
                  type='date'
                  required
                  value={personal.to.slice(0,10)}
                  onChange={handleChange}
                  style={{alignItems: 'left', width: '80%'}}
                  {...(errors.to && {error:true,helperText:errors.to})}
                />
              </Grid>
            
              {/* <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  label="Your Website"
                  variant="outlined"
                  name="website"
                  
                  
                  style={{alignItems: 'left', width: '80%'}}
                  
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <LanguageIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid> */}
              
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  label="GitHub"
                  variant="outlined"
                  name="github"
                  
                  value={personal.github}
                  onChange={handleChange}
                  style={{alignItems: 'left', width: '80%'}}
                  
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <GitHubIcon />
                      </InputAdornment>
                    ),
                  }}
                  {...(errors.github && {error:true,helperText:errors.github})}
                />
              </Grid>
              <Grid item md={4} sm={12} xs={12} lg={4}/>
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  label="Linked In"
                  variant="outlined"
                  name="linkedIn"
                  
                  value={personal.linkedIn}
                  onChange={handleChange}
                  style={{alignItems: 'left', width: '80%'}}
                  
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <LinkedInIcon />
                      </InputAdornment>
                    ),
                  }}
                  {...(errors.linkedIn && {error:true,helperText:errors.linkedIn})}
                />
              </Grid>
            </Grid>
            <Container >
              
              <Row style={{padding:'50px'}}>
                
                <Col  xs={2}>
                  <Button
                    variant="contained"
                    color="secondary"
                    
                    disabled
                    startIcon={<NavigateBeforeIcon />}
                  >
                    Back
                  </Button>
                </Col>
                <Col  xs={8} />
                <Col  xs={2}>
                  <Button
                    variant="contained"
                    color="secondary"
                    type='submit'
                    endIcon={<NavigateNextIcon />}
                  >
                    Next
                  </Button>
                </Col>
                
              </Row>
            </Container>
            </form>
          </div>
        </CardContent>
        <p className="text-center text-muted">Page 1 </p>
      </Paper>
    )
}
export default PersonalDetails