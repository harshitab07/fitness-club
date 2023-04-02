import React from 'react'
import {Box, Stack, Typography} from '@mui/material';

const ExerciseVideo = ({exerciseVideos, name}) => {
 // console.log(exerciseVideos)
    if(!exerciseVideos.length) return 'Loading..'
  return (
    <Box sx={{marginTop: {lg: '80px', xs: '15px'}}} p='20px'>
        <Typography variant='h3' mb='33px' >
            Watch <span style={{color: '#ff2625', textTransform:'capitalize'}}>{name}</span> exercise videos
        </Typography>
        <div className='exercise-img-div' >
            {exerciseVideos?.slice(0,2).map((item, index) => (
                <a key={index} className='exercise-video' href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                target='_blank' rel='noreferrer'>
<img className='exercise-img' src={item.video.thumbnails[0].url} alt={item.video.title} />
              <Box >
                <Typography variant='h6' style={{color:"black"}}>{item.video.title}</Typography>
              </Box>
                </a>

            ))}
        </div>
</Box>

  )
}

export default ExerciseVideo