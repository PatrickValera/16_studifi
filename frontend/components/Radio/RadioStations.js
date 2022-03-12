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
        position: 'fixed',
        height: '100%',
        p: 1,
        pl: 4,
        top: '100px',
        zIndex: '100',
      }}
    >
      <Button
        variant='text'
        sx={{ color: 'white', fontSize: '2rem', minWidth: '0', p: 0, mb: 2 }}
        onClick={() => setListOpen((state) => !state)}
      >
        {!listOpen ? <BsMusicNoteList /> : <AiOutlineCloseCircle />}
      </Button>
      <Stack
        spacing={1}
        direction='column'
        sx={{
          height: `${listOpen ? '50vh' : '0'}`,
          overflow: 'scroll',
          pl: 2,
          transition: 'all 300ms ease-in-out',
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
              if (playing) setPlaying(false)
              else {
                // setPlaying(false)
                setPlaying(true)
              }
            }}
          >
            <BsDashLg style={{ marginRight: '3px' }} />
            {station.name}
          </Paper>
        ))}
      </Stack>
    </Box>
  )
}

export default RadioStations
