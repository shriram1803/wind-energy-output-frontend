import React,{useState} from 'react'
import {Card, CardContent,CardActions,Button,TextField} from '@mui/material';

const PredictManual = () => {
  const [speed, setSpeed] = useState('');
  const [direction, setDirection] = useState('');
  const [output, setOutput] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();
    if (speed && direction){
      console.log("Submitted");
      console.log(speed,direction);
      setOutput("Yes");
    }
    
  }

  return (
    <div className='flex flex-col mx-auto my-40'>
      <div className='flex w-80'>
        <Card varient='outlined' className='flex flex-col w-full'>
          <span className='font-poppins font-semibold text-lg text-gradient text-center'>Power Prediction</span>
          <CardContent className='flex flex-col m-auto'>
            <div className='my-3'>
              <TextField label='Wind Speed' variant='standard' onChange={(e)=>{setSpeed(e.target.value)}}/>
            </div>
            <div className='my-3'>
              <TextField label='Wind Direction' variant='standard' onChange={(e)=>{setDirection(e.target.value)}}/>
            </div>
          </CardContent>
          <CardActions className='flex mt-4 m-auto'>
            <Button type='submit' onClick={handleSubmit}>Submit</Button>
          </CardActions>
        </Card>
      </div>
      
      {output && <div className='flex flex-row my-10 justify-center items-center'>
        <span className='font-poppins font-semibold text-lg text-gradient mx-5'>Output: </span>
        <span className='font-poppins font-semibold text-lg text-gradient mx-5'>{output}</span>
      </div>}
    </div>
  )
}

export default PredictManual