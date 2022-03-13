import { Box, Button } from '@mui/material'
import React from 'react'

const Overlay = ({ playing }) => {

    return (
        <Box
            className='video-player-overlay'
            sx={{
                position: 'absolute',
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                top: '0',
                bottom: '0',
                transition: 'all 300ms ease-in',
            }}
            onClick={(e) => e.stopPropagation()}
        >
            <Box
                className='overlay-header'
                sx={{
                    flex: '60px 0 0',
                    bgcolor: '#111',
                    opacity: `${playing ? '0' : '1'}`,
                    transition: `all ${playing ? '350ms ease-in' : '0ms ease-out'}`,
                }}
            ></Box>
            <Box className='overlay-body' sx={{
                flexGrow: '1',
                bgcolor: '#111',
                opacity: `${playing ? '0' : '.75'}`,
                transition: `all ${playing ? '350ms ease-in' : '0ms ease-out'}`,
            }}></Box>
            <Box
                className='overlay-footer'
                sx={{
                    flex: '20vh 0 0',
                    bgcolor: '#111',
                    opacity: `${playing ? '0' : '1'}`,
                    boxSizing: 'content-box',
                    pb: { xs: '10vh', sx: '5vh', md: '0' },
                    transition: `all ${playing ? '350ms ease-in' : '0ms ease-out'}`,
                }}
            >
            </Box>
        </Box>
    )
}

export default Overlay