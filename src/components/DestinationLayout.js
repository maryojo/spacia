import React from 'react'

const DestinationLayout = ({name, description, distance, travelTime}) => {
  return (
    <div className='flex flex-col'>
      <h2>{name}</h2>
      <p>{description}</p>
      <hr className='my-7 relative'/>
      <div className='flex flex-row justify-between'>
        <div className='flex flex-col'>
          <div className='nav-text'>Avg. distance</div>
          <h4>{distance}</h4>
        </div>
        <div className='flex flex-col'>
          <div className='nav-text'>est travel time</div>
          <h4>{travelTime}</h4>
        </div>
      </div>
      </div>
  )
}

export default DestinationLayout