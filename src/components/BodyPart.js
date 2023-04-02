import React from 'react'
import { Stack, Typography } from '@mui/material'
import Icon from '../assets/icons/gym.png'
import { borderTop } from '@mui/system'

const BodyPart = ({item, setBodyPart, bodyPart}) => {
  return (
    <Stack type='button'
    alignItems='center'
    justifyContent='center'
    className='bodyPart-card'
    sx={{
        borderTop: bodyPart===item ? '4px solid #ff2625' : '',
        background:'#fff', borderBottomLeftRadius:'20px', width:'220px', height:'220px', cursor:'pointer', gap:'45px'
    } }
    onClick={()=>{
      setBodyPart(item);
      window.scrollTo({left: 100, behavior:'smooth'})
    }}
    >
        <img src={Icon} alt="dumbbell" style={{width:'40px', height:'40px'}}/>

        <Typography fontSize='24px' fontWeight='bold' color='##3A1212' textTransform='capitalize'>{item}</Typography>
    </Stack>
  )
}

export default BodyPart