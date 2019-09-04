import React, { useState } from 'react'

const PlayerInput = (props) => {
    const [username, setUsername] = useState(props.username)
    return (
        <div>
            <h2>Player {props.number}</h2>
            <h3>{props.username}</h3>
            <input type="text" onChange={(event) => setUsername(event.target.value)} />
            <button onClick={() => props.changeUsername(username)}>Submit</button>
        </div>
    )
}


export default PlayerInput