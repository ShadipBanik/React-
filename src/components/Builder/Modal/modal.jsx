import React from 'react'
import classes from './modal.module.css'
const modal = ({children}) => {
    return (
        <div>
        <div className={classes.backdrop} ></div>
        <div className={classes.modalbody}>
            {children}
        </div>
      </div>
    )
}

export default modal
