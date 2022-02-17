import { Button, Card, CardContent, CardHeader, Container, Divider, Grid, IconButton, InputAdornment, Paper, TextField } from "@mui/material"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Col, Row } from "react-bootstrap";
import DeleteIcon from '@mui/icons-material/Delete';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import SaveIcon from '@mui/icons-material/Save';
import { useDispatch, useSelector } from "react-redux";
import { asyncInterest, deleteInterest, updateInterest } from "../actions/interestAction";
import { asyncCertificate, deleteCertificate, updateCertificate } from "../actions/certificationAction";
const certificateState=[
  {title:'',from:'',to:''}
]
const interestState=[
  {title:''}
]
const Extras=()=>{
  const navigate=useNavigate()
    const dispatch=useDispatch()
    const personalDetails=useSelector(state=>{
      return state.personal
    })
    const  details1=useSelector(state=>{
      return state.certificate
    })
    const  details2=useSelector(state=>{
      return state.interest
    })
const [certificate,setCertificate]=useState(certificateState)
const [interests,setInterests]=useState(interestState)
useEffect(()=>{
  setCertificate(details1.length > 0 ? details1 :certificateState)
  setInterests(details2.length > 0 ? details2 :interestState)
},[])
const handleBack=()=>{
  navigate('/skills',{replace:true})
}
const findNewElement=(ele,details)=>{
  const result=  details.filter(info=>{
      return ele.id===info.id
    })
    console.log('new',result)
    return result.length > 0
}
const handleSubmit=(e)=>{
  e.preventDefault()
  console.log('certificate',certificate)
  console.log('interests',interests)
  if(details1.length === 0){
    console.log('single')
   certificate.map(ele=>{
     return dispatch(asyncCertificate(ele,personalDetails.id))
   })
 }else{
  certificate.forEach(ele=>{
     if(findNewElement(ele,details1)){
       dispatch(updateCertificate(ele,ele.id))
     }else{
       dispatch(asyncCertificate(ele,personalDetails.id))
     }
   })
 }
 if(details2.length === 0){
  console.log('single')
 interests.map(ele=>{
   return dispatch(asyncInterest(ele,personalDetails.id))
 })
}else{
interests.forEach(ele=>{
   if(findNewElement(ele,details2)){
     dispatch(updateInterest(ele,ele.id))
   }else{
     dispatch(asyncInterest(ele,personalDetails.id))
   }
 })
 
 
}
}
const handleCertificate=(e,index)=>{
const newValue=certificate.map((ele,i)=>{
      if(i===index){
          return {...ele,[e.target.name]:e.target.value}
      }else{
          return ele
      }
})
setCertificate(newValue)
}
const handleInterests=(e,index)=>{
  const newValue=interests.map((ele,i)=>{
        if(i===index){
            return {...ele,[e.target.name]:e.target.value}
        }else{
            return ele
        }
  })
  setInterests(newValue)
  }

const addCertificateFeilds=()=>{
setCertificate([...certificate,{title:'',from:'',to:''}])
}
const addInterestFeild=()=>{
  setInterests([...interests,{title:''}])
  }

  const removeCertificateFeield=(index,data)=>{
    if(details1.length===0 ){
      const newvalues=certificate.filter((ele,i)=>{
        return i!==index
    })
    setCertificate(newvalues)
    }else{
      dispatch(deleteCertificate(data.id))
      const newvalues=certificate.filter((ele,i)=>{
        return i!==index
    })
    setCertificate(newvalues)
  }
  }
const removeInterestFeield=(index,data)=>{
  if(details2.length===0 ){
    const newvalues=interests.filter((ele,i)=>{
      return i!==index
  })
  setInterests(newvalues)
  }else{
    dispatch(deleteInterest(data.id))
    const newvalues=interests.filter((ele,i)=>{
      return i!==index
  })
  setInterests(newvalues)
}
}
const handleMainPage=()=>{
  navigate('/',{replace:true})
}
    return (
        <Paper style={{padding:'5%'}}>
            <Card>
          <CardHeader title="Certificates and Interests" />
        </Card>
        <CardContent>
         <form onSubmit={handleSubmit}>
           {((certificate.length > 2)||(interests.length > 2)) && <Row style={{padding:'10px'}}>
            
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
            <Col xs={8} />
            <Col xs={2}>
              <Button
              style={{width:'100px',height:'50px'}}
                variant="contained"
                color="secondary"
               type='submit'
               
              >
                Save
              </Button>
            </Col>
            <Col xs={4} />
          </Row> }
        <Grid container spacing={2} alignItems="center">
              <Grid
                item
                xs={12}
                lg={4}
                alignItems="flex-end"
                alignContent="flex-end"
              >
                <h5>
                  <CheckCircleIcon />
                  <span className="pl-3">Certificates</span>
                </h5>
              </Grid>
              <Grid item xs={0} lg={8} />
              <br />
              {
            certificate.map((ele,i)=>{
              return (
                <>
                 <Grid item md={3} sm={12} xs={12} lg={3}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="title"
                  label="Title"
                  style={{width: '90%'}}
                  onChange={(e)=>handleCertificate(e,i)}
                  value={ele.title}
                  InputProps={{
                    endAdornment: <InputAdornment position="start" />,
                  }}
                />
              </Grid>
              <Grid item md={3} sm={12} xs={12} lg={3}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  type='date'
                  name="from"
                  label="From"
                  style={{width: '90%'}}
                  value={ele.from}
                  onChange={(e)=>handleCertificate(e,i)}
                  InputProps={{
                    endAdornment: <InputAdornment position="start" />,
                  }}
                />
              </Grid>

              <Grid item md={3} sm={12} xs={12} lg={3}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="to"
                  type='date'
                  label="To"
                  style={{width: '90%'}}
                  value={ele.to}
                  onChange={(e)=>handleCertificate(e,i)}
                  InputProps={{
                    endAdornment: <InputAdornment position="start" />,
                  }}
                />
              </Grid>
              {certificate.length > 1 ? (<Grid item md={2} sm={12} xs={12} lg={2}>
              <IconButton style={{padding:'20px'}} color='error'
             onClick={()=>removeCertificateFeield(i,ele)}
             >
                 <DeleteIcon/>
             </IconButton>
             
              </Grid>):(
                <Grid lg={2}/>
              )}
              
                </>
              )
            })
          }
             <Row style={{paddingTop:'30px',paddingBottom:'30px'}}>
                <Col xs={4}/>
                <Col xs={2}>
                <Button
                style={{width:'110px',height:'50px'}}
                variant="contained" 
                color="primary" 
                onClick={addCertificateFeilds}>Add More  </Button>
                </Col>
              </Row>
              </Grid>
              <br />
            <Divider />
            <br />
              <Grid container spacing={2} alignItems="center">
              <Grid
                item
                xs={12}
                lg={4}
                alignItems="flex-end"
                alignContent="flex-end"
              >
                <h5>
                  <CheckCircleIcon />
                  <span className="pl-3">Interests</span>
                </h5>
              </Grid>
              <Grid item xs={0} lg={8} />
              <br />
              {
            interests.map((ele,i)=>{
              return (
                <>
                 <Grid item md={10} sm={12} xs={12} lg={10}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="title"
                  label="Title"
                  style={{width: '90%'}}
                  value={ele.title}
                  onChange={(e)=>handleInterests(e,i)}
                  InputProps={{
                    endAdornment: <InputAdornment position="start" />,
                  }}
                />
              </Grid>
              {interests.length > 1 && <Grid item md={2} sm={12} xs={12} lg={2}>
              <IconButton style={{padding:'20px'}} color='error'
             onClick={()=>removeInterestFeield(i,ele)}
             >
                 <DeleteIcon/>
             </IconButton>
             
              </Grid>}
              
                </>
              )
            })
          }
             <Grid container>
              <Row style={{paddingTop:'30px',paddingBottom:'30px'}}>
                <Col xs={5}/>
                <Col xs={2}>
                <Button
                style={{width:'110px',height:'50px'}}
                variant="contained" 
                color="primary" 
               
                onClick={addInterestFeild}>Add More  </Button>
                </Col>
              </Row>
              </Grid>
              </Grid>
              <Container>
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
            <Col xs={2} />
            <Col xs={2}>
              <Button
              style={{width:'100px',height:'50px'}}
                variant="contained"
                color="primary"
               onClick={handleMainPage}
              >
                MAIN PAGE
              </Button>
            </Col>
          </Row>
              </Container>
              </form>
        </CardContent>
        </Paper>
    )
}

export default Extras