import React from 'react'

const ColorList = ({colors}) => {
  return (
    <>
        <ul>
            {colors.map(color=>(<li style={{color:color}}>{color}</li>))}
        </ul>
    </>
    
  )
}

export default ColorList