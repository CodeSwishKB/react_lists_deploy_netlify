import React from 'react'
import LineItem from './LineItem'

const itemList = ({items, handleCheck, handleDelele}) => {
  return (
    <ul>
         {items.map((item) => (
            <LineItem 
                key={item.id}
                item={item}
                handleCheck={handleCheck}
                handleDelele={handleDelele}
            />
         ))}
     </ul>
  )
}

export default itemList