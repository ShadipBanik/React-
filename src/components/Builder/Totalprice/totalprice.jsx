import React from 'react'
import classes from './totalprice.module.css'
const totalprice = ({price=0}) => {
    return (
        <div className={classes.total}>
        <div>Total Price</div>
        <div>{price.toFixed(2)} Tk</div>
      </div>
    )
}

export default totalprice
