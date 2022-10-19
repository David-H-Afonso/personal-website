import React from 'react'
import './Code.css'

const Code = (props) => {
	const { children } = props
	return (
		<code className='codeComponent' id='codeComponent'>
			{children}
		</code>
	)
}

export default Code
