import React, { useState } from 'react'
import { Box, Button, Paper, Stack } from '@mui/material'
import { BsDashLg, BsMusicNoteList } from 'react-icons/bs'
import { AiOutlineCloseCircle } from 'react-icons/ai'
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

  return (
    <Box
      className='radio-stations-container'
      sx={{
        p:2,
        position: 'fixed',
        zIndex: '100',
      }}
    >
      <Button
        variant='text'
        sx={{ 
          color: 'white', 
          fontSize: '2rem', 
          minWidth: '0', 
          p: 0, 
          mb: 2 
        }}
        onClick={() => setListOpen((state) => !state)}
      >
        {!listOpen ? <BsMusicNoteList /> : <AiOutlineCloseCircle />}
      </Button>
      <Stack
        spacing={1}
        direction='column'
        sx={{
          opacity: `${listOpen ? '1' : '0'}`,
          pl: 2,
          transition: 'all 300ms ease-in-out',
          overflow:'clip',
        }}
      >
        {radioStations.map((station, index) => (
          <Paper
            elevation={0}
            sx={[
              {
                bgcolor: 'transparent',
                color: 'white',
                fontSize: '1.2rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                textShadow: '2px 2px #111',
              },
              {
                '&:hover': {
                  color: 'red',
                },
              },
            ]}
            key={index}
            onClick={() => {
              setVideoSrc(station.video)
              setAudioSrc(station.audio)
              setMuted(false)
              setPlaying(true)
            }}
          >
            {station.name}
          </Paper>
        ))}
      </Stack>
    </Box>
  )
}

export default RadioStations
