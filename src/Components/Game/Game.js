import React from 'react'
import ResetBtn from './ResetBtn'
import PuzzleItem from './PuzzleItem'
import Score from './Score'

import CountdownTimer from '../Timer/CountdownTimer'
import Timer from '../Timer/Timer'

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
        this.onHideItem = this.onHideItem.bind(this);
    }

    componentDidMount(){
        this.getRandomBomb()
    }

    handleResetClick(){
        this.getRandomBomb()
        this.setState({
            pointMultiplier: 0   
        });
        this.setState(
            this.state.items.map(item => {
                item.visibility = 'visible'
            })
        )
    }

    getRandomBomb(){
        const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.setState({
            bombID: ids[Math.floor(Math.random() * ids.length)]
        })
    }

    onHideItem(id){
        console.log(id)
        console.log('bomb - ',this.state.bombID)


        this.setState(
            this.state.items.map(item => {
                if(item.id === id){
                    if(id === this.state.bombID){
                        this.handleResetClick();
                        this.getRandomBomb()
                        this.setState({
                            score: 0, pointMultiplier: 0
                        })
                    }else{
                        item.visibility = 'hidden'
                    }

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
                                onHide ={this.onHideItem}     
                                onChangeScore={this.handleChangeScoreClick}                        
                                visibility = {item.visibility}/>
        });

        return(
            <div className='game-page'>
                {/* <CountdownTimer /> */}
                <Timer />
                <Score score = {this.state.score}/>
                <div className='game-field'>                
                    {puzzleItems} 
                </div>       
                <ResetBtn onClick = {this.handleResetClick}/>            
           </div>)
    }
}


export default Game

