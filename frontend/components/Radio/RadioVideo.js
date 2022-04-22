import { Box, Button } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player/youtube'

const RadioVideo = ({ videoSrc, audioSrc, playing, muted, volume, setPlaying }) => {
  const [loaded, setLoaded] = useState(false)
  const vidPlayer = useRef()

  useEffect(() => {
    setLoaded(false)
  }, [videoSrc])

  useEffect(() => {
    // console.log('volume: ', volume)
  }, [volume])

  return (
    <Box
      className='video-container'
      sx={{ position: 'relative' }}
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
      />
      {/* ============== VIDEO ============== */}
      <ReactPlayer
        ref={vidPlayer}
        className='video-iframe'
        loop={true}
        muted={true}
        playing={playing}
        url={videoSrc}
        onProgress={(x) => {
          // console.log(x)
          if (x.playedSeconds > 1 && !loaded) {
            setLoaded(true)
          }
          if (x.playedSeconds > vidPlayer.current.getDuration() - 20) {
            vidPlayer.current.seekTo(1, 'seconds')
          }
        }}
        onPause={() => setPlaying(false)}
      />

      <Box
        className=''
        sx={{
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          top: '0',
          bottom: '0',
          bgcolor: `${loaded ? 'none' : '#111'}`,
          transition: 'all 300ms ease-in',
        }}
        onClick={(e) => e.stopPropagation()}
      >
    
      </Box>
    </Box>
  )
}

export default RadioVideo
