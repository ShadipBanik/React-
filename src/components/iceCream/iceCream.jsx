import React from 'react'
import classes from './iceCream.module.css'
import Scoop from './Scoop/scoop'
const iceCream = ({scoop}) => {
    
    return (
        <div>
        <div className={classes.icecream}>
          <p className={classes.cone}></p>
          {/* <p>Please start adding scoops</p> */}
          {/* scope components */}
           {
             scoop.map((scp)=>(
               <Scoop key={`${scp}${Math.random()}`} scoop={scp} />
             ))
           }
          <div className={classes.cherry}></div>
        </div>
      </div>
    )
}

export default iceCream
