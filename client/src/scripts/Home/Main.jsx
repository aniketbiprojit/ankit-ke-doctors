import React, { Component } from 'react'

export default class Main extends Component {
	render() {
		return (
			<main id='home'>
				<div className='container'>
					<div className='inner'>
						<div className='left'>
							<p className='bold'>
								No square
								<p>can ever be</p>
								<p>a round circle.</p>{' '}
							</p>
							<p className='normal'>
								{this.props.width >= 440 ? (
									<React.Fragment>
										There are almost always one too many
										variables <br />
										that need to be considered in most
										equations for <br />
										for any thing to not become jargon.
									</React.Fragment>
								) : (
									`There are almost always one too many variables that need to be considered in most equations for any thing to not become jargon.`
								)}
							</p>
						</div>
					</div>
				</div>
			</main>
		)
	}
}
