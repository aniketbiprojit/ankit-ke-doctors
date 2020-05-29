import React, { Component } from 'react'

export default class Template extends Component {
	render() {
		return <section className='template container'>
            <h1>{this.props.heading}</h1>
            <h2>{this.props.subheading}</h2>
            {this.props.children}
        </section>
	}
}
