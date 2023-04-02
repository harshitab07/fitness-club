import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Logo from '../assets/images/Logo-1.png'

const Footer = () => {
  return (
    <Box mt="40px" mb="10px" bgcolor="#fff3f4" width="100%">
<Stack gap="10px" alignItems="center" px="30px" pt="15px" >
<img src={Logo} alt='logo' height="60px" />
<Typography color='#ff2625' fontSize="18px">
  Made with &#10084; by Harshita
</Typography>
</Stack>
    </Box>
  )
}

export default Footer