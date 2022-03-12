import React from 'react'
import { Box, Button, Stack } from '@mui/material'
const RadioStations = ({ radioStations, setVideoSrc, setAudioSrc, setMuted }) => {
    return (
        <Box className='radio-stations-container'
            sx={{ position: 'fixed',  height: '100%', p: 1,top:'100px', zIndex: '100' }}>
            <Stack spacing={1} direction='column' sx={{justifyContent:'center'}}>
                {radioStations.map((station, index) => (
                    <Button variant='text' key={index} onClick={() => {
                        setVideoSrc(station.video)
                        setAudioSrc(station.audio)
                        setMuted(false)
                    }}>{station.name}</Button>
                ))}
            </Stack>

        </Box>
    )
}

export default RadioStations