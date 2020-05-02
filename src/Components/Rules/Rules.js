import React from 'react'

class Rules extends React.Component{

    render(){
        return <div style={{background: 'white', color: 'black'}}>
            Rules:
            <ul>
                <li>One of 9 items have bomb</li>
                <li>If u take the bomb u'll lose all points</li>
                <li>The less items on the field the more points multiplier</li>
                <li>Button 'Reset' reset your point multiplier </li>
            </ul>

        </div>
    }
}

export default Rules