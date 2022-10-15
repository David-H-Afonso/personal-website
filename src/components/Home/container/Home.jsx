import React from 'react'
import './Home.css'

import homeBackground from '../../../assets/homeBackground.jpg'

const Home = (props) => {
	return (
		<>
			<div className='wrapper'>
				<span></span>
				<img src={homeBackground} alt='homeBackground' />
				<div>
					<div>
						<h6>Software Developer</h6>
						<h1>
							Software is dedication, passion <br /> and never stop learning
						</h1>
						<div>
							<cite>"It is not enough for code to just work"</cite>
							<p>Robert C. Martin, Clean Code</p>
						</div>
						<a></a>
					</div>
				</div>
			</div>
		</>
	)
}

export default Home
