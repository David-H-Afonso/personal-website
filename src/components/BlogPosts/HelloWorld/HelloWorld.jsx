import React from 'react'
import Code from '../../elements/Code/Code'
import { Comment, StringCode, SymbolsFuncitons, VariableName } from '../../elements/Code/variable'
import BaseBlog from '../Base/Base'

console.log('Hola mundo!')

const HelloWorld = (props) => {
	return (
		<BaseBlog postInfo={postHelloWorld}>
			<h2>Esto es un ejemplo de cuerpo de un blog!!</h2>
			<p>
				¿Quieres crear tu primer comando por consola y conseguir tu tan esperado <b>hola mundo</b>?!
			</p>
			<p>Haz lo siguiente 👇🏻</p>
			<Code>
				<Comment>That's how you make your first hello world! And show it in the console</Comment>
				<br />
				<VariableName>console</VariableName>.<SymbolsFuncitons>log(</SymbolsFuncitons>
				<StringCode>"Hello World!"</StringCode>
				<SymbolsFuncitons>)</SymbolsFuncitons>
			</Code>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores labore eum esse id harum
				quo officiis nesciunt temporibus iste, deleniti libero tempora magnam? Necessitatibus
				voluptates, blanditiis veritatis vero quae eum? Lorem ipsum dolor sit amet consectetur,
				adipisicing elit. Cumque, eaque corporis saepe amet voluptatum quos dicta vel nostrum culpa,
				sit dolores impedit a, veritatis minima numquam et accusantium? Architecto, tempore?Lorem
				ipsum, dolor sit amet consectetur adipisicing elit. Dolores repudiandae iste quae atque,
				sapiente corporis. Fugiat, pariatur alias cupiditate hic repudiandae officiis, nihil
				excepturi quas, quia sit fugit vitae tempore?
			</p>
		</BaseBlog>
	)
}

export const postHelloWorld = {
	title: 'Hello World',
	excerpt: 'Or how to write your first line of code',
	url: '/blog/hello-world',
	date: '15/12/2021',
	author: 'Rikku ESP',
	image: '',
	categories: ['javascript', 'programación', 'interés'],
}

export default HelloWorld
