import React from 'react'
import Sidenav from '../Sidenav'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography';

const Home = () => {
  return (
    <Box sx={{display: 'flex'}}>
      <Sidenav/>
      <h1>Home</h1>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
       
      </Box>
    </Box>
  )
}

export default Home
