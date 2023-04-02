import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

const SimilarExercises = ({tragetMuscleExercises, equipmentExercises}) => {
  return (
    <Box sx={{mt: {lg: '20px', xs: '5px'}}} mb="20px">
      <Typography variant='h3' mt="20px" mb="20px">Exercises targeting same muscles group</Typography>
      <Stack direction='row' sx={{p: '2', position: 'relative'}}>
        {tragetMuscleExercises.length ? 
          <HorizontalScrollbar data={tragetMuscleExercises} /> : <Loader />  
      }
      </Stack>
      <Typography variant='h3' mt="40px" mb="20px">Exercises using same equipments</Typography>
      <Stack direction='row' sx={{p: '2', position: 'relative'}}>
        {equipmentExercises.length ? 
          <HorizontalScrollbar data={equipmentExercises} /> : <Loader />  
      }
      </Stack>
    </Box>
  )
}

export default SimilarExercises;