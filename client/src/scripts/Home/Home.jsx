import React, { Component } from 'react'

import Nav from '../Nav'
import Main from './Main'
import Template from './Template'
import Services from './Services'
import More from './More'

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
					style={{ backgroundColor: '#eef2f5' }}
				>
					<Services></Services>
				</Template>
				<Template
					h2={{ color: 'white' }}
					style={{ backgroundColor: '#232B55' }}
					heading='We got more?'
					subheading='But why honesty? We just do.'
				>
					<More></More>
				</Template>
				<Template
					heading="Customers"
					subheading="What awesome people say?"
				></Template>
			</div>
		)
	}
}
