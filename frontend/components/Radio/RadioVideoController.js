import React from 'react'
import { Box, Button, Slider } from '@mui/material'
import {AiOutlinePlayCircle,AiOutlinePauseCircle} from 'react-icons/ai'
const RadioVideoController = ({ playing, setMuted, setPlaying, volume, setVolume }) => {

    const handleClick=(e) => {
        setMuted(state => !state)
        setPlaying((state) => !state)
    }
    return (
        <Box className='video-controller'
            sx={{
                zIndex:'100',
                boxSizing:'content-box',
                pb:{xs:'10vh',md:'0'},
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
                sx={{fontSize:'3rem',color:'white'}}
                    variant='text'
                    onClick={handleClick}
                    disableRipple
                    
                >
                {playing ? <AiOutlinePauseCircle/>: <AiOutlinePlayCircle/>}
                </Button>
                <Slider aria-label='Volume' sx={{flex:'auto 1 1',mr:2,color:'white'}} value={volume} max={1} min={0} step={.01} onChange={(e, val) => {
                    setVolume(val)
                }} />
            </Box>
        </Box>
    )
}

export default RadioVideoController