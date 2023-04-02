import React,{useEffect, useState} from 'react'
import { Box, Stack, Typography, Button, TextField } from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {

    const [search, setSearch] = useState('')
    const [bodyParts, setBodyParts] = useState([])

    useEffect(()=>{
        const fetchExercisesData = async () => {
          const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

          setBodyParts(['all', ...bodyPartsData])
        }

        fetchExercisesData()
    },[])

  const handleSearch = async () => {
    if(search){
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      const searchedExercises = exercisesData.filter((exercise)=> exercise.name.toLowerCase().includes(search) || 
      exercise.target.toLowerCase().includes(search) ||
      exercise.equipment.toLowerCase().includes(search) ||
      exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch('')
      setExercises(searchedExercises);
      
    }
    
  }

  return (
    <Stack alignItems='center' justifyContent='center' p='20px'>
      <Typography fontWeight='700' sx={{fontSize:{lg:'45px', xs:'30px'}, mt:{lg:'0px', sm:'60px',xs:'20px'}}} mb='50px' textAlign='center'>
        Awesome Exercises You<br />Should Know!
      </Typography>
      <Box position='relative' mb='72px'>
        <TextField height='75px' value={search}
         onChange={(e)=>setSearch(e.target.value.toLowerCase()) } 
         placeholder='Search Exercises' type='text' sx={{input:{fontWeight:'700', border:'none', borderRadius:'5px'}, width:{lg:'1000px', sm:'490px', xs:'250px'}, backgroundColor:'#fff'}} />
        <Button className='search-btn' sx={{bgcolor:'#FF2625', color:'#FFF', textTransform:'none', width:{lg:'120px', xs:'70px'}, fontSize:{lg:'20px', xs:'14px'}, height:'55px', position:'absolute', right:'0'}} onClick={handleSearch} >Search</Button>
      </Box>
      <Box sx={{position:'relative', width:'100%', padding:'20px'}}>
          <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts />
      </Box>
    </Stack>
  )
}

export default SearchExercises