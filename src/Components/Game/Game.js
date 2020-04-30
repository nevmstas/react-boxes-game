import React from 'react'

class Game extends React.Component{
    constructor(props){
        super(props);

        this.handleResetClick = this.handleResetClick.bind(this);
        this.handleChangeScoreClick = this.handleChangeScoreClick.bind(this);

        this.checkBomb = this.checkBomb.bind(this);

        //this.handleChangeVisibility = this.handleChangeVisibility.bind(this);

        this.state = {
            score: 0,
            pointMultiplier: 0,
            bombID: null,
            resetVisible: null
            //visibility: 'visible'
        }


    }

    // handleChangeVisibility(){
    //     this.setState({visibility: 'hidden'})
    // }

    handleResetClick(){
        this.setState({
            pointMultiplier: 0,
            resetVisible:'visible'      
        });
    }

    checkBomb(){
        this.setState({score: 0})
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
        const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const bombID = ids[Math.floor(Math.random() * ids.length)];
        const resetVisible = this.state.resetVisible;
        const puzzleItems = ids.map((id) => {
            return <PuzzleItem id={id} 
                                onChangeScore={this.handleChangeScoreClick} 
                                //onChangeVisibility={this.handleChangeVisibility} 
                                resetVisible={resetVisible} 
                                bombID= {bombID}
                                checkBomb = {this.checkBomb}/>
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

class PuzzleItem extends React.Component{
    constructor(props){
        super(props);
        
        this.handleHideClick = this.handleHideClick.bind(this);
        this.checkBomb = this.handleCheckBomb.bind(this);
        this.state ={
            visibility: 'visible'
        }

    }

    handleHideClick(){
        this.setState({
            visibility: 'hidden'
        })
    }
    
    // handleHideClick(){
    //     this.props.onChangeVisibility();
    // }

    handleCheckBomb()
    {
        if(this.props.id===this.props.bombID)
            this.props.checkBomb()
    }
    
    
    render(){
        return <div id={this.props.id} 
                    onClick={()=>{this.handleHideClick(); this.props.onChangeScore()}} 
                    className="puzzle-block" 
                    style={{visibility:this.props.resetVisible===null?this.state.visibility:this.props.resetVisible}}></div>
    }
}



class ResetBtn extends React.Component{
    constructor(props){
        super(props)

        this.handleResetClick = this.handleResetClick.bind(this);
    }

    handleResetClick(){
        this.props.onClick();
    }

    render(){
        return <div onClick={this.props.onClick} className="reset-btn">Reset</div>
    }
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

