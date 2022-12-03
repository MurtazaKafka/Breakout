// React component for the paddle
class Paddle extends React.Component {
  render() {
    return (
      <div
        className="paddle"
        style={{ left: this.props.x }}
        onMouseMove={this.props.onMouseMove}
      />
    );
  }
}

// React component for the ball
class Ball extends React.Component {
  render() {
    return (
      <div
        className="ball"
        style={{
          left: this.props.x,
          top: this.props.y,
          transform: `translate(-50%, -50%) rotate(${this.props.angle}deg)`,
        }}
      />
    );
  }
}

// React component for the game board
class Board extends React.Component {
  constructor(props) {
    super(props);

    // Set initial state
    this.state = {
      paddleX: 0,
      ballX: 0,
      ballY: 0,
      ballAngle: 0,
    };

    // Bind event handlers

    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  // Event handler for mouse move events
  handleMouseMove(event) {
    this.setState({
      paddleX: event.clientX - this.paddleRef.offsetWidth / 2,
    });
  }

  render() {
    return (
      <div className="board">
        <Paddle
          x={this.state.paddleX}
          onMouseMove={this.handleMouseMove}
          ref={(paddleRef) => (this.paddleRef = paddleRef)}
        />
        <Ball
          x={this.state.ballX}
          y={this.state.ballY}
          angle={this.state.ballAngle}
        />
      </div>
    );
  }
}

ReactDOM.render(<Board />, document.getElementById('root'));
