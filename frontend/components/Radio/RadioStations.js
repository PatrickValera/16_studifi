import React from 'react'
import { Box, Button, Paper, Stack } from '@mui/material'
const RadioStations = ({ radioStations, setVideoSrc, setAudioSrc, setMuted,setPlaying }) => {
    return (
        <Box className='radio-stations-container'
            sx={{ position: 'fixed',  height: '100%', p: 1,pl:4,top:'100px', zIndex: '100' }}>
            <Stack spacing={1} direction='column' sx={{justifyContent:'center'}}>
                {radioStations.map((station, index) => (
                    <Paper elevation={0} sx={{bgcolor:'transparent',color:'white',fontSize:'1.2rem'}}key={index} onClick={() => {
                        setVideoSrc(station.video)
                        setAudioSrc(station.audio)
                        setPlaying(true)
                        setMuted(false)
                    }}>{station.name}</Paper>
                ))}
            </Stack>

        </Box>
    )
}

export default RadioStations