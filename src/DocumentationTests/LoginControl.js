import React from 'react'

class LoginControl extends React.Component
{
    constructor(props){
        super(props);
        this.state = {isLoggedIn: false}

        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLoginClick(){
        this.setState({isLoggedIn: true})
    }

    handleLogoutClick(){
        this.setState({isLoggedIn: false})
    }

    render(){
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        {isLoggedIn?
            button = <LogoutButton onClick={this.handleLogoutClick} />:       
            button = <LoginButton onClick={this.handleLoginClick} />}

        return(
            <div>
                {button}
            </div>
        )
    }
}

function LogoutButton(props){
    return(
        <button onClick={props.onClick}>
            Logout
        </button>
    )
}
function LoginButton(props){
    return(
        <button onClick={props.onClick}>
            Login
        </button>
    )
} 

export default LoginControl;