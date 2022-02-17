import { Card, CardContent, CardHeader, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'

const Search = () => {
    const [skill,setSkill]=useState()

    const handleChange=()=>{

    }
  return (
    <div>
        <Grid container spacing={2} alignItems="center" sx={{ p: '20px 20px', display: 'flex', alignItems: 'center' }}>
            <Grid item md={4} lg={4}>
                <Card  >
                    <CardHeader title='Skill' sx={{bgcolor:'green',color:'white'}}/>
                    <CardContent>
                    <TextField
                  margin="dense"
                  variant="outlined"
                  name="skill"
                  label='search for skills'
                  value={skill}
                  onChange={ handleChange}
                  style={{width: '80%'}}
                  required
                  
                />
                    </CardContent>
                </Card>
            </Grid>
            <Grid item md={4} lg={4}>
                <Card>
                    <CardHeader title='education'  sx={{bgcolor:'blue',color:'white'}}/>
                    <CardContent>
                    <TextField
                  margin="dense"
                  variant="outlined"
                  name="skill"
                  label='search for education'
                  value={skill}
                  onChange={ handleChange}
                  style={{width: '80%'}}
                  required
                  
                />
                    </CardContent>
                </Card>
            </Grid>
            <Grid item md={4} lg={4}>
                <Card>
                    <CardHeader title='experience'  sx={{bgcolor:'red',color:'white'}}/>
                    <CardContent>
                    <TextField
                  margin="dense"
                  variant="outlined"
                  name="skill"
                  label='search for experience'
                  value={skill}
                  onChange={ handleChange}
                  style={{width: '80%'}}
                  required
                  
                />
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </div>
  )
}

export default Search