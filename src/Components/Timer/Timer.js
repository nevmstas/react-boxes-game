import React, {useState} from 'react'
import './Timer.css'

class Timer extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            seconds: 0,
            isOn:false
        }

        this.handleChangeCounter = this.handleChangeCounter.bind(this)
    }

    handleChangeCounter(){
        this.setState({
            seconds: 10,
            isOn:true
        })
        if(!this.state.isOn){
            let timer = setInterval(()=>{
                
                if(this.state.seconds === 0){
                    clearInterval(timer)
                    this.setState({isOn:false})
                    this.props.updateLastScore()                  
                    this.props.newGame()
                }else{
                this.setState(prevState => ({
                    seconds: prevState.seconds-1
                }))}
            },1000)
        }     
    }

    render(){
        return(
            <div className='timer'>
                <button onClick ={this.handleChangeCounter}>Start</button>
                <div>Timer: {this.state.seconds}</div>
            </div>
        )
    }
}

export default Timer