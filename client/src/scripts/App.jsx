import React from 'react'
import { Component } from 'react'

import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home/'

const logs = (response) => {
	console.log(response)
}

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Router>
					<Switch>
						<Route logs={logs} path='/' component={Home}></Route>
					</Switch>
				</Router>
			</React.Fragment>
		)
	}
}

export default App