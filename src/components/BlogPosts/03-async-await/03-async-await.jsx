import React from 'react'
import BaseBlog from '../Base/Base'

const AsyncAwait = () => {
	const customTitle = "Master JavaScript Promises:  A Beginner's Guide to Using async/await in JavaScript"

	return (
		<BaseBlog postInfo={postAsyncAwait} customTitle={customTitle}>
			<p>
				I'm guessing that, at this point, you've probably heard about <strong>promises and async/await</strong> in{' '}
				<strong>JavaScript</strong>. If you have not, don't worry – they're not as complicated as they might seem at
				first. In fact, they're two of the most powerful tools you have at your disposal for managing{' '}
				<strong>asynchronous</strong> operations in your code.
			</p>
			<p>
				So, what exactly are these exactly? Let's start with <strong>promises</strong>. Essentially, a promise is an{' '}
				<u>object</u> that represents an <strong>asynchronous</strong> operation. It's a placeholder for a value that{' '}
				<i>may or may not</i> be available yet. A promise can either be <strong>resolved</strong> (meaning it succeeded)
				or <strong>rejected</strong>
				(meaning it failed).
			</p>
			<p>
				Before seeing an example, let explain what "<strong></strong>" means, because it's <u>key</u> to understand
				everything that happens next. <strong>Asynchronous</strong> means the ability to perform tasks{' '}
				<b>concurrently</b>, rather than sequentially. This is opposed to synchronous, which means that{' '}
				<u>each task must be completed before the next one can start</u>. Asynchronous programming is useful for tasks
				that may take a long time to complete, as it allows the program to continue running <i>without</i> being blocked
				or slowed down. JavaScript has several features that support <b>asynchronous</b> programming (such as{' '}
				<i>callbacks</i> or <i>promises</i>) that allow developers to write more efficient.
			</p>
			<p>
				So! Now that we understand all the key concepts, let's see an example of a{' '}
				<u>promise that makes an HTTP request to a public API</u>:
			</p>
			<img src={require('./http_request.png')} alt='http_request' />
			<p>
				And now, let's talk about <strong>async/await</strong>. These are two <i>async/await</i> that allow you to write
				<b>async</b> code that looks and feels like <b>sync</b> code. Here's how it works: you use the <u>async</u>{' '}
				<u>keyword</u> to define an <u>async</u> <u>function</u>, and then you use the <u>await</u> <u>keyword</u> to{' '}
				<u>wait for a promise to be resolved</u>. Here's an example of how you can use the above promise with
				async/await:
			</p>
			<img src={require('./async_await.png')} alt='async_await' />
			<p>
				In this example, the <b>logAPIResponse</b> function is an async function that makes an HTTP request using the{' '}
				<b>makeHTTPRequest</b> promise. The <strong>await</strong> keyword waits for the promise to be resolved, and the
				resolved value (<i>the API response</i>) is stored in the response variable. If the promise is rejected (e.g.,
				if there's a network error), the <b>catch</b> block is executed and the error is logged to the console.
			</p>
			<p>
				Now you know all the basics about promises, async and await in JavaScript, the best way to fully understand
				these and all concepts are in the code. You can try do a call to a public API and log out the response, try, for
				example, <a href='https://pokeapi.co/'>PokeAPI</a> and have fun!
			</p>
		</BaseBlog>
	)
}

export const postAsyncAwait = {
	title: 'Promises in JavaScript (Async/Await)',
	excerpt: 'JavaScript 101: A Quick Intro to Promises with Async/Await',
	url: '/blog/async-await',
	date: '05/01/2023',
	author: 'David Hormiga Afonso',
	image: require('./03-async-await.jpg'),
	categories: ['js'],
}

export default AsyncAwait
