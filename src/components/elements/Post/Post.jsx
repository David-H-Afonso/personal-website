import React from 'react'
import './Post.css'
import { logos } from './logos/index'

export const Post = (props) => {
	const { post, defaultImg, isBlogPage } = props

	const categoryImage = (category) => {
		switch (category) {
			case 'js':
				return logos.js
			case 'react':
				return logos.react
			case 'hardware':
				return logos.hardware
			case 'node':
				return logos.node
			default:
				return undefined
		}
	}

	return (
		<div className={isBlogPage ? 'blogPostDivHorizontal' : 'blogPostDivVerical'}>
			<a className={isBlogPage ? 'blogPostUrlHorizontal' : 'blogPostUrlVertical'} href={post.url}>
				<img src={post.image ? post.image : defaultImg} alt={post.title} />
				<div className='blogPostMeta'>
					<p className='title'>{post.title}</p>
					<p>{post.excerpt}</p>
					<p>
						{post.date} - {post.author}
					</p>
					<p style={{ textTransform: 'capitalize' }}>
						{post.categories.map((category, index) => (
							<img className='logo' alt={category} src={categoryImage(category)} key={index} />
						))}
					</p>
				</div>
			</a>
		</div>
	)
}
