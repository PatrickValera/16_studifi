import React, { useEffect, useRef, useState } from 'react'
import { Box, Button, Slider } from '@mui/material'
import {
  AiOutlinePlayCircle,
  AiOutlinePauseCircle,
  AiOutlineSound,
} from 'react-icons/ai'
import { IoVolumeMuteOutline } from 'react-icons/io5'
import { BiFullscreen } from 'react-icons/bi'

const RadioVideoController = ({
  playing,
  setMuted,
  setPlaying,
  volume,
  setVolume,
}) => {
  const lastVol = useRef(1)
  const [fullScreen, setFullScreen] = useState(false)
  const handleClick = (e) => {
    setMuted((state) => !state)
    if (playing) {
      setPlaying(false)
    } else {
      setPlaying(true)
    }
  }
  const handleFullScreen = () => {
    var elem = document.documentElement
    if (elem.requestFullscreen) {
      elem.requestFullscreen()
    } else if (elem.webkitRequestFullscreen) {
      /* Safari */
      elem.webkitRequestFullscreen()
    } else if (elem.msRequestFullscreen) {
      /* IE11 */
      elem.msRequestFullscreen()
    }
  }
  const CloseFullScreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if (document.webkitExitFullscreen) {
      /* Safari */
      document.webkitExitFullscreen()
    } else if (document.msExitFullscreen) {
      /* IE11 */
      document.msExitFullscreen()
    }
  }
  // useEffect(() => {
  //     if (fullScreen) CloseFullScreen()
  //     else handleFullScreen()
  // }, [fullScreen])
  return (
    <Box
      className='video-controller'
      sx={[{
        zIndex: '100',
        boxSizing: 'content-box',
        pb: { xs: '10vh', sx: '5vh', md: '0' },
        position: 'absolute',
        width: '100%',
        bottom: '0',
        display: 'flex',
        flexDirection: 'column',
        height: '20vh',
        justifyContent: 'center',
        alignItems: 'center',

        // bgcolor:'red'
      }]}
    >
      {/* PLAYER CONTROLS */}
      <Box
        sx={[{
          maxWidth: '350px',
          backdropFilter: 'blur(0px)',
        //   border: '1px solid white',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        {
            '&:hover':{
                backdropFilter:{xs:'unset',md:'blur(3px)'}
            }
        }]}
      >
        {/* PLAY BUTTON */}
        <Button
          sx={{
            p: 1,
            height: '50px',
            fontSize: '4rem',
            color: 'white',
            minWidth: '0',
            px: '5px',
          }}
          variant='text'
          onClick={handleClick}
          disableRipple
        >
          {playing ? <AiOutlinePauseCircle /> : <AiOutlinePlayCircle />}
        </Button>
        {/* MUTE BUTTON */}
        <Button
          sx={{
            p: 1,
            height: '50px',
            display: { xs: 'none', md: 'flex' },
            fontSize: '3rem',
            color: 'white',
            minWidth: 0,
          }}
          variant='text'
          disableRipple
          onClick={() => {
            if (volume === 0) setVolume(lastVol.current)
            else {
              setVolume(0)
            }
          }}
        >
          {volume > 0 ? <AiOutlineSound /> : <IoVolumeMuteOutline />}
        </Button>
        <Slider
          aria-label='Volume'
          sx={{
            display: { xs: 'none', md: 'block' },
            flex: 'auto 1 1',
            mx: 2,
            color: 'white',
          }}
          value={volume}
          max={1}
          min={0}
          step={0.01}
          onChange={(e, val) => {
            setVolume(val)
            lastVol.current = val
            console.log(lastVol.current)
          }}
        />
      </Box>
      {/* VIDEO CONTROLS */}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'right',
        }}
      >
        <Button
          sx={{
            display: { xs: 'none', md: 'block' },
            color: 'white',
            fontSize: '1.5rem',
          }}
          onClick={() => {
            if (fullScreen) CloseFullScreen()
            else handleFullScreen()
            setFullScreen((x) => !x)
          }}
        >
          <BiFullscreen />
        </Button>
      </Box>
    </Box>
  )
}

export default RadioVideoController
