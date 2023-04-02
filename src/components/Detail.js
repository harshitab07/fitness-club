import React from 'react'
import { Typography, Stack, Button } from '@mui/material'
import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/equipment.png'
import EquipmentImage from '../assets/icons/target.png'

const Detail = ({ exerciseDetail }) => {
    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart
        },
        {
            icon: TargetImage,
            name: target
        },
        {
            icon: EquipmentImage,
            name: equipment
        },
    ]
  return (
    <Stack gap="30px" sx={{flexDirection: { lg : 'row'}, p: '20px', alignItems: 'center'}}>
        <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
        <Stack sx={{gap: {lg: '30px', xs: '15px'}}}>
            <Typography textTransform="capitalize">
                {name}
            </Typography>
            <Typography varient="h6" marginRight="10px">
                Exercises keep you strong!!{' '}<br></br>
                {name} {' '}
                is one of the best exercise to target your {target}.<br></br>
                It will help you in improving your health and mood.
            </Typography>
            {extraDetail.map((item) => {
               return (<Stack key={item.name} direction='row' gap='20px' alignItems='center'>
                    <Button sx={{background: '#fff2db', borderRadius: '50%', width: '60px', height: '50'}}>
                        <img src={item.icon} alt='body-part' style={{width: '50px', height: '50px'}} />
                    </Button>
                    <Typography textTransform='capitalize' varient='h5'>
                        {item.name}
                    </Typography>
                    </Stack>)
            })}
        </Stack>
        </Stack>
  )
}

export default Detail