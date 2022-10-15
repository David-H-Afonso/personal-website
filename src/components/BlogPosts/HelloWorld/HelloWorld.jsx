import React from 'react'
const HelloWorld = (props) => {
	return (
		<div style={{ marginTop: 140, paddingLeft: 36 }}>
			<p>Este es el Blog de Hello World!!</p>
		</div>
	)
}

export const postHelloWorld = {
	title: 'Hello World',
	excerpt: 'Ejemplo de extracto para Hello World',
	url: '/blog/hello-world',
	date: '15/12/2021',
	author: 'Rikku',
	image: '',
	categories: ['javascript', 'programación', 'interés'],
}

export default HelloWorld
