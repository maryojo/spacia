import React from 'react'

const TechLayout = ({name, description, role}) => {
  return (
    <div className='flex flex-col'>
      <h4>{role}</h4>
      <h3>{name}</h3>
      <p>{description}</p>
      </div>
  )
}

export default TechLayout