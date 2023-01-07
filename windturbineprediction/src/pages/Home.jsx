import React from 'react'

const Home = () => {
  return (
    <div className='flex '>
      <div className='flex flex-col'>
        <span className="flex font-poppins font-semibold text-6xl text-center text-gradient mx-auto p-6">
          Welcome To Wind Turbine Power Prediction
        </span>
        <span className='flex font-poppins font-semibold text-xl text-justify my-10 p-4'>
          Renewable energy such as wind and solar energy plays an increasing role in the supply of energyworld-wide. This trend will continue because the global energy demand is increasing and theuse of nuclear power and traditional sources of energy such as coal and oil is either consideredas non-safe or leads to a large amount of CO2emission.Wind energy is a key-player in the ﬁeld of renewable energy. The capacity of wind energyproduction was increased drastically during the last years. 
          In Europe for example, the capacityof wind energy production has doubled since 2005. However, the production of wind energy ishard to predict as it relies on the rather unstable weather conditions present at the wind farm.In particular, the wind speed is crucial for energy production based on wind and the wind speedmay vary drastically during diﬀerent periods of time. 
          Energy suppliers are interested in accuratepredictions, as they can avoid overproductions by coordinating the collaborative production oftraditional power plants and weather dependent energy sources.Our aim is to map weather data to energy production. We want to show that even data thatis publicly available for weather stations close to wind farms can be used to give a good predictionof the energy output. Furthermore, we examine the impact of diﬀerent weather conditionson the energy output of wind farms. We are, in particular, interested in the correlation ofdiﬀerent components that characterize the weather conditions such as wind speed, pressure,and temperature.
        </span>
      </div>
    </div>
  )
}

export default Home;