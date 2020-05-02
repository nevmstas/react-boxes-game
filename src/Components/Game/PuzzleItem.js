import React from 'react'

const PuzzleItem =(props)=>{
    
    return <div id={props.id} 
                    onClick={()=>{ props.onChangeScore(); props.onHide(props.id)}} 
                    className="puzzle-block" 
                    style={{visibility:props.visibility}}></div>
}

export default PuzzleItem