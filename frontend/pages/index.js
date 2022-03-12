import Head from 'next/head'
import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import radioStations from '../data/radioStations'
import RadioStations from '../components/Radio/RadioStations'
import RadioVideo from '../components/Radio/RadioVideo'
import RadioVideoController from '../components/Radio/RadioVideoController'
export default function Home() {
  // const [src,setSrc]=useState('https://www.youtube.com/embed/GNWLILeztaI?controls=0&autoplay=1&mute=0')

  const [muted, setMuted] = useState(true)
  const [playing, setPlaying] = useState(false)
  const [videoSrc, setVideoSrc] = useState('')
  const [audioSrc, setAudioSrc] = useState('')
  const [volume, setVolume] = useState(0)
  useEffect(() => {
    const evt = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true,
      clientX: 20,
    })
    // document.getElementById('but').dispatchEvent(evt)

  }, [])
  return (
    <>
      <Head>
        <title>StudyFM</title>
        <meta name='description' content='Curated playlist' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box
        component='main'
        sx={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          bgcolor:'black'
        }}
      >
        <RadioStations
          radioStations={radioStations}
          setVideoSrc={setVideoSrc}
          setAudioSrc={setAudioSrc}
          setMuted={setMuted}
          setPlaying={setPlaying}
          setVolume={setVolume} />
        <RadioVideo
          videoSrc={videoSrc}
          audioSrc={audioSrc}
          playing={playing}
          muted={muted}
          volume={volume}
        />
        <RadioVideoController
          playing={playing}
          setMuted={setMuted}
          setPlaying={setPlaying}
          volume={volume}
          setVolume={setVolume}
        />
      </Box>
    </>
  )
}
