import React from 'react'
import BaseBlog from '../Base/Base'

console.log('Hola mundo!')

const NpmYarn = (props) => {
	return (
		<BaseBlog postInfo={postNpmYarn}>
			<p>
				If you're a <strong>JavaScript developer</strong>, you've probably heard of
				<a href='https://www.npmjs.com/'>npm</a> and <a href='https://yarnpkg.com/'>yarn</a>. These are both popular
				package managers that help you manage the dependencies of your projects, but they have some key differences that
				you should be aware of. In this post, we're going to understand the differences between this two package
				managers and which one should you use in every scenario.
			</p>
			<h2>What is the main difference?</h2>
			<p>
				When it comes to installing packages, there are <u>two main approaches</u>
				<strong> concurrent </strong> installation and <strong>sequential</strong> installation. But what's the
				difference, and <i>which one is better</i>? Let's take a closer look.
			</p>
			<p>
				Concurrent installation is when multiple packages are installed at the same time. This can be a fast way to get
				all of your dependencies set up, especially if you have a lot of them. The package manager can take advantage of
				parallelism, so it can install multiple packages at once, rather than waiting for one to finish before starting
				the next one. But concurrent installation isn't perfect. Because multiple packages are being installed at the
				same time, it can be harder to predict the order in which they'll be installed. This can make it more difficult
				to ensure that your project is reliable and reproducible.
			</p>
			<p>
				On the other hand, sequential installation is when packages are installed one at a time, in a specific order.
				This can be slower, since it doesn't take advantage of parallelism, but it can also be more reliable. That's
				because the order in which packages are installed is deterministic, so you know exactly what will happen when
				you run your installation script.
			</p>

			<p>
				First off, let's talk about performance. When it comes to installing packages, yarn has a bit of an edge over
				npm. That's because yarn installs packages sequentially, rather than concurrently like npm does. This means that
				yarn can take advantage of cache and avoid making unnecessary network requests for packages that have already
				been installed. As a result, yarn may be faster at installing packages, especially for projects with a large
				number of dependencies.
			</p>
			<p>
				But speed isn't the only thing that sets yarn apart from npm. Yarn also has a deterministic dependency
				resolution algorithm, which means that the order in which packages are installed is always the same. This can be
				a big advantage in terms of reliability and reproducibility, since you can be confident that your project will
				behave the same way no matter where or how you install it.
			</p>
			<p>
				Security is another area where yarn shines. It has features like workspaces and automatic detection of malicious
				packages that npm doesn't have. This can give you some extra peace of mind when working on projects with
				sensitive dependencies.
			</p>

			<p>
				Of course, npm is still a great package manager, and it has a lot going for it. It's widely used, so it's often
				easier to find help or resources related to npm. And with a larger ecosystem of packages, npm may be more
				compatible with certain libraries or tools.
			</p>
			<p>
				So which one should you use? Ultimately, the choice between npm and yarn comes down to your personal preference
				and the needs of your project. Both are powerful tools, and either one can help you manage your dependencies
				effectively. So, it's up to you to decide which one suits you the best.
			</p>
			<p>
				So, which one is better: concurrent or sequential installation? It really depends on your project and the
				package manager you're using. Concurrent installation can be faster, but sequential installation can be more
				reliable. Ultimately, it's up to you to decide which approach is best for your needs.
			</p>
		</BaseBlog>
	)
}

export const postNpmYarn = {
	title: 'NPM vs Yarn',
	excerpt: 'Which package manager should you use?',
	url: '/blog/npm-yarn',
	date: '01/01/2023',
	author: 'David Hormiga Afonso',
	image: require('./01-yarn-npm.png'),
	categories: ['javascript', 'programación', 'interés'],
}

export default NpmYarn
