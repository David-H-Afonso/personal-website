import { createBrowserRouter } from 'react-router-dom'

import Home from './components/Home/container/Home'
import Blog from './components/Blog/container/Blog'

// import VariablesJS, { postVariablesJS } from './components/BlogPosts/VariablesJS/VariablesJS'
// import HelloWorld, { postHelloWorld } from './components/BlogPosts/HelloWorld/HelloWorld'
import NpmYarn, { postNpmYarn } from './components/BlogPosts/01-yarn-npm/01-yarn-npm'

export default createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/blog',
		element: <Blog />,
	},
	// {
	// 	path: postVariablesJS.url,
	// 	element: <VariablesJS />,
	// },
	// {
	// 	path: postHelloWorld.url,
	// 	element: <HelloWorld />,
	// },
	{
		path: postNpmYarn.url,
		element: <NpmYarn />,
	},
])
