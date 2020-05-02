import React from 'react'

const Score = (props) =>{
    return(
        <div className="score">
            <p>Score:</p>
            <p>{props.score}</p>
        </div>
    )
}

export default Score