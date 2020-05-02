import React from 'react'

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

export default ResetBtn