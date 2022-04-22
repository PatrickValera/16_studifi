import Head from 'next/head'
import { Box } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import radioStations from '../data/radioStations'
import RadioStations from '../components/Radio/RadioStations'
import RadioVideo from '../components/Radio/RadioVideo'
import RadioVideoController from '../components/Radio/RadioVideoController'
import Timer from '../components/Timer'
import Overlay from '../components/Overlay'
export default function Home() {
  // const [src,setSrc]=useState('https://www.youtube.com/embed/GNWLILeztaI?controls=0&autoplay=1&mute=0')

  const [muted, setMuted] = useState(true)
  const [playing, setPlaying] = useState(false)
  const [videoSrc, setVideoSrc] = useState("https://www.youtube.com/watch?v=5qap5aO4i9A&ab_channel=LofiGirl")
  const [audioSrc, setAudioSrc] = useState("https://www.youtube.com/watch?v=5qap5aO4i9A&ab_channel=LofiGirl")
  const [volume, setVolume] = useState(1)
  const main = useRef()
  useEffect(() => {
    setPlaying(true)
    setMuted(false)
    console.log(main.current)

  }, [audioSrc])

  return (
    <>
      <Head>
        <title>StudyFM</title>
        <meta name='description' content='Curated playlist' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box
        ref={main}
        component='main'
        sx={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          bgcolor: 'black'
        }}
      >
        <RadioStations
          radioStations={radioStations}
          playing={playing}
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
          setPlaying={setPlaying}
        />
        <RadioVideoController
          playing={playing}
          setMuted={setMuted}
          setPlaying={setPlaying}
          volume={volume}
          setVolume={setVolume}
        />
        <Timer
          setVolume={setVolume}
          volume={setVolume} />
        <Overlay playing={playing} />
      </Box>
    </>
  )
}
