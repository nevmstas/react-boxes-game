import React from 'react'
import ghostImage from '../../dannyghost.png';

class Rules extends React.Component{

    render(){
        return(
            <React.Fragment>
            <div className = 'rules-container'>
                <div className='rules-list'>  
                    <div style={{fontSize:'50px'}}>Rules:  </div>              
                    <div><a href='#'>One of 9 items have bomb</a></div>
                    <div><a href='#'>If u take the bomb u'll lose all points</a></div>
                    <div><a href='#'>The less items on the field the more points multiplier</a></div>
                    <div><a href='#'>Button 'Reset' reset your point multiplier</a></div>

                </div>
                <div className='example-img'>
                    <img src = {ghostImage}></img>
                </div>
            </div>
            </React.Fragment>)

    }
}

export default Rules