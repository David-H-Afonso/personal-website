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
		<div className={isBlogPage ? 'blogPostDivHorizontal blogPostDiv' : 'blogPostDiv'}>
			<a className={isBlogPage ? 'blogPostUrlHorizontal blogPostUrl' : 'blogPostUrl'} href={post.url}>
				<img src={post.image ? post.image : defaultImg} alt={post.title} />
				<div className={isBlogPage ? 'blogPostMeta blogPostMetaHorizontal' : 'blogPostMeta'}>
					<p className={isBlogPage ? 'titleHorizontal title ellipsis' : 'title ellipsis'}>{post.title}</p>
					<p className='ellipsis'>{post.excerpt}</p>
					<p className='authorInfo ellipsis'>
						{post.date} - {post.author}
					</p>
					<div style={{ textTransform: 'capitalize', height: 50, overflow: 'hidden' }}>
						{post.categories.map((category, index) => (
							<img className='logo' alt={category} src={categoryImage(category)} key={index} />
						))}
					</div>
				</div>
			</a>
		</div>
	)
}
