import React from 'react'
import BlogPosts from '../../BlogPosts/index'
import homeBackground from '../../../assets/homeBackground.jpg'

import './Blog.css'

const Blog = (props) => {
	return (
		<div className='blogPostWrapper'>
			{BlogPosts.map((post) => (
				<div className='blogPostDiv'>
					<a className='blogPostUrl' href={post.url}>
						<img src={post.image ? post.image : homeBackground} alt={post.title} />
						<div className='blogPostMeta'>
							<h1>{post.title}</h1>
							<p>{post.excerpt}</p>
							<p>
								{post.date} - {post.author}
							</p>
							<p style={{ textTransform: 'capitalize' }}>
								{post.categories.map((category, index) => (
									<span>
										{category} {index < post.categories.length - 1 ? '- ' : ''}
									</span>
								))}
							</p>
						</div>
					</a>
				</div>
			))}
		</div>
	)
}

export default Blog
