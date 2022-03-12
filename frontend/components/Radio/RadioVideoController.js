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
                position: 'absolute',
                width: '100%',
                bottom: '0',
                display: 'flex',
                height: '20vh',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Box sx={{ maxWidth: '300px' }}>
                <Button
                sx={{fontSize:'3rem'}}
                    variant='text'
                    onClick={handleClick}
                    disableRipple
                >
                {playing ? <AiOutlinePauseCircle/>: <AiOutlinePlayCircle/>}
                </Button>
                <Slider aria-label='Volume' value={volume} max={1} min={0} step={.01} onChange={(e, val) => {
                    setVolume(val)
                }} />
            </Box>
        </Box>
    )
}

export default RadioVideoController