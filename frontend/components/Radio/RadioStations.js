import React from 'react'
import { Box, Button, Paper, Stack } from '@mui/material'
import { BsDashLg } from 'react-icons/bs'
const RadioStations = ({ radioStations, setVideoSrc, setAudioSrc, setMuted, setPlaying, setVolume }) => {
    return (
        <Box className='radio-stations-container'
            sx={{ position: 'fixed', height: '100%', p: 1, pl: 4, top: '100px', zIndex: '100' }}>
            <Stack spacing={1} direction='column'>
                {radioStations.map((station, index) => (
                    <Paper elevation={0} sx={[
                        {
                            bgcolor: 'transparent',
                            color: 'white',
                            fontSize: '1.2rem',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center'
                        },
                        {
                            '&:hover': {
                                color: 'red'
                            }
                        }]}
                        key={index} onClick={() => {
                            setVideoSrc(station.video)
                            setAudioSrc(station.audio)
                            setPlaying(true)
                            setMuted(false)
                            setTimeout(()=>setVolume(1),100)
                        }}><BsDashLg style={{ marginRight: '3px' }} />{station.name}</Paper>
                ))}
            </Stack>

        </Box>
    )
}

export default RadioStations