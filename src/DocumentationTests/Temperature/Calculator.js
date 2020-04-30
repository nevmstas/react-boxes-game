import React from 'react'

function BoilingVerdict(props){
    if(props.celsius >= 100){
        return <p>Water will boil</p>
    }
    return<p>Water won't boil</p>
}

class Calculator extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {tempirature: ''}

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.setState({tempirature: e.target.value});
    }

    render() {
        const tempirature = this.state.tempirature;
        return (

            <fieldset>
                <legend>Enter tempirature in celsius:</legend>
                <input
                value={tempirature}
                onChange={this.handleChange}/>
                <BoilingVerdict
                celsius={parseFloat(tempirature)}/>
            </fieldset>
        )
    }
}

export default Calculator
