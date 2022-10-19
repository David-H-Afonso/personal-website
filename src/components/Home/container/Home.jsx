import React from 'react'
import './Home.css'

import BlogPosts from '../../BlogPosts/index'
import { Post } from '../../elements'

import homeBackground from '../../../assets/homeBackground.jpg'

const Home = (props) => {
	return (
		<>
			<div className='wrapperHome'>
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
					</div>
				</div>
			</div>
			<div>
				<div className='lastBlogMeta'>
					<h2>Lastest Blog Posts</h2>
					<p>Discover a lot of interesting topic here!</p>
				</div>
				<div className='posts'>
					{BlogPosts.slice(-3).map((post) => (
						<Post post={post} defaultImg={homeBackground} />
					))}
				</div>
			</div>
		</>
	)
}

export default Home
