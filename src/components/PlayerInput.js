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
            username: ""
        }
        // this.changeUsername = this.changeUsername.bind(this)
    }

    changeUsername = (event) => {
        // console.log(event.target.value)
        this.setState({
            username: event.target.value
        })
    }

    clearUsername = () => {
      this.setState({
        username: ""
      })
    }

    render() {
        // Ces deux méthodes sont identiques
        // const concatenation = "https://github.com/" + this.state.username + ".png?size=200"
        // const templateString = `https://github.com/${this.state.username}.png?size=200`
        console.log(this.state.username == false)
        return (
            <div>
                <p>Player {this.props.number}</p>
                <input type="text" value={this.state.username} placeholder="Enter user" onChange={this.changeUsername} />
                <button>Submit</button>
                {this.state.username && <PlayerResult username={this.state.username} onClear={this.clearUsername} />}
            </div>
        )
    }
}

PlayerInput.defaultProps = {
    number: 'Not Defined'
};

export default PlayerInput