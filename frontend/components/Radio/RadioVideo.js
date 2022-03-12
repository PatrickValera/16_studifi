import { Box } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player/youtube'

const RadioVideo = ({ videoSrc, audioSrc, playing, muted, volume }) => {

    const [loaded, setLoaded] = useState(false)
    // const audio = useRef()

    // useEffect(() => {
    //     if (playing) audio.current.play()
    //     else audio.current.pause()
    // }, [playing])

    useEffect(() => {
        setLoaded(false)
    }, [videoSrc])

    useEffect(() => {
        console.log('volume: ', volume)
        // audio.current.volume = volume
    }, [volume])

    return (
        <Box className='video-container' sx={{ position: 'relative' }}
            onClick={(e) => {
                e.stopPropagation()
            }}
        >
            <ReactPlayer
                style={{ opacity: '0' }}
                loop={true}
                playing={playing}
                url={audioSrc}
                volume={volume}
                mute={muted}
            />
            {/* ============== VIDEO ============== */}
            <ReactPlayer
                className='video-iframe'
                loop={true}
                muted={true}
                playing={playing}
                url={videoSrc}
                onProgress={(x) => {
                    if (x.playedSeconds > 1 && !loaded) {
                        setLoaded(true)
                    }
                }}
            />
            {/* ============== AUDIO ============== */}
            {/* <Box sx={{ zIndex:'900',position:'fixed',bottom:'40vh',display:{xs:'flex',md:'none'},width:'100%',justifyContent:'center' }}>
                <audio controls ref={audio} autoPlay src='/testaudio.mp3' type="audio/mpeg" ></audio>
            </Box> */}

            <Box className='video-player-overlay' sx={{ position: 'absolute', display: 'flex', flexDirection: 'column', width: '100%', top: '0', bottom: '0', bgcolor: `${loaded ? 'none' : '#111'}`, transition: 'all 300ms ease-in' }}
                onClick={(e) => e.stopPropagation()}
            >
                <Box className='overlay-header' sx={{ flex: '60px 0 0', bgcolor: '#111', opacity: `${playing ? '.1' : '1'}`, top: '0', transition: `all ${playing ? '350ms ease-in' : '120ms ease-out'}` }}></Box>
                <Box className='overlay-body' sx={{ flexGrow: '1' }}></Box>
                <Box className='overlay-footer' sx={{ flex: '20vh 0 0', bgcolor: '#111', opacity: `${playing ? '0' : '1'}`, boxSizing: 'content-box', bottom: '0', pb: { xs: '10vh', sx: '5vh', md: '0' }, transition: `all ${playing ? '350ms ease-in' : '0ms ease-out'}` }}></Box>

            </Box>
        </Box>
    )
}

export default RadioVideo