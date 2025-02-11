import React from 'react'
import Sidenav from '../Sidenav'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography';

const About = () => {
  return (
    <Box sx={{display: 'flex'}}>
      <Sidenav/>
      <h1>About</h1>
    </Box>
  )
}

export default About
