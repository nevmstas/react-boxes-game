import React from 'react'

const PuzzleItem =(props)=>{
    
    return <div id={props.id} 
                    onClick={()=>{props.onHide(props.id); props.onChangeScore()}} 
                    className="puzzle-block" 
                    style={{visibility:props.visibility}}></div>
}

export default PuzzleItem