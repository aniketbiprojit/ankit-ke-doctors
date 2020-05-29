import React, { Component } from 'react'
import graphic from '../../assets/download.svg'

export default class More extends Component {
	render() {
		return (
			<section id='more'>
				<div className='outer'>
					<div className='inner flex'>
						<div className='flex'>
							<div className='more-item'>
								<div className='more-image'>
									<img src={graphic} alt='' />
									<p>Hello</p>
								</div>
								<div className='more-desc'>
									<p>
										Jab bhi kabhi <br />
										Meri nazar
									</p>
								</div>
							</div>
							<div className='more-item'>
								<div className='more-image'>
									<img src={graphic} alt='' />
									<p>Hello</p>
								</div>
								<div className='more-desc'>
									<p>
										Papa mujhe
										<br />
										Dhoondhe Tujhe
									</p>
								</div>
							</div>
						</div>
						<div className='flex'>
							<div className='more-item'>
								<div className='more-image'>
									<img src={graphic} alt='' />
									<p>Hello</p>
								</div>
								<div className='more-desc'>
									<p>Yun zor se <br/> Ain na maa</p>
								</div>
							</div>
							<div className='more-item'>
								<div className='more-image'>
									<img src={graphic} alt='' />
									<p>Hello</p>
								</div>
								<div className='more-desc'>
									<p>
										Jhula Jhulate hai
										<br />
										Yun na rula
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className='inner flex'>
						<div className='flex'>
							<div className='more-item'>
								<div className='more-image'>
									<img src={graphic} alt='' />
									<p>Hello</p>
								</div>
								<div className='more-desc'>Jab bhi kabhi</div>
							</div>
							<div className='more-item'>
								<div className='more-image'>
									<img src={graphic} alt='' />
									<p>Hello</p>
								</div>
								<div className='more-desc'>Papa mujhe</div>
							</div>
						</div>
						<div className='flex'>
							<div className='more-item'>
								<div className='more-image'>
									<img src={graphic} alt='' />
									<p>Hello</p>
								</div>
								<div className='more-desc'>Yun zor se</div>
							</div>
							<div className='more-item'>
								<div className='more-image'>
									<img src={graphic} alt='' />
									<p>Hello</p>
								</div>
								<div className='more-desc'>
									Jhula Jhulate hai
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}
