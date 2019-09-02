import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Popular from './pages/Popular'


const Routes = () => {
    return (
        <Switch>
            {/* <Route path="/" component={NavBar} /> */}
            <Route path="/popular/javascript" component={Popular} />
            <Route path="/popular" component={Popular} />
            <Route path="/" exact component={() => <h1>Home</h1>} />
            <Route path="/" component={() => <h1>404</h1>} />
        </Switch>
    )
}

export default Routes