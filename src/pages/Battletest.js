import React, { Component } from 'react'
import PlayerInput from '../components/PlayerInputTest'

class Battle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            playerOne: "",
            playerTwo: ""
        }
    }

    changeUsername = (username) => {
        console.log(username)
        this.setState({
            playerOne: username
        })
    }

    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'space-around', textAlign: 'center'}}>
                <PlayerInput number={"One"} changeUsername={this.changeUsername} username={this.state.playerOne} />
                <PlayerInput number={"Two"}/>
            </div>
        )
    }
}

export default Battle
