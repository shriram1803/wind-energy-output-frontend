import React from 'react'

const About = () => {
  return (
    <div className='flex'>
      <div className='flex'>
      <div className='flex flex-col'>
        <span className="flex font-poppins font-semibold text-6xl text-center text-gradient mx-auto p-6">
          Wind Turbine Power Prediction
        </span>
        <span className='flex font-poppins font-semibold text-xl text-justify my-10 p-4'>
        Wind energy plays an increasing role in the supply of energy worldwide. The energy output of a wind farm is highly dependent on the weather conditions present at its site. If the output can be predicted more accurately, energy suppliers can coordinate the collaborative production of different energy sources more efficiently to avoid costly overproduction. In this project, we take a computer science perspective on energy prediction based on weather data and analyse the important parameters as well as their correlation on the energy output. To deal with the interaction of the different parameters, we use 5 various algorithms of machine learning algorithms in order to obtain the best accuracy of the result. Our studies are carried out on publicly available weather and energy data for a wind farm. We report on the correlation of the different variables for the energy output. The model obtained for energy prediction gives a very reliable prediction of the energy output for supplied weather data.
        </span>
      </div>
      </div>
    </div>
  )
}

export default About;