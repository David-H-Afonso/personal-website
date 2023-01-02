import React from 'react'
import './Post.css'

export const Post = (props) => {
	const { post, defaultImg } = props

	return (
		<div className='blogPostDiv'>
			<a className='blogPostUrl' href={post.url}>
				<img src={post.image ? post.image : defaultImg} alt={post.title} />
				<div className='blogPostMeta'>
					<p className='title'>{post.title}</p>
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
	)
}
