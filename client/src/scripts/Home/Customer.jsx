import React, { Component } from 'react'

function Bubble(props) {
	return (
		<React.Fragment>
			<div className='bubble'>
                
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
						<div className='inner'>
							<Bubble></Bubble>
						</div>
					</div>
				</section>
			</React.Fragment>
		)
	}
}
