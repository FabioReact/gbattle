import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Conditional rendering of PlayerResult IF username is defined/chosen
const PlayerResult = (props) => {
    return (
        <div>
            <img src={`https://github.com/${props.username}.png?size=200`} alt={`Avatar of ${props.username}`}/>
            <p>@{props.username}</p>
            <span onClick={props.onClear}>Reset</span>
        </div>
    )
}

class PlayerInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
          username: "",
          submitted: false
        }
        // this.changeUsername = this.changeUsername.bind(this)
    }

    changeUsername = (event) => {
      this.setState({
        username: event.target.value
      })
    }

    changeSubmitted = () => {
      this.setState({
        submitted: true
      })
    }

    clearUsername = () => {
      this.setState({
        username: "",
        submitted: false
      })
    }

    render() {
        // Ces deux méthodes sont identiques
        // const concatenation = "https://github.com/" + this.state.username + ".png?size=200"
        // const templateString = `https://github.com/${this.state.username}.png?size=200`
        if (this.state.username && this.state.submitted) {
          return <PlayerResult username={this.state.username} onClear={this.clearUsername} />
        } else {
          return (
            <div>
                <p>Player {this.props.number}</p>
                <input type="text" value={this.state.username} placeholder="Enter user" onChange={this.changeUsername} />
                <button onClick={this.changeSubmitted}>Submit</button>
            </div>
          )
        }
    }
}

PlayerInput.defaultProps = {
    number: 'Not Defined'
};

export default PlayerInput