import React, { useState } from 'react'
import { Box, Button, Paper, Stack } from '@mui/material'
import { BsDashLg, BsMusicNoteList } from 'react-icons/bs'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import {IoClose} from 'react-icons/io5'
import { flexbox } from '@mui/system'
const RadioStations = ({
  radioStations,
  setVideoSrc,
  setAudioSrc,
  setMuted,
  setPlaying,
  setVolume,
  playing,
}) => {
  const [listOpen, setListOpen] = useState(true)
  const [drawerExtended,setDrawerExtended] = useState(true)
  const [activeRadio,setActiveRadio] = useState('none')

  return (
    <Box
      className='radio-stations-container'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        position: 'fixed',
        zIndex: '100',
        bgcolor: `${listOpen&&'rgba(100,100,100,.1)'}`,
        backdropFilter: `${listOpen && 'blur(10px)'}`,
        transition: 'all 200ms ease-in-out',
        p:2
      }}
    >
      {/* BUTTON CONTAINER HERE */}
      <Box
        sx={{
          flex: 'min-content 0 0',
        }}
      >
        <Button
          variant='text'
          sx={{
            color: 'white',
            fontSize: '2rem',
            mb: 2,
            minWidth:'50px',
            minHeight:'50px',
            bgcolor:'rgba(0,0,0,.6)',
            backdropFilter: `blur(3px)`,
            border:`${listOpen?'none':'1px solid rgba(255,255,255,.9)'}`
          }}
          onClick={() => setListOpen((state) => !state)}
        >
          {!listOpen ? <BsMusicNoteList /> : <IoClose />}
        </Button>
      </Box>
      {/* STATIONS CONTAINER HERE */}
      <Box
        sx={{
          // bgcolor: 'rgba(100,100,100,.1)',
          // backdropFilter: 'blur(3px) !important',
          opacity: `${listOpen ? '1' : '0'}`,
          pointerEvents:`${!listOpen&&'none'}`,
          transition: 'all 300ms ease-in-out',
          overflow: 'clip',
        }}
      >
        <Stack spacing={1} direction='column'>
          {radioStations.map((station, index) => (
            <Paper
              elevation={0}
              sx={[
                {
                  px:2,
                  py:1,
                  bgcolor: 'transparent',
                  color: `${activeRadio===index?'yellow':'white'}`,
                  fontSize: '1.2rem',
                  cursor: 'pointer',
                  textShadow: '1px 1px #111',
                  textAlign: '',
                },
                {
                  '&:hover': {
                    color: 'yellow',
                  },
                },
              ]}
              key={index}
              onClick={() => {
                setActiveRadio(index)
                setVideoSrc(station.video)
                setAudioSrc(station.audio)
                setMuted(false)
                setPlaying(true)
              }}
            >
              {drawerExtended?station.name:index+1}
            </Paper>
          ))}
        </Stack>
      </Box>
    </Box>
  )
}

export default RadioStations
