import React from 'react'

const Game = () =>{
    return(
        // <div className='game-field'>
        //     <div id="1" className="puzzle-block" onClick={HideBlock(1)}></div>
        //     <div id="2" className="puzzle-block" onClick={HideBlock(2)}></div>
        //     <div id="3" className="puzzle-block" onClick={HideBlock(3)}></div>
        //     <div id="4" className="puzzle-block" onClick={HideBlock(4)}></div>
        //     <div id="5" className="puzzle-block" onClick={HideBlock(5)}></div>
        //     <div id="6" className="puzzle-block" onClick={HideBlock(6)}></div>
        //     <div id="7" className="puzzle-block" onClick={HideBlock(7)}></div>
        //     <div id="8" className="puzzle-block" onClick={HideBlock(8)}></div>
        //     <div id="9" className="puzzle-block" onClick={HideBlock(9)}></div>
        //     <div className="reset-btn" onClick={Reset()}>Reset</div>
        // </div>
         <div className='game-field'>
            <div id="1" className="puzzle-block"></div>
            <div id="2" className="puzzle-block"></div>
            <div id="3" className="puzzle-block"></div>
            <div id="4" className="puzzle-block"></div>
            <div id="5" className="puzzle-block"></div>
            <div id="6" className="puzzle-block"></div>
            <div id="7" className="puzzle-block"></div>
            <div id="8" className="puzzle-block"></div>
            <div id="9" className="puzzle-block"></div>
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

