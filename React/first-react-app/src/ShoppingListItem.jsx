import React from 'react'

const ShoppingListItem = ({item,quantity,completed}) => {
    const styles={color: completed ? "grey" : "blue", textDecoration: completed ? "line-through" : "none" }
  return (
    <li style={styles}>{item}   -    {quantity}</li>
  )
}

export default ShoppingListItem