import React, { useState } from 'react'
import './Header.css'

const Header = (props) => {
	const [modal, setModal] = useState(false)
	const [top, setTop] = useState('auto')

	const toggleModal = () => {
		setModal(!modal)
	}

	return (
		<>
			<div style={{ position: 'fixed', width: '100%', zIndex: 9999, top: 0 }}>
				<div className='annoucementBar'>
					<div className='contact'>
						<p>📍 Spain, Working remote</p>
						<a href='mailto:davidhormigafonso@gmail.com'>✉️ davidhormigafonso@gmail.com</a>
					</div>
					<div className='social' style={{ display: 'flex', alignItems: 'center', marginRight: 10 }}>
						<a href='https://twitter.com/davidhafo' target='_blank' rel='noreferrer'>
							<img
								alt='twitter logo'
								style={{ width: 18, height: 16 }}
								src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png'
							/>
						</a>
					</div>
				</div>
				<div className='header' style={{ top: top }}>
					<div>
						<a href='/' className='titleHeader'>
							David Hormiga Afonso
						</a>
					</div>
					<button className={modal ? 'burger-open burger' : 'burger-close burger'} onClick={toggleModal}>
						<div></div>
						<div></div>
						<div></div>
					</button>
					<div className='menu'>
						<a href='/'>Home</a>
						<a href='/blog'>Blog</a>
						<a href='/portfolio'>Portfolio</a>
						<a href='mailto:davidhormigafonso@gmail.com' className='contact' style={{ textDecoration: 'none' }}>
							Contact me
						</a>
					</div>
				</div>
			</div>
			<div className={modal ? 'showFixed fixedBackground' : 'hideFixed fixedBackground'}>
				<div className='mobileMenu'>
					<a href='/'>Home</a>
					<a href='/blog'>Blog</a>
					{/* <a>Portfolio</a> */}
					<a href='mailto:davidhormigafonso@gmail.com' className='contact'>
						Contact me
					</a>
				</div>
			</div>
		</>
	)
}

export default Header
