import React, {useEffect} from 'react'
import ResetBtn from './ResetBtn'
import PuzzleItem from './PuzzleItem'
import Score from './Score'

class Game extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            score : 0,
            items:[
                {id: 1, visibility: 'visible'},
                {id: 2, visibility: 'visible'},
                {id: 3, visibility: 'visible'},
                {id: 4, visibility: 'visible'},
                {id: 5, visibility: 'visible'},
                {id: 6, visibility: 'visible'},
                {id: 7, visibility: 'visible'},
                {id: 8, visibility: 'visible'},
                {id: 9, visibility: 'visible'},
            ],
            bombID: null,
            pointMultiplier:0
        }
        
        this.handleResetClick = this.handleResetClick.bind(this);
        this.handleChangeScoreClick = this.handleChangeScoreClick.bind(this);

        this.onBombClick = this.onBombClick.bind(this);
        this.onHideItem = this.onHideItem.bind(this);
    }
     
    handleResetClick(){
        this.setState({
            pointMultiplier: 0   
        });
        this.setState(
            this.state.items.map(item => {
                item.visibility = 'visible'
            })
        )
    }

    onBombClick(){
        this.setState({score: 0})
    }

    onHideItem(id){
        console.log(id)
        this.setState(
            this.state.items.map(item => {
                if(item.id === id){
                    item.visibility = 'hidden'
                }
            })
        )
    }
    
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
        const puzzleItems = this.state.items.map((item) => {
            return <PuzzleItem id={item.id} 
                                onChangeScore={this.handleChangeScoreClick} 
                                onHide ={this.onHideItem}                               
                                checkBomb = {this.onBombClick}
                                visibility = {item.visibility}/>
        });

        return(
            <div className='game-page'>
                <Score score = {this.state.score}/>
                <div className='game-field'>                
                    {puzzleItems} 
                </div>       
                <ResetBtn onClick = {this.handleResetClick}/>            
           </div>)
    }
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

