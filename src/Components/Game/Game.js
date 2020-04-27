import React from 'react'

class Game extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            score: 0,
            pointMultiplier: 0,
            bombID: null
        }

        this.handleResetClick = this.handleResetClick.bind(this);
        this.handleChangeScoreClick = this.handleChangeScoreClick.bind(this);
    }

    handleResetClick(){
        
    }
    
    // checkBomb(bombID, itemID){
    //     if(bombID === itemID) return true
    //     return false
    // }

    handleChangeScoreClick(){       
            this.setState(prevState => {
                return {
                    score: (prevState.score++) + prevState.pointMultiplier,
                }
            });
            this.setState(prevState => {
                return {
                    pointMultiplier: prevState.pointMultiplier++
                }
            });     
    }

    render(){
        const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const bombID = ids[Math.floor(Math.random() * ids.length)];
        
        const puzzleItems = ids.map((id) => {
            return <PuzzleItem id={id} onChangeScore={this.handleChangeScoreClick} visibility={this.state.test} />
        });

        return(
            <div className='game-page'>
                <Score score = {this.state.score}/>
                <div className='game-field'>                
                    {puzzleItems} 
                </div>       
                <ResetBtn onClick = {this.handleResetClick} />            
           </div>)
    }
}

class PuzzleItem extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            visibility: 'visible'
        }

        this.handleHideClick = this.handleHideClick.bind(this)
    }

    handleHideClick(){
        this.setState({
            visibility: 'hidden'
        })
    }

    render(){
        return <div id={this.props.id} onClick={()=>{this.handleHideClick(); this.props.onChangeScore()}} className="puzzle-block" style={{visibility:this.state.visibility}}></div>
    }
}

function ResetBtn(props){
    return <div onClick={props.onClick} className="reset-btn">Reset</div>
}

const Score = (props) =>{
    return(
        <div className="score">
            <p>Score:</p>
            <p>{props.score}</p>
        </div>
    )
}

export default Game


// const Game = () =>{
//     const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    
//     const puzzleItems = ids.map((id) => 
//         <PuzzleItem key={id.toString()} value={id}/>)

//     return(
//          <div className='game-field'>
//              {puzzleItems}        
//             <ResetBtn onClick = {this.handleResetClick} />
//         </div>
//     )
// }


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

