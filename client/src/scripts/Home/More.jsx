import React, { Component } from 'react'
import graphic from '../../assets/download.svg'

export default class More extends Component {
	render() {
		return (
			<section id='more'>
				<div className='outer'>
					<div className='inner flex'>
						<div className='more-item'>
							<div className='more-image'>
                                <img src={graphic} alt=""/>
                                <p>Hello</p>
                                </div>
						</div>
						<div className='more-item'>
							<div className='more-image'>
                                <img src={graphic} alt=""/>
                                <p>Hello</p>
                                </div>
						</div>
						<div className='more-item'>
							<div className='more-image'>
                                <img src={graphic} alt=""/>
                                <p>Hello</p>
                                </div>
						</div>
						<div className='more-item'>
							<div className='more-image'>
                                <img src={graphic} alt=""/>
                                <p>Hello</p>
                                </div>
						</div>
					</div>
                    <div className='inner flex'>
						<div className='more-item'>
							<div className='more-image'>
                                <img src={graphic} alt=""/>
                                <p>Hello</p>
                                </div>
						</div>
						<div className='more-item'>
							<div className='more-image'>
                                <img src={graphic} alt=""/>
                                <p>Hello</p>
                                </div>
						</div>
						<div className='more-item'>
							<div className='more-image'>
                                <img src={graphic} alt=""/>
                                <p>Hello</p>
                                </div>
						</div>
						<div className='more-item'>
							<div className='more-image'>
                                <img src={graphic} alt=""/>
                                <p>Hello</p>
                                </div>
						</div>
					</div>
	
            	</div>
                
			</section>
		)
	}
}
