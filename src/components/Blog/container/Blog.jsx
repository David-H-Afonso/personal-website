import React, { useState, useEffect } from 'react'
import BlogPosts from '../../BlogPosts/index'
import homeBackground from '../../../assets/homeBackground.jpg'
import { Post } from '../../elements/index'

import './Blog.css'

const Blog = (props) => {
	const [windowSize, setWindowSize] = useState(window.innerWidth)

	useEffect(() => {
		const handleWindowResize = () => {
			setWindowSize(window.innerWidth)
		}

		window.addEventListener('resize', handleWindowResize)

		return () => {
			window.removeEventListener('resize', handleWindowResize)
		}
	})

	const isBlogPage = windowSize > 1000 ? true : false

	return (
		<div className='blogPostWrapper'>
			{BlogPosts.reverse().map((post) => (
				<Post post={post} defaultImg={homeBackground} isBlogPage={isBlogPage} key={post.title} />
			))}
		</div>
	)
}

export default Blog
