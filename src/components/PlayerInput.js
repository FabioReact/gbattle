import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// Conditional rendering of PlayerResult IF username is defined/chosen
const PlayerResult = props => {
  return (
    <div>
      <img
        src={`https://github.com/${props.username}.png?size=200`}
        alt={`Avatar of ${props.username}`}
      />
      <p>@{props.username}</p>
      <span onClick={props.onClear}>Reset</span>
    </div>
  );
};

const PlayerInput = (props) => {
  const initialState = {
    username: "",
    submitted: false
  };

  const [state, setState] = useState(initialState);
  // const myUseStateArray = useState(initialState);
  // const state = myUseStateArray[0]
  // const setState = myUseStateArray[1]

  useEffect(() => {
    console.log(`Username: ${state.username}`)
    document.title = `Username: ${state.username}`;
    return (() => console.log("PlayerInput will unmount"))
  }, [state.submitted]);

  const changeUsername = event => {
    setState({
      username: event.target.value,
      submitted: state.submitted
    });
  };

  const changeSubmitted = () => {
    setState({
      submitted: true,
      username: state.username
    });
  };

  const clearUsername = () => {
    setState({
      username: "",
      submitted: false
    });
  };

  // Ces deux méthodes sont identiques
  // const concatenation = "https://github.com/" + this.state.username + ".png?size=200"
  // const templateString = `https://github.com/${this.state.username}.png?size=200`
  if (state.username && state.submitted) {
    return (
      <PlayerResult
        username={state.username}
        onClear={clearUsername}
      />
    );
  } else {
    return (
      <div>
        <p>Player {props.number}</p>
        <input
          type="text"
          value={state.username}
          placeholder="Enter user"
          onChange={changeUsername}
        />
        <button onClick={changeSubmitted}>Submit</button>
      </div>
    );
  }
};

PlayerInput.defaultProps = {
  number: "Not Defined"
};

export default PlayerInput;
