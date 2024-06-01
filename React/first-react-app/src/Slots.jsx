import React from 'react'

const Slots = ({val1,val2,val3}) => {
    const isWinner=(val1===val2 && val2==val3 && val3==val1)
  return (
    <div>
        <h1>{val1} {val2} {val3}</h1>
        {isWinner?<h1 style={{color:'green'}}>You Win</h1>:null}
        {!isWinner?<h1 style={{color:'red'}}>You Lose</h1>:null}
        {isWinner?<h1 style={{color:'black'}}>Congrats</h1>:null}    
    </div>
  )
}

export default Slots