import React, { Component } from 'react'

export default class Nav extends Component {
	constructor() {
		super()
		this.state = { width: window.innerWidth, side: 'hidden' }
		this.side = this.side.bind(this)
	}
	side() {
		const side = this.state.side === 'visible' ? 'hidden' : 'visible'
		this.setState({ side })
		console.log(this.state)
	}
	componentDidMount() {
		window.addEventListener('resize', () => {
			this.setState({ width: window.innerWidth })
		})
	}
	render() {
		return (
			<React.Fragment>
				<section className='Nav'>
					<div className='wrapper'>
						<div className='RelativeOuter container outer'>
							<div className='AbsoluteInner inner'>
								<div className='flex'>
									<div className='left'>Doctors</div>
									<div className='right RelativeOuter'>
										<div className='AbsoluteInner inner'>
											<div className='most'>
												{this.state.width >= '992' ? (
													<React.Fragment>
														<div className='list flex'>
															<p className='list-item'>
																About
															</p>
															<p className='list-item'>
																Contact
															</p>
															<p className='list-item'>
																Our
															</p>
															<div className='user flex'>
																<div className='button button-outline'>
																	Sign In
																</div>
																<div className='button button-fill'>
																	Know More
																</div>
															</div>
														</div>
													</React.Fragment>
												) : (
													<div className='list flex'>
														<div
															onClick={this.side}
															className='ham'
														></div>
													</div>
												)}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>{' '}
				</section>
				{
					// this.state.side === 'visible' &&
					this.state.width < 992 ? (
						<React.Fragment>
							<div
								style={{
									visibility: this.state.side,
									opacity:
										this.state.side === 'visible' ? 1 : 0,
								}}
								className='SideBar'
							>
								<div className='inner container'>
									<div className='item'>About</div>
									<div className='item'>Contact</div>
									<div className='item'>Our</div>
									<div className='button button-outline'>
										Sign In
									</div>
									<div className='button button-fill'>
										Get Started
									</div>
								</div>
							</div>
						</React.Fragment>
					) : (
						''
					)
				}
			</React.Fragment>
		)
	}
}
