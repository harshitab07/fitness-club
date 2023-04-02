import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'
const HeroBanner = () => {
  return (
    <Box sx={{mt: {lg: '30px', xs: '70px'},
      ml: {sm:'50px'}    
    }} position='relative' p='20px'>
      <Typography color='#FF2625' fontWeight='600' fontSize='25px'>
        Fitness Club
      </Typography>
      <Typography fontWeight='700' sx={{fontSize:{lg:'45px', sm:'40px'}}}>Sweat, Smile<br/>and Repeat</Typography>
      <Typography fontSize='25px' lineHeight='35px'  sx={{mb:{lg:'10px', sm:'15px', xs:'15px'}}}>Check out the most effective exercises</Typography>
      <Button variant="contained" color='error'  href='#exercises' sx={{padding:'10px'}}>Explore Exercises</Button>
      <Typography fontWeight='600' color='#ff2625' sx={{opacity:0.1, 
      fontSize:{lg:'200px', sm:'150x'},
      ml:{lg:'70px', sm:'30px'},
      mb:{lg:'-100px'}
      }} mt='-20px'>Exercises</Typography>
      <img src={HeroBannerImage} alt='banner' className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner