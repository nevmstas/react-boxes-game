import React from 'react'
class Clock extends React.Component{
    constructor(props){
        super(props)
        this.state = {date:new Date()};
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(), 1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            date: new Date()
        });
    }

    render(){
        return(
            <div>
                <h1>Clock: </h1>
                <h2>Now {this.state.date.toLocaleTimeString()}.</h2>
            </div> 
        );
    }
}

export default Clock;



// function Clock(props){
//     return(
//         <div>
//             <h1>Clock: </h1>
//             <h2>Now {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     )
// }


// function tick(){
//     ReactDOM.render(
//         <Clock date={new Date()}/>, document.getElementById('root')
//     );
// }

//setInterval(tick,1000)