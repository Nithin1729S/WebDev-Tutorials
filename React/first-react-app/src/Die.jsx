import React from 'react'
import './Die.css'
const Die = () => {
    const randomNum=Math.floor(Math.random()*6+1);
  return (
    <h1 className='Die'>Die Roll: {randomNum}</h1>
 )
}

export default Die