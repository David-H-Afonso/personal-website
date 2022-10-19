import React from 'react'
import './Base.css'
import defaultImage from './defaultImage.jpg'

const BaseBlog = (props) => {
	const { postInfo, children } = props

	return (
		<div className='wrapperBaseBlog'>
			<div className='titleBaseBlog'>
				<h1>{postInfo.title}</h1>
			</div>
			{postInfo.excerpt ? <h2 className='quoteBaseBlog'>❝ {postInfo.excerpt} ❞</h2> : null}
			<div className='authorAndDate'>
				<span>{postInfo.author === 'default' ? 'David Hormiga Afonso' : postInfo.author}</span>
				<span>{postInfo.date}</span>
			</div>
			<div className='imageBaseBlog'>
				<img src={postInfo.image ? postInfo.image : defaultImage} alt={postInfo.title} />
			</div>
			<div className='childrenBaseBlog'>{children}</div>
		</div>
	)
}

export default BaseBlog
