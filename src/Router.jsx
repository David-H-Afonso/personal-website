import { createBrowserRouter } from 'react-router-dom'

import Home from './components/Home/container/Home'
import Blog from './components/Blog/container/Blog'

import VariablesJS from './components/BlogPosts/VariablesJS/VariablesJS'
import HelloWorld from './components/BlogPosts/HelloWorld/HelloWorld'

export default createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/blog',
		element: <Blog />,
	},
	{
		path: '/blog/variables-in-javascript',
		element: <VariablesJS />,
	},
	{
		path: '/blog/hello-world',
		element: <HelloWorld />,
	},
])
