import React, { useState } from 'react'
import './Header.css'

const Header = (props) => {
	const [modal, setModal] = useState(false)

	const toggleModal = () => {
		setModal(!modal)
	}

	return (
		<>
			<div className='annoucementBar'>
				<div className='contact'>
					<p>📍 Spain, Working remote</p>
					<a href='mailto:davidhormigafonso@gmail.com'>✉️ davidhormigafonso@gmail.com</a>
				</div>
				<div className='social'>
					<a href='https://twitter.com/davidhafo' target='_blank' rel='noreferrer'>
						<img
							alt='twitter logo'
							style={{ width: 18, height: 16 }}
							src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png'
						/>
					</a>
				</div>
			</div>
			<div className='header'>
				<div>
					<p className='title'>David Hormiga Afonso</p>
				</div>
				<button
					className={modal ? 'burger-open burger' : 'burger-close burger'}
					onClick={toggleModal}>
					<div></div>
					<div></div>
					<div></div>
				</button>
				<div className='menu'>
					<a>Home</a>
					<a>Blog</a>
					<a>Portfolio</a>
					<a className='contact'>Contact me</a>
				</div>
			</div>
			<div className={modal ? 'showFixed fixedBackground' : 'hideFixed fixedBackground'}>
				<div className='mobileMenu'>
					<a>Home</a>
					<a>Blog</a>
					<a>Portfolio</a>
					<a className='contact'>Contact me</a>
				</div>
			</div>
		</>
	)
}

export default Header
