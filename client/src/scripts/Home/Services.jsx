import React, { Component } from 'react'

function Cards(props) {
	return (
		<div className='cards'>
			<div className='circle'></div>
			<h1>{props.head}</h1>
			<h2>{props.subhead}</h2>
			<div className='wrapper'>
				{props.data.map((elem) => (
					<div className='data'>
						<p>{elem}</p>
					</div>
				))}
			</div>
		</div>
	)
}

const cards = [
	{
		head: 'service 1',
		subhead: 'You need this to do this:',
		data: [
			'1. Once there was a king',
			'2. He had a beard',
			'3. It was white-ish',
			'4. Meh. Nice. Nice. Nice',
		],
	},
	{
		head: 'service 2',
		subhead: 'You must buy this to do this:',
		data: [
			'3. It was white-ish',
			'1. Once there was a king',
			'2. He had a beard',
			'4. Meh. Nice. Nice. Nice',
		],
	},
	{
		head: 'service 3',
		subhead: 'You can have this to do this:',
		data: [
			'4. Meh. Nice. Nice. Nice',
			'1. Once there was a king',
			'2. He had a beard',
			'3. It was white-ish',
		],
	},
]

export default class Services extends Component {
	render() {
		return (
			<React.Fragment>
				<section className='services'>
					<div className='outer flex'>
						{cards.map((card) => (
							<Cards
								head={card.head}
								subhead={card.subhead}
								data={card.data}
							/>
						))}
					</div>
				</section>
			</React.Fragment>
		)
	}
}
