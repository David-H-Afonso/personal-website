import NpmYarn, { postNpmYarn } from './components/BlogPosts/01-yarn-npm/01-yarn-npm'
import ArrayJS, { postArrayJS } from './components/BlogPosts/02-array-js/02-array-js'
import AsyncAwait, { postAsyncAwait } from './components/BlogPosts/03-async-await/03-async-await'

export const RouterBlogPosts = [
	{
		path: postNpmYarn.url,
		element: <NpmYarn />,
	},
	{
		path: postArrayJS.url,
		element: <ArrayJS />,
	},
	{
		path: postAsyncAwait.url,
		element: <AsyncAwait />,
	},
]
