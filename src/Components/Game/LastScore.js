import React, { Component } from 'react'

const LastScore = (props) =>{
      
    return (
        <div className = {'last-score'}>
            <p>Your last score:</p><p>{props.lastScore.join(' ')}</p>
        </div>
    ) 
}

export default LastScore

