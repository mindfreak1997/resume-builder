import { Paper, Card, CardHeader, CardContent, Grid, TextField, InputAdornment, Container, Button, IconButton, Divider } from '@mui/material'
import { Row, Col } from 'react-bootstrap'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import SchoolIcon from '@mui/icons-material/School';
import DateRangeIcon from '@mui/icons-material/DateRange';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncEducation, bulkUpdate, deleteEducation, updateEducation } from '../actions/educationAction';

const initialState=[
  {college:'',from:'',to:'',qualification:'',specialization:'',marks:''}
]
const EducationDetails=()=>{
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const personalDetails=useSelector(state=>{
      return state.personal
    })
    const  details=useSelector(state=>{
      return state.education
    })
    const [education,setEducation]=useState(initialState)
    const [formError,setError]=useState({})
    useEffect(()=>{
      setEducation(details.length > 0 ? details :initialState)
    },[])
    console.log('state',education)
    const dateValidation=(date_1,date_2)=>{
      const date1=new Date(date_1)
      const date2=new Date (date_2) 
      
      
      function datesArray(start, end) {
          let result = [], current = new Date(start);
          while (current <= end)
              result.push(current) && (current = new Date(current)) && current.setDate(current.getDate() + 1);
          return result;
      }
      const array=datesArray(date1,date2)
    
      return array
    }
    let error={}
    const validation=()=>{
      education.forEach((ele,i)=>{
          if(dateValidation(ele.from,ele.to).length===0){
            
            error[`error${i}`]='Invalid Date'
          }
      })
      console.log('validation',error)
    }
    const findNewElement=(ele)=>{
      const result=  details.filter(info=>{
          return ele.id===info.id
        })
        console.log('new',result)
        return result.length > 0
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        
        setError({})
        validation()
        
        if(Object.keys(error).length ===0){
          if(details.length === 0){
            console.log('single')
           education.map(ele=>{
             return dispatch(asyncEducation(ele,personalDetails.id))
           })
         }else{
           education.forEach(ele=>{
             
             if(findNewElement(ele)){
               dispatch(updateEducation(ele,ele.id))
             }else{
               dispatch(asyncEducation(ele,personalDetails.id))
             }
           })
           
           
         }
        }    else{
          setError(error)
        }
        
    }
    
    const handleBack=()=>{
        navigate('/personal',{replace:true})
    }
    const handleNext=()=>{
      navigate('/project',{replace:true}) 
    }
    const handleChange=(e,index)=>{
      const newValue=education.map((ele,i)=>{
            if(i===index){
                return {...ele,[e.target.name]:e.target.value}
            }else{
                return ele
            }
      })
      console.log(newValue)
      setEducation(newValue)
  }
  
  const addFeilds=()=>{
      setEducation([...education,{college:'',from:'',to:'',qualification:'',specialization:'',marks:''}])
  }
  const removeFeield=(index,data)=>{
    
    if(details.length===0 ){
      const newvalues=education.filter((ele,i)=>{
        return i!==index
    })
    setEducation(newvalues)
    }else{
      dispatch(deleteEducation(data.id))
      const newvalues=education.filter((ele,i)=>{
        return i!==index
    })
    
    setEducation(newvalues)
    }
     
  }
    return(
<Paper style={{padding:'1%'}}>
        <Card>
          <CardHeader title="Education Details" />
        </Card>
        <CardContent>
          <div style={{margin:'5%'}} >
              <form onSubmit={handleSubmit}>
             {education.length > 2 &&  <Row style={{padding:'30px'}}>
            
            <Col xs={2}>
              <Button
              style={{width:'100px',height:'50px'}}
                variant="contained"
                color="secondary"
                onClick={handleBack}
                startIcon={<NavigateBeforeIcon />}
              >
                Back
              </Button>
            </Col>
            <Col xs={3} />
            <Col xs={2}>
              <Button
              style={{width:'100px',height:'50px'}}
                variant="contained"
                color="primary"
               type='submit'
                endIcon={<SaveIcon />}
              >
                Save
              </Button>
            </Col>
            <Col xs={3} />
            <Col xs={2}>
              <Button
              style={{width:'100px',height:'50px'}}
                variant="contained"
                color="secondary"
                onClick={handleNext}
                endIcon={<NavigateNextIcon />}
              >
                Next
              </Button>
            </Col>
            
          </Row>}
              {
                education.map((ele,i)=>{
                  return(
                    <>
                    <Grid container spacing={2} alignItems="center" >
                    <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="college"
                  label="College/Unviersity"
                  style={{width: '80%'}}
                  required
                  value={ele.college}
                 onChange={(e)=>handleChange(e,i)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <SchoolIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={4} sm={6} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="from"
                  label="From Year"
                  type="date"
                  style={{width: '80%'}}
                  required
                  value={ele.from}
                  onChange={(e)=>handleChange(e,i)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <DateRangeIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item md={4} sm={6} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="to"
                  type="date"
                  label="To"
                  value={ele.to}
                  style={{width: '80%'}}
                  required
                  onChange={(e)=>handleChange(e,i)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <DateRangeIcon />
                      </InputAdornment>
                    ),
                  }}
                  {...(formError[`error${i}`] && {error:true,helperText:formError[`error${i}`]})}
                />
              </Grid>

              <Grid item md={3} sm={12} xs={12} lg={3}>
                <TextField
                  margin="dense"
                  label="Qualification"
                  variant="outlined"
                  style={{width: '80%'}}
                  name="qualification"
                  required
                  value={ele.qualification}
                  onChange={(e)=>handleChange(e,i)}
                />
              </Grid>
              <Grid item md={3} sm={12} xs={12} lg={3}>
                <TextField
                  margin="dense"
                  label="specialization"
                  variant="outlined"
                  style={{width: '80%'}}
                  name="specialization"
                  required
                  value={ele.specialization}
                  onChange={(e)=>handleChange(e,i)}
                />
              </Grid>

              <Grid item md={3} sm={12} xs={12} lg={3}>
                <TextField
                  margin="dense"
                  label="marks"
                  variant="outlined"
                  style={{width: '90%'}}
                  name="marks"
                  
                  value={ele.marks}
                  onChange={(e)=>handleChange(e,i)}
                />
              </Grid>
              {education.length > 1 && <Grid item md={2} sm={12} xs={12} lg={2}>
              <IconButton style={{padding:'20px'}} color='error'
             onClick={()=>removeFeield(i,ele)}
             >
                <DeleteIcon/> 
             </IconButton>
              </Grid>}
              </Grid>
             <br/>
            <Divider />
            <br/>
                    </>
                  )
                })
              }
            
            <Container >
              <Row style={{paddingBottom:'30px'}}>
                <Col xs={5}/>
                <Col xs={2}>
                <Button
                style={{width:'120px',height:'50px'}}
                variant="contained" 
                color="primary" 
                
                onClick={addFeilds}>Add More </Button>
                </Col>
              </Row>
          <Row style={{padding:'10px'}}>
            
            <Col xs={2}>
              <Button
              style={{width:'100px',height:'50px'}}
                variant="contained"
                color="secondary"
                onClick={handleBack}
                startIcon={<NavigateBeforeIcon />}
              >
                Back
              </Button>
            </Col>
            <Col xs={3} />
            <Col xs={2}>
              <Button
              style={{width:'100px',height:'50px'}}
                variant="contained"
                color="primary"
               type='submit'
                endIcon={<SaveIcon />}
              >
                Save
              </Button>
            </Col>
            <Col xs={3} />
            <Col xs={2}>
              <Button
              style={{width:'100px',height:'50px'}}
                variant="contained"
                color="secondary"
                onClick={handleNext}
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
       
        <p className="text-center text-muted">Page 2</p>
      </Paper>
    )
}

export default EducationDetails