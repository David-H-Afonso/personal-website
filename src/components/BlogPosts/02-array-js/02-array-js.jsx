import React from 'react'
import BaseBlog from '../Base/Base'
import Code from '../../elements/Code/Code'
import { SymbolsFunctions, Comment } from '../../elements/Code/variable'

const ArrayJS = () => {
	const customTitle = "Master JavaScript Arrays: A Beginner's Guide to Storing and Manipulating Data"

	return (
		<BaseBlog postInfo={postArrayJS} customTitle={customTitle}>
			<p>
				Have you ever heard of <strong>arrays</strong> in JavaScript? If not, don't worry – they're not as scary as they
				might sound. In fact, <strong>arrays</strong> are one of the most fundamental data structures in JavaScript, and
				they're super useful for storing and manipulating collections of data.
			</p>
			<p>
				So, what exactly is an <strong>array</strong>? Simply put, it's an ordered collection of values. Each value in
				an <strong>array</strong> is called an element, and each element has a numerical index that you can use to
				access it.
			</p>
			<h3>
				<strong>Arrays</strong> in JavaScript are objects that have the following key features:
			</h3>
			<ul>
				<li>They can store and mix different data types</li>
				<li>They are resizable and can be accessed using nonnegative integers as indexes</li>
				<li>They are zero-indexed, meaning the first element is at index 0, the second is at index 1, and so on</li>
				<li>Array-copy operations in JavaScript create shallow copies</li>
			</ul>
			<p>An example:</p>
			<Code>
				const <SymbolsFunctions>colors</SymbolsFunctions> = ['red', 'green', 'blue'];
			</Code>
			<p>
				In this case, colors is an <strong>array</strong> with three elements: <i>'red', 'green',</i> and <i>'blue'</i>.
				You can access these elements using their indexes, like so (remember that JavaScript <strong>arrays</strong> are
				zero-indexed, their first element index is zero, not one):
			</p>
			<Code>
				console.log(<SymbolsFunctions>colors</SymbolsFunctions>[0]); <Comment>Output: 'red'</Comment> <br />
				console.log(<SymbolsFunctions>colors</SymbolsFunctions>[1]); <Comment>Output: 'green'</Comment> <br />
				console.log(<SymbolsFunctions>colors</SymbolsFunctions>[2]); <Comment>Output: 'blue'</Comment> <br />
			</Code>
			<p>
				<strong>Arrays</strong> are also dynamic, which means you can add or remove elements from them at any time. For
				example:
			</p>
			<Code>
				<Comment>Add an element to the end of the array</Comment> <br />
				<SymbolsFunctions>colors</SymbolsFunctions>.push('yellow'); <br />
				console.log(<SymbolsFunctions>colors</SymbolsFunctions>);{' '}
				<Comment>Output: ['red','green', 'blue', 'yellow']</Comment> <br />
				<br />
				<br />
				<Comment>Remove the last element of the array</Comment> <br />
				<SymbolsFunctions>colors</SymbolsFunctions>.pop(); <br />
				console.log(<SymbolsFunctions>colors</SymbolsFunctions>); <Comment>Output: ['red', 'green', 'blue']</Comment>
			</Code>
			<p>
				As you can see, <strong>arrays</strong> are a really powerful tool for storing and manipulating data in
				JavaScript. Whether you're building a to-do list app, a game, or just about anything else,{' '}
				<strong>arrays</strong> are an essential part of the process. So don't be intimidated – start experimenting with{' '}
				<strong>arrays</strong> and see what you can do!
			</p>
		</BaseBlog>
	)
}

export const postArrayJS = {
	title: 'Array in JavaScript',
	excerpt: 'JavaScript 101: A Quick Intro to Storing and Manipulating Data',
	url: '/blog/array-js',
	date: '03/01/2023',
	author: 'David Hormiga Afonso',
	image: require('./02-array-js.jpg'),
	categories: ['javascript', 'programación', 'interés'],
}

export default ArrayJS
