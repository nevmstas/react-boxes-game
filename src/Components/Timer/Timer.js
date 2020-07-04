import React from "react";
import "./Timer.css";

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      seconds: 0,
      isOn: false,
    };

    this.handleChangeCounter = this.handleChangeCounter.bind(this);
  }

  handleChangeCounter() {
    this.props.newGame();
    this.setState({
      seconds: 10,
      isOn: true,
    });
    if (!this.state.isOn) {
      let timer = setInterval(() => {
        if (this.state.seconds === 0) {
          clearInterval(timer);
          this.setState({ isOn: false });
          this.props.updateLastScore();
          this.props.newGame();
        } else {
          this.setState((prevState) => ({
            seconds: prevState.seconds - 1,
          }));
        }
      }, 1000);
    }
  }

  render() {
    const seconds = this.state.seconds;
    const numberSize = () => {
      if (seconds < 10 && seconds !== 0) return "50px";
    };
    const color = () => {
      if (seconds < 10 && seconds !== 0) return "red";
    };
    return (
      <React.Fragment>
        <div className="timer">
          <button onClick={this.handleChangeCounter} className={"spin circle"}>
            Start
          </button>
          <div>Timer:</div>&nbsp;
          <div style={{ fontSize: numberSize(), color: color() }} className="time-number">
            {this.state.seconds}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Timer;
