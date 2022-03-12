import { Box } from '@mui/material'
import React from 'react'
import ReactPlayer from 'react-player/youtube'

const RadioVideo = ({ videoSrc, audioSrc, playing, muted, volume }) => {
    return (
        <Box className='video-container' sx={{ position: 'relative' }}
            onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
            }}
        >
            <ReactPlayer
                style={{ opacity: '0' }}
                playing={playing}
                muted={muted}
                url={audioSrc}
                volume={volume}
            />
            <ReactPlayer
                width='unset'
                height='unset'
                className='video-iframe'
                loop={true}
                playing={playing}
                muted={true}
                url={videoSrc}
            />
            <Box className='video-player-overlay' sx={{ position: 'absolute',display:'flex',flexDirection:'column',width:'100%',top:'0',bottom:'0' }}
                onClick={(e) => e.stopPropagation()}
            >
                <Box className='overlay-header' sx={{flex:'60px 0 0',bgcolor: 'black', opacity: `${playing ? '.1' : '.9'}`, top: '0'}}></Box>
                <Box className='overlay-body' sx={{flexGrow:'1'}}></Box>
                <Box className='overlay-footer' sx={{flex:'20vh 0 0',bgcolor: 'black', opacity: `${playing ? '0' : '1'}`, bottom: '0'}}></Box>

            </Box>
        </Box>
    )
}

export default RadioVideo