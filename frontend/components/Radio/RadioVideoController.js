import React, { useRef } from 'react'
import { Box, Button, Slider } from '@mui/material'
import {AiOutlinePlayCircle,AiOutlinePauseCircle,AiOutlineSound} from 'react-icons/ai'
import {GrVolumeMute} from 'react-icons/gr'

const RadioVideoController = ({ playing, setMuted, setPlaying, volume, setVolume }) => {
    const lastVol=useRef(1)
    
    const handleClick=(e) => {
        setMuted(state => !state)
        setPlaying((state) => !state)
    }
    return (
        <Box className='video-controller'
            sx={{
                zIndex:'100',
                boxSizing:'content-box',
                pb:{xs:'10vh',sx:'5vh',md:'0'},
                position: 'absolute',
                width: '100%',
                bottom: '0',
                display: 'flex',
                height: '20vh',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Box sx={{ maxWidth: '300px',width:'100%',display:'flex',alignItems:'center' }}>
                <Button
                sx={{fontSize:'4rem',color:'white',minWidth:'0',px:'5px'}}
                    variant='text'
                    onClick={handleClick}
                    disableRipple
                    
                >
                {playing ? <AiOutlinePauseCircle/>: <AiOutlinePlayCircle/>}
                </Button>
                <Button
                sx={{fontSize:'3rem',color:'white',minWidth:'0',px:'8px'}}
                variant='text'
                disableRipple
                onClick={()=>{
                    if(volume===0)setVolume(lastVol.current)
                    else {  setVolume(0)}
                }}>
                {volume>0 ? <AiOutlineSound/>:  <GrVolumeMute/>}

                   
                </Button>
                <Slider aria-label='Volume' sx={{flex:'auto 1 1',mr:2,color:'white'}} value={volume} max={1} min={0} step={.01} onChange={(e, val) => {
                    setVolume(val)
                    lastVol.current=val
                    console.log(lastVol.current)
                }} />
            </Box>
        </Box>
    )
}

export default RadioVideoController