import React, { Component } from 'react'
import classes from './iceCreamBuilder.module.css'
import Icecream from '../../components/iceCream/iceCream'
import Builders from '../../components/Builder/builder'
export default class iceCreamBuilder extends Component {
    state={
        items:{
           vanilla:80,
           chocolate:50,
           lemon:35,
           orange:40,
           strawberry:60,
        },
        scoops:[],
        totalprice:0,
    };

    addScope=(scoop)=>{
      const {scoops,items}=this.state;
      const workingscoop=[...scoops];
      workingscoop.push(scoop);
      this.setState((prevState)=>{
         return{
            scoops:workingscoop,
            totalprice: prevState.totalprice+items[scoop]
         }
      })
    }
    removeScope=(scoop)=>{
        const {scoops,items}=this.state;
        const workingscoop=[...scoops];
        const scoopIndex=workingscoop.findIndex((sc)=>sc===scoop);
        workingscoop.splice(scoopIndex,1);
        this.setState((prevState)=>{
            return{
                scoops:workingscoop,
                totalprice: prevState.totalprice-items[scoop]
             }
        })
      }
    render() {
        const {items,totalprice}=this.state
        return (
            <div className={['container',classes.container].join(' ')}>
               <Icecream scoop={this.state.scoops} />
               <Builders items={items} price={totalprice} add={this.addScope} remove={this.removeScope} />
            </div>
        )
    }
}

