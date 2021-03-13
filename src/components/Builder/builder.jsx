import React from 'react'
import classes from './builder.module.css'
import Items from './Items/items'
import Totalprice from './Totalprice/totalprice'
import Modal from './Modal/modal'
const builder = ({items,price,add,remove}) => {
    return (
        <div>
            <div className={classes.builder}>
              <h3>Build your own Ice Cream Sundae</h3>
               <Items items={items} add={add} remove={remove}/>
               <Totalprice price={price} />
               {/* price */}
              <button type="button"  className={[classes.order,'rounded'].join(' ')}>
                Add to Cart
              </button>
            </div>
            <Modal>
                
            </Modal>
        </div>
    )
}

export default builder
