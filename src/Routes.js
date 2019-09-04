import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Battle from './pages/Battle'
import Popular from './pages/Popular'


const Routes = () => {
    return (
        <Switch>
            {/* <Route path="/" component={NavBar} /> */}
            <Route path="/popular" component={Popular} />
            <Route path="/battle" component={Battle} />
            <Route path="/" exact component={() => <h1>Home</h1>} />
            <Route path="/" component={() => <h1>404</h1>} />
        </Switch>
    )
}

export default Routes