import React, { Component } from 'react'

import Nav from '../Nav'
import Main from './Main'
import Template from './Template'
import Services from './Services'

export default class Home extends Component {
	constructor() {
		super()
		this.state = { width: window.innerWidth }
	}
	componentDidMount() {
		window.addEventListener('resize', () => {
			this.setState({ width: window.innerWidth })
		})
	}
	render() {
		return (
			<div className='home'>
				<Nav></Nav>
				<Main width={this.state.width}></Main>
				<Template
					heading='What do we do?'
					subheading='Simple and Easy Workflow'
				>
					<Services></Services>
				</Template>
			</div>
		)
	}
}
