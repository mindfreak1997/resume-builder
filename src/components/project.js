import { Avatar, Button, Card, CardContent, CardHeader, Container, Divider, Grid, IconButton, InputAdornment, Paper, TextField } from '@mui/material'
import { Col, Row } from 'react-bootstrap'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import TitleIcon from '@mui/icons-material/Title';
import LinkIcon from '@mui/icons-material/Link';
import DescriptionIcon from '@mui/icons-material/Description';
import HighlightIcon from '@mui/icons-material/Highlight';
import SaveIcon from '@mui/icons-material/Save';
import BuildIcon from '@mui/icons-material/Build';
import GroupsIcon from '@mui/icons-material/Groups';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import validator from 'validator';
import { red } from '@mui/material/colors';
import { useDispatch, useSelector } from 'react-redux';
import { asyncProject, deleteProject, updateProject } from '../actions/projectActions';

const initialState=[
  {title:'',role:'',organization:'',technologies:'',description:'',highlights:'',from:'',to:'',teamSize:'',link:''}
]
const ProjectDetails=()=>{
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const personalDetails=useSelector(state=>{
    return state.personal
  })
  const  details=useSelector(state=>{
    return state.project
  })
  const [project,setProject]=useState(initialState)
  const [formError,setError]=useState({})
  useEffect(()=>{
    setProject(details.length > 0 ? details :initialState)
  },[])
  
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
  const validation=()=>{
    project.forEach((ele,i)=>{
        if(dateValidation(ele.from,ele.to).length===0){
          
          error[`date${i}`]='Invalid Date'
        }
        if(ele.link.length > 0){
          if(validator.isURL(ele.link)===false){
            error[`link${i}`]='invalid URL'
            
          }
        }
    })
    console.log('validation',error)
  }
    const handleBack=()=>{
        navigate('/education',{replace:true})
    }
    const handleNext=()=>{
      navigate('/skills',{replace:true})
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
         project.map(ele=>{
           return dispatch(asyncProject(ele,personalDetails.id))
         })
       }else{
         project.forEach(ele=>{
           if(findNewElement(ele)){
             dispatch(updateProject(ele,ele.id))
           }else{
             dispatch(asyncProject(ele,personalDetails.id))
           }
         })
       }
       }else{
         setError(error)
       }
      
       
      
    }
    const handleChange=(e,index)=>{
      console.log(e.target.value)
      const newValue=project.map((ele,i)=>{
            if(i===index){
                return {...ele,[e.target.name]:e.target.value}
            }else{
                return ele
            }
      })
      setProject(newValue)
  }
  
  const addFeilds=()=>{
      setProject([...project,{title:'',role:'',organization:'',technologies:'',description:'',highlights:'',from:'',to:'',teamSize:'',link:''}])
  }
  const removeFeield=(index,data)=>{
    if(details.length===0 ){
      const newvalues=project.filter((ele,i)=>{
        return i!==index
    })
    setProject(newvalues)
    }else{
      dispatch(deleteProject(data.id))
      const newvalues=project.filter((ele,i)=>{
        return i!==index
    })
    
    setProject(newvalues)
    }
  }
    return (
        <Paper style={{padding:'1%'}}>
        <Card>
          <CardHeader title="Projects Details" />
        </Card>
        <CardContent>
          <div style={{margin:'5%'}}>
            <form onSubmit={handleSubmit}>
              {project.length > 2 && <Row style={{padding:'30px'}}>
            
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
               project.map((ele,i)=>{
                 return (
                   <>
                   <Grid container spacing={2} alignItems="center" >
              
              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="title"
                  label="Title"
                  style={{width: '80%'}}
                  required
                  onChange={(e)=>handleChange(e,i)}
                  value={ele.title}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <TitleIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="role"
                  label="Role/Position"
                  style={{width: '80%'}}
                  required
                  onChange={(e)=>handleChange(e,i)}
                  value={ele.role}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <TitleIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="organization"
                  label="Organization"
                  style={{width: '80%'}}
                  onChange={(e)=>handleChange(e,i)}
                  value={ele.organization}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <TitleIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="technologies"
                  label="Technologies Used"
                  style={{width: '80%'}}
                  required
                  onChange={(e)=>handleChange(e,i)}
                  value={ele.technologies}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <BuildIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
             
              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="from"
                  label="from"
                  type='date'
                  style={{width: '80%'}}
                  required
                  onChange={(e)=>handleChange(e,i)}
                  value={ele.from}
                  
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="to"
                  label="to"
                  type='date'
                  style={{width: '80%'}}
                  required
                  onChange={(e)=>handleChange(e,i)}
                  value={ele.to}
                  {...(formError[`date${i}`] && {error:true,helperText:formError[`date${i}`]})}
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="teamSize"
                  label="Team size"
                  style={{width: '80%'}}
                  required
                  onChange={(e)=>handleChange(e,i)}
                  value={ele.teamSize}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <GroupsIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="link"
                  label="Link"
                  style={{width: '80%'}}
                  
                  value={ele.link}
                  onChange={(e)=>handleChange(e,i)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <LinkIcon />
                      </InputAdornment>
                    ),
                  }}
                  {...(formError[`link${i}`] && {error:true,helperText:formError[`link${i}`]})}
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="description"
                  label="Description"
                  style={{width: '80%'}}
                  required
                  onChange={(e)=>handleChange(e,i)}
                  value={ele.description}
                  multiline
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <DescriptionIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="highlights"
                  label="Highlights"
                  style={{width: '80%'}}
                  
                  onChange={(e)=>handleChange(e,i)}
                  value={ele.highlights}
                  multiline
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <HighlightIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              {
                project.length > 1 &&<Grid item md={2} sm={12} xs={12} lg={2}>
                <IconButton sx={{ color: red[500] }} style={{padding:'20px',}}
               onClick={()=>removeFeield(i,ele)}
               >
                   <DeleteIcon/>
               </IconButton>
                </Grid>
              }
              
            </Grid>
            <br />
            <Divider />
            <br />
                   </>
                 )
               })
            }
            
            
            <Container style={{padding:'10px'}}>
            <Row style={{padding:'10px'}}>
                <Col xs={5}/>
                <Col xs={2}>
                <Button
                style={{width:'110px',height:'50px'}}
                variant="contained" 
                color="primary" 
                //endIcon={<AddBoxIcon>send</AddBoxIcon>}
                onClick={addFeilds}>Add more  </Button>
                </Col>
              </Row>
          <Row>
           
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
       
        <p className="text-center text-muted">Page 3</p>
      </Paper>
    )
}

export default ProjectDetails