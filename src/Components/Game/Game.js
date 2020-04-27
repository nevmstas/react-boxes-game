import React from 'react'

class Game extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            score: 0,
            itemClass: 'visible'           
        }

        this.handleResetClick = this.handleResetClick.bind(this);
        this.handleHideClick = this.handleHideClick.bind(this);
    }

    // componentDidMount(){
    //     this.setState({
    //         itemClass:'visible'
    //     })
    // }
    handleResetClick(){
        //const element = document.getElementById()
    }

    handleHideClick(){
        this.setState(prevState => {
            return {
                score: prevState.score++,
                itemClass:'hidden'
            }
        });
    }

    render(){
        const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const puzzleItems = ids.map((id) => {
            return <PuzzleItem id={id} onHide ={this.handleHideClick} visibility={this.state.itemClass}/>
        });

        return(
            <div className='game-field'>
                {puzzleItems}        
               <ResetBtn onClick = {this.handleResetClick} />
                <div>{this.state.score}</div>
           </div>)
    }

}

const PuzzleItem = (props)=>{
    return <div id={props.id} onClick={props.onHide} className="puzzle-block" style={{visibility:props.visibility}}></div>
}

function ResetBtn(props){
    return <div onClick={props.onClick} className="reset-btn">Reset</div>
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

