import React from 'react'
import Item from './Item/item'
const items = ({items,add,remove}) => {
    const flavors=Object.keys(items);
    return (
        <div>
            <ul>
                {flavors.map((flavor)=>(
                    <Item key={flavor} name={flavor} add={add} remove={remove} />                
                ))}
            </ul>
        </div>
    )
}

export default items
