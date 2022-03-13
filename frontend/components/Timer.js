import { Box, Button } from '@mui/material'
import React from 'react'
import {BiStopwatch} from 'react-icons/bi'
const Timer = () => {
  return (
    <Box
      className='radio-stations-container'
      sx={{
        position: 'fixed',
        display:'flex',
        // bgcolor:'green',
        p:2,
        top:'0',
        right:'0'
      }}
    >
        <Button sx={{color:'white',fontSize:'2rem',p:'0'}}>
          <BiStopwatch/>
        </Button>
        </Box>
  )
}

export default Timer