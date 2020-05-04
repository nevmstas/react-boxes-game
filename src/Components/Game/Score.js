import React from 'react'

const Score = (props) =>{
    
    function changeColorOfScore(score){
        switch(score){
            case score>1:
                return 'green'
                break;
            case score>5:
                return 'blue'
                break;
            case score>10:
                return 'red'
                break;
        }
    }
    
    return(
        <div className="score">
            <p>Score:</p>&nbsp;
            <p style= {{color: '#2B44B6'}}>{props.score}</p>
        </div>
    )
}

export default Score