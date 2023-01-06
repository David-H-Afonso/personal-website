import React from 'react'
import BlogPosts from '../../BlogPosts/index'
import homeBackground from '../../../assets/homeBackground.jpg'
import { Post } from '../../elements/index'

import './Blog.css'

const Blog = (props) => {
	return (
		<div className='blogPostWrapper'>
			{BlogPosts.reverse().map((post) => (
				<Post post={post} defaultImg={homeBackground} isBlogPage key={post.title} />
			))}
		</div>
	)
}

export default Blog
