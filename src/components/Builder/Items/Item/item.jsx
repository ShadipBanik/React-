import React from 'react'
import classes from './item.module.css'
const item = ({name,add,remove}) => {
    return (
        <li className={classes.item}>
        <span>{name}</span>
        <span className={classes.quantity}>2</span>
        <div className="right">
          <button type="button" onClick={add.bind(this,name)} className={[classes.plus,'rounded'].join(' ')}>+</button>
          <button type="button" onClick={remove.bind(this,name)} className={[classes.minus ,'rounded'].join(' ')}>-</button>
        </div>
      </li>
    )
}

export default item
