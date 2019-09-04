import React from 'react'
import PlayerInput from '../components/PlayerInput'

class Battle extends React.Component {
    render() {
        return (
            <>
                <div>Battle Page</div>
                <PlayerInput number="One"/>
                <PlayerInput number="Two"/>
                <PlayerInput />
            </>
        )
    }
}

export default Battle
// export {Battle as default} // export par défaut, peut être renommé
// export {Battle} // Export nommé