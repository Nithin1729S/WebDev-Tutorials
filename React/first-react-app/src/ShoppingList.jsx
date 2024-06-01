import React from 'react'
import ShoppingListItem from './ShoppingListItem'
const ShoppingList = ({ items }) => {
    return (
        <ul>
            {items.map((i) => 
                (<ShoppingListItem 
                    {...i}/>
                ))}
        </ul>
    )
}

export default ShoppingList