import React from 'react'
import Die from './Die'
import './DiceRolls.css'
const DiceRolls = () => {
  return (
    <div className='DiceRolls'>
        <Die></Die>
        <Die></Die>
        <Die></Die>
        <Die></Die>
        <Die></Die>
        <br /><br />
    </div>
  )
}

export default DiceRolls