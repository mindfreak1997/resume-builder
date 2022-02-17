import { Avatar, Button, Card, CardContent, CardHeader, Container, Grid, IconButton, Paper, TextField } from "@mui/material"
import { red } from "@mui/material/colors"
import { Fragment, useEffect, useState } from "react"
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router";
import { Col, Row } from "react-bootstrap";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import SaveIcon from '@mui/icons-material/Save';
import { useDispatch, useSelector } from "react-redux";
import { asyncSkill, deleteSkill, updateSkill } from "../actions/skillAction";

const initialState=[
    {skills:'',used:''}
]
const Skills=()=>{
  const navigate=useNavigate()
    const dispatch=useDispatch()
    const personalDetails=useSelector(state=>{
      return state.personal
    })
    const  details=useSelector(state=>{
      return state.skill
    })
const [skill,setSkill]=useState(initialState)
useEffect(()=>{
  setSkill(details.length > 0 ? details :initialState)
},[])

const handleChange=(e,index)=>{
    const newValue=skill.map((ele,i)=>{
          if(i===index){
              return  {...ele,[e.target.name]:e.target.value}
          }else{
              return ele
          }
    })
    setSkill(newValue)
}

const addSkill=()=>{
    setSkill([...skill,{skills:'',used:''}])
}
const removeSkill=(index,data)=>{
  if(details.length===0 ){
    const newvalues=skill.filter((ele,i)=>{
      return i!==index
  })
  setSkill(newvalues)
  }else{
    dispatch(deleteSkill(data.id))
    const newvalues=skill.filter((ele,i)=>{
      return i!==index
  })
  setSkill(newvalues)
}
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
    console.log('skills',skill)
    if(details.length === 0){
      console.log('single')
     skill.map(ele=>{
       return dispatch(asyncSkill(ele,personalDetails.id))
     })
   }else{
    skill.forEach(ele=>{
       if(findNewElement(ele)){
         dispatch(updateSkill(ele,ele.id))
       }else{
         dispatch(asyncSkill(ele,personalDetails.id))
       }
     })
     
     
   }
}
const handleBack=()=>{
    navigate('/project',{replace:true})
}
const handleNext=()=>{
  navigate('/extras',{replace:true})
}
    return(
        <Paper style={{padding:'5%'}}>
            <Card>
                <CardHeader title='Skill Details'
                /* avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="skills">
            S
          </Avatar>
                } */ />
            </Card>
            <CardContent style={{margin:'5%'}}>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2} alignItems="center">
                       {skill.map((ele,i)=>{
                           return(
                               <Fragment>
                                   <Grid item md={4} sm={4} xs={4} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name='skills'
                  label="skill name"
                  style={{width: '80%'}}
                  required
                  value={ele.skills}
                  onChange={(e)=>handleChange(e,i)}
                />
              </Grid>
              <Grid item md={4} sm={4} xs={4} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="used"
                  label="used for(in years/months)"
                  style={{width: '80%'}}
                  required
                  value={ele.used}
                  onChange={(e)=>handleChange(e,i)}
                />
              </Grid>
               {skill.length > 1 && <IconButton style={{padding:'20px'}} color='error'
             onClick={()=>removeSkill(i,ele)}
             >
                 <DeleteIcon/>
             </IconButton>}
                               </Fragment>
                           )
                       })}
                    </Grid>
                    <Container>
                    <Row style={{padding:'30px'}}>
                <Col xs={5}/>
                <Col xs={2}>
                <Button
                style={{width:'110px',height:'50px'}}
                variant="contained" 
                color="primary" 
                
                onClick={addSkill}>Add More  </Button>
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
               SAVE
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
            </CardContent>
        </Paper>
    )
}

export default Skills