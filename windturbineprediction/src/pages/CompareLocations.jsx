import React,{useState} from 'react'
import {Card, CardContent,CardActions,Button,TextField} from '@mui/material';

const CompareLocations = () => {
  const [latitude1, setLatitude1] = useState('');
  const [longitude1, setLongitude1] = useState('');
  const [latitude2, setLatitude2] = useState('');
  const [longitude2, setLongitude2] = useState('');
  const [output, setOutput] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();
    if (latitude1 && longitude1 && latitude2 && longitude2){
      console.log("Submitted");
      console.log(latitude1,longitude1,latitude2,longitude2);
      setOutput("Yes");
    }
    
  }
  return (
    <div className='flex flex-col mx-auto my-40'>
      <span className='font-poppins font-semibold text-lg text-gradient text-center'>Power Prediction</span>
      
      <div className='flex flex-row flex-wrap gap-x-24 my-14'>
        <div className='flex w-80'>
          <Card varient='outlined' className='flex flex-col w-full'>
          <span className='font-poppins font-semibold text-lg text-gradient text-center'>Location 1</span>
            <CardContent className='flex flex-col m-auto'>
              <div className='my-3'>
                <TextField label='Latitude' variant='standard' onChange={(e)=>{setLatitude1(e.target.value)}}/>
              </div>
              <div className='my-3'>
                <TextField label='Longitude' variant='standard' onChange={(e)=>{setLongitude1(e.target.value)}}/>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className='flex w-80'>
          <Card varient='outlined' className='flex flex-col w-full'>
          <span className='font-poppins font-semibold text-lg text-gradient text-center'>Location 2</span>
            <CardContent className='flex flex-col m-auto'>
              <div className='my-3'>
                <TextField label='Latitude' variant='standard' onChange={(e)=>{setLatitude2(e.target.value)}}/>
              </div>
              <div className='my-3'>
                <TextField label='Longitude' variant='standard' onChange={(e)=>{setLongitude2(e.target.value)}}/>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <CardActions className='flex mt-4 m-auto'>
        <Button type='submit' onClick={handleSubmit}>Submit</Button>
      </CardActions>
      {output && <div className='flex flex-row my-10 justify-center items-center'>
        <span className='font-poppins font-semibold text-lg text-gradient mx-5'>Output: </span>
        <span className='font-poppins font-semibold text-lg text-gradient mx-5'>{output}</span>
      </div>}
    </div>
  )
}

export default CompareLocations