import React from 'react'
const VariablesJS = (props) => {
	return (
		<div style={{ marginTop: 140, paddingLeft: 36 }}>
			<p>Este es el Blog de Variables en JS!!</p>
		</div>
	)
}

export const postVariablesJS = {
	title: 'Variables en JavaScript',
	excerpt: 'Ejemplo de extracto',
	url: '/blog/variables-in-javascript',
	date: '15/10/2022',
	author: 'David',
	image: '',
	categories: ['javascript'],
}

export default VariablesJS
