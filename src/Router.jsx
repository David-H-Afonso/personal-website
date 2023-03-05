import { createBrowserRouter } from 'react-router-dom'

import Home from './components/Home/container/Home'
import Blog from './components/Blog/container/Blog'
import Portfolio from './components/Portfolio/Portfolio'

import { RouterBlogPosts } from './RouterBlogPosts'
import { RouterProjects } from './RouterProjects'

const Router = [
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/blog',
		element: <Blog />,
	},
	{
		path: '/portfolio',
		element: <Portfolio />,
	},
]

RouterBlogPosts.forEach((BlogPost) => {
	Router.push(BlogPost)
})

RouterProjects.forEach((Project) => {
	Router.push(Project)
})

export default createBrowserRouter(Router)
