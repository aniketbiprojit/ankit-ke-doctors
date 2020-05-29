import React, { Component } from 'react'

function Bubble(props) {
	return (
		<React.Fragment>
			<div className='bubble'>
				<p>
					The erratic rate of mettalic radiation has led to the
					contrasting belief of perpetual machines. The irony lies
					within the diabolic nature of nature itself.
					{props.width > 575
						? `                    Such a source
					could be revolutionize the entirity of humanity. In contrast
					what we know and what we believe are most likely the reason
					for this dilemma.
`
						: ''}{' '}
				</p>
				<hr />
				<p className='name'>Anonymous Angel</p>
				<p className='designation'>Ceo, Space Weapons Program </p>
				<div className='corner'></div>
			</div>
		</React.Fragment>
	)
}

export default class Customer extends Component {
	render() {
		return (
			<React.Fragment>
				<section id='customer'>
					<div className='container outer'>
						<div className='inner flex'>
							<Bubble width={this.props.width}></Bubble>
							<Bubble width={this.props.width}></Bubble>
							{this.props.width > 1024 ? (
								<React.Fragment>
									<Bubble width={this.props.width}></Bubble>
									<Bubble width={this.props.width}></Bubble>
								</React.Fragment>
							) : (
								''
							)}
						</div>
					</div>
				</section>
			</React.Fragment>
		)
	}
}
