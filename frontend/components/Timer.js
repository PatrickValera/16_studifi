import { Box, Button, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { BiStopwatch } from 'react-icons/bi'
import { IoClose } from 'react-icons/io5'

const Timer = () => {
  const [timerFormOpen, setTimerFromOpen] = useState(false)
  const [time, setTime] = useState()
  const [timerPlay, setTimerPlay] = useState(false)
  const [timer, setTimer] = useState(null)
  const [ring, setRing] = useState()

  function getMinutes() {
    if (!time) return '00'
    let minute = Math.floor(time / 60)
    if (minute < 10) return 0 + String(minute)
    else return String(minute)
  }

  function getSeconds() {
    if (!time) return '00'
    let seconds = time % 60
    if (seconds < 10) return 0 + String(seconds)
    else return String(seconds)
  }

  useEffect(() => {
    if (timerPlay && time) {
      setTimer(
        setInterval(() => {
          setTime((state) => state - 1)
        }, 1000)
      )
      if (ring) {
        ring.pause()
        ring.currentTime = 0
      }
    } else clearInterval(timer)
    return () => clearInterval(timer)
  }, [timerPlay])

  useEffect(() => {
    if (time <= 0) {
      setTimerPlay(false)
      if (ring) {
        ring.loop = true
        ring.play()
      }
      clearInterval(timer)
    }
  }, [time])

  useEffect(() => {
    setRing(new Audio('./ring.mp3'))
  }, [])
  return (
    <Box
      className='radio-stations-container'
      sx={{
        position: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        // bgcolor:'green',
        zIndex: '100',
        p: 2,
        top: '0',
        right: '0',
      }}
    >
      {/* TIMER BUTTON HERE */}
      <Box
        sx={{
          flex: 'min-content 0 0',
        }}
      >
        <Button
          variant='text'
          sx={{
            color: 'white',
            fontSize: '2rem',
            mb: 2,
            minWidth: '50px',
            minHeight: '50px',
            bgcolor: 'rgba(0,0,0,.6)',
            backdropFilter: `blur(3px)`,
            border: '1px solid rgba(255,255,255,.9)',
          }}
          onClick={() => setTimerFromOpen((state) => !state)}
        >
          {!timerFormOpen ? <BiStopwatch /> : <IoClose />}
          {getMinutes() + ':' + getSeconds()}
        </Button>
      </Box>
      {/* TIME FORM SELECT HERE */}
      <Box
        sx={{
          bgcolor: 'rgba(100,100,100,.5)',
          backdropFilter: 'blur(3px) !important',
          opacity: `${timerFormOpen ? '1' : '0'}`,
          pointerEvents: `${!timerFormOpen && 'none'}`,
          transition: 'all 300ms ease-in-out',
        }}
      >
        <Stack direction='column'>
          {[0.1, 20, 30].map((time) => (
            <Button
              sx={{ color: 'white', minWidth: 'unset' }}
              onClick={() => {
                setTime(time * 60)
                setTimerPlay(false)
              }}
            >
              {time}
            </Button>
          ))}
          <Button
            sx={{ color: 'white', minWidth: 'unset' }}
            onClick={() => setTimerPlay(true)}
          >
            Go
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}

export default Timer
