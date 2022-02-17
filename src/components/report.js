import { Button, Divider, Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useRef } from 'react'
import { Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import html2pdf from 'html2pdf.js'
import { useReactToPrint } from "react-to-print"
import Pdf from 'react-to-pdf'

const useStyle= makeStyles({
  header:{
      paddingTop:'50px',
      paddingBottom:'20px'
  }
})
const Report = () => {
    const navigate=useNavigate()
    const personal=useSelector(state=>{
        return state.personal
    })
    const education=useSelector(state=>{
        return state.education
    })
    const skills=useSelector(state=>{
        return state.skill
    })
    const project=useSelector(state=>{
        return state.project
    })
    const certificate=useSelector(state=>{
        return state.certificate
    })
    const interest=useSelector(state=>{
        return state.interest
    })
    const classes=useStyle()
    const ref = React.createRef()
    const handleMainPage=()=>{
        navigate('/',{replace:true})
      }
      /* const toPdf = () => {
        const element = document.getElementById('html');
        const opt = {
            margin: 1,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 1 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        }
        html2pdf().from(element).set(opt).save()
    } */
  return (
    <div>
        <div className='container'>
        <Button
              style={{width:'100px',height:'50px'}}
                variant="contained"
                color="secondary"
                onClick={handleMainPage}
                
              >Main page</Button>
               <div ref={ref}>
            
           
            <div className='col-lg-4 '  >
                <div style={{paddingBottom:'20px'}}>
                <Typography  variant='h4'>Silfra Technology</Typography>
                </div>
            
            <Grid container>
            <Grid item lg={4} >
                <Typography variant='h6'>Name</Typography>
            </Grid>
            <Grid item lg={4}>:</Grid>
            <Grid item lg={4}>
                <Typography variant='body1'>{`${personal.first_name} ${personal.last_name}`}</Typography>
            </Grid>
            <br/>
            <Grid item lg={4}>
                <Typography variant='h6'>Experience</Typography>
            </Grid>
            <Grid item lg={4}>:</Grid>
            <Grid item lg={4}>
                <Typography variant='body1'>{personal.total_experience} </Typography>
            </Grid>
            <br/>
            <Divider variant="middle" />
            <br/>
            <Grid item lg={12} className={classes.header}>
                <Typography variant='h5'>SKILLS</Typography>
            </Grid>
            {
                skills.map(ele=>{
                   return (
                       <>
                       <Grid item lg={4}>
                          <Typography variant='body2'>
                              {ele.skills}
                          </Typography>
                       </Grid>
                       <Grid item lg={4}> -</Grid>
                       <Grid item lg={4}>
                           <Typography variant='body1'>{ele.used}</Typography>
                       </Grid>
                       </>
                   )
                })
            }
            <br/>
            <Grid item lg={12} className={classes.header}>
                <Typography variant='h5'>PROJECTS</Typography>
            </Grid>
            {
                project.map(ele=>{
                    return (
                        <>
                        <Grid item lg={3}>
                <Typography variant='h6'>Title</Typography>
            </Grid>
            <Grid item lg={2}>:</Grid>
            <Grid item lg={7}>
                <Typography variant='body1'>{ele.title} </Typography>
            </Grid>
            
            <Grid item lg={3}>
                <Typography variant='h6'>Technologies </Typography>
            </Grid>
            <Grid item lg={2}>:</Grid>
            <Grid item lg={7}>
                <Typography variant='body1'>{ele.technologies} </Typography>
            </Grid>
            <Grid item lg={3}>
                <Typography variant='h6'>From</Typography>
            </Grid>
            <Grid item lg={2}>:</Grid>
            <Grid item lg={7}>
                <Typography variant='body1'>{ele.from} </Typography>
            </Grid>
            <Grid item lg={3}>
                <Typography variant='h6'>To</Typography>
            </Grid>
            <Grid item lg={2}>:</Grid>
            <Grid item lg={7}>
                <Typography variant='body1'>{ele.to} </Typography>
            </Grid>
            <Grid item lg={3}>
                <Typography variant='h6'>Team size</Typography>
            </Grid>
            <Grid item lg={2}>:</Grid>
            <Grid item lg={7}>
                <Typography variant='body1'>{ele.teamSize} </Typography>
            </Grid>
            <Grid item lg={3}>
                <Typography variant='h6'>Description</Typography>
            </Grid>
            <Grid item lg={2}>:</Grid>
            <Grid item lg={7}>
                <Typography variant='body1'>{ele.description} </Typography>
            </Grid>
           {
               ele.highlights.length > 0 && (
                   <>
                    <Grid item lg={3}>
                <Typography variant='h6'>Highlights</Typography>
            </Grid>
            <Grid item lg={2}>:</Grid>
            <Grid item lg={7}>
                <Typography variant='body1'>{ele.highlights} </Typography>
            </Grid>
                   </>
               )
           }
                        </>
                    )
                })
            }
             <br/>
            <Grid item lg={12} className={classes.header}>
                <Typography variant='h5'>CERTIFICATES</Typography>
            </Grid>
            {
                certificate.map(ele=>{
                    return (
                        <>
                         <Grid item lg={3}>
                <Typography variant='h6'>Title</Typography>
            </Grid>
            <Grid item lg={2}>:</Grid>
            <Grid item lg={7}>
                <Typography variant='body1'>{ele.title} </Typography>
            </Grid>
            <Grid item lg={2}>
                <Typography variant='h6'>From</Typography>
            </Grid>
            <Grid item lg={1}>:</Grid>
            <Grid item lg={3}>
                <Typography variant='body1'>{ele.from} </Typography>
            </Grid>
            <Grid item lg={2}>
                <Typography variant='h6'>To</Typography>
            </Grid>
            <Grid item lg={1}>:</Grid>
            <Grid item lg={3}>
                <Typography variant='body1'>{ele.to} </Typography>
            </Grid>
                        </>
                    )
                })
            }
            <br/>
            <Grid item lg={12} className={classes.header}>
                <Typography variant='h5'>INTERESTS</Typography>
            </Grid>
            {
                interest.map(ele=>{
                    return (
                        <>
                        
            <Grid item lg={6}>
                <Typography variant='body1'>{ele.title} </Typography>
            </Grid>
            <Grid item lg={6}/>
                        </>
                    )
                })
            }
            </Grid>
            </div>
            </div>
            <Pdf targetRef={ref} filename="post.pdf">
        {({ toPdf }) => <Button
              style={{width:'100px',height:'50px'}}
                variant="contained"
                color="success"
                onClick={toPdf}
              >Download PDF</Button>}
      </Pdf>
            
            
            
        </div>
        
    </div>
  )
}

export default Report