import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import ReactPlayer from 'react-player/youtube'

const RadioVideo = ({ videoSrc, audioSrc, playing, muted, volume }) => {
    useEffect(() => {
    console.log('volume: ',volume)
    }, [volume])
    
    return (
        <Box className='video-container' sx={{ position: 'relative'}}
            onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
            }}
        >
            <ReactPlayer
                style={{ opacity: '0' }}
                loop={true}
                playing={playing}
                url={audioSrc}
                volume={volume}
            />
            <ReactPlayer
                className='video-iframe'
                loop={true}
                muted={true}
                playing={playing}
                url={videoSrc}
            />
            <Box className='video-player-overlay' sx={{ position: 'absolute',display:'flex',flexDirection:'column',width:'100%',top:'0',bottom:'0' }}
                onClick={(e) => e.stopPropagation()}
            >
                <Box className='overlay-header' sx={{flex:'60px 0 0',bgcolor: 'black', opacity: `${playing ? '.1' : '.9'}`, top: '0', transition:`all ${playing?'350ms ease-in':'120ms ease-out'}`}}></Box>
                <Box className='overlay-body' sx={{flexGrow:'1'}}></Box>
                <Box className='overlay-footer' sx={{flex:'20vh 0 0',bgcolor: 'black', opacity: `${playing ? '0' : '1'}`,boxSizing:'content-box', bottom: '0',pb:{xs:'10vh',sx:'5vh',md:'0'}, transition:`all ${playing?'350ms ease-in':'120ms ease-out'}`}}></Box>

            </Box>
        </Box>
    )
}

export default RadioVideo