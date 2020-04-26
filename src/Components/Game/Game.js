import React from 'react'

const PuzzleItem = (props)=>{
    return <div id={props.value} className="puzzle-block"></div>
}

const Game = () =>{
    const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    const puzzleItems = ids.map((id) => 
        <PuzzleItem key={id.toString()} value={id}/>)

    return(
         <div className='game-field'>
             {puzzleItems}        
            <div className="reset-btn">Reset</div>
        </div>
    )
}

export default Game

// var counter = 0;
// var pointMultiplier = 0;
// var bombId = '';

// function HideBlock(id) {
//     var block = document.getElementById(id);
//     if (id !== bombId) {
//         block.style.visibility = "hidden";
//         updateScore();
//     } else {
//         cleanCounter();
//         Reset();
//     }
// }

// function ErrorBlock() {
//     var allIds = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
//     bombId = allIds[Math.floor(Math.random() * allIds.length)];
// }

// function cleanCounter() {
//     counter = 0;
//     pointMultiplier = 1;
//     document.getElementById('countId').innerHTML = 'Score: ' + counter;
// }

// function updateScore() {
//     counter++;
//     counter = counter + pointMultiplier;
//     document.getElementById('countId').innerHTML = 'Score: ' + counter;
//     pointMultiplier++;
// }

// function Reset() {
//     pointMultiplier = 0;
//     ErrorBlock();
//     for(let i=1;i<=9;i++)
//         document.getElementById(i).css.visibility = 'visible';
// }

