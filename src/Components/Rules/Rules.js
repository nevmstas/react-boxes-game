import React from 'react'

class Rules extends React.Component{
    constructor(props){
        super(props);
        
    }

    render(){
        return <div style={{background: 'white', color: 'black'}}>
            Rules:
            <ul>
                <li><a>One of 9 items have bomb</a></li>
                <li>If u take the bomb u'll lose all points</li>
                <li>The less items on the field the more points multiplier</li>
                <li>Button 'Reset' reset your point multiplier </li>
            </ul>

        </div>
    }
}

export default Rules