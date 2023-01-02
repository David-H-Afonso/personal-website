import React from 'react'
import BaseBlog from '../Base/Base'

console.log('Hola mundo!')

const NpmYarn = (props) => {
	const customTitle =
		'Discover the advantages of NPM and Yarn: A Guide to Choosing the Perfect Package Manager for Your JavaScript Project'

	return (
		<BaseBlog postInfo={postNpmYarn} customTitle={customTitle}>
			<p>
				If you're a <strong>JavaScript developer</strong>, you've probably heard of
				<a href='https://www.npmjs.com/'>npm</a> and <a href='https://yarnpkg.com/'>yarn</a>. These are both popular
				package managers that help you manage the dependencies of your projects, but they have some key differences that
				you should be aware of. In this post, we're going to understand the differences between this two package
				managers and which one should you use in every scenario.
			</p>
			<h2>What is the main difference?</h2>
			<p>
				When it comes to installing packages, there are <u>two main approaches</u>:<strong> Concurrent </strong>{' '}
				installation and <strong>sequential</strong> installation. But what's the difference, and{' '}
				<i>which one is better</i>? Let's take a closer look.
			</p>
			<p>
				<strong>Concurrent</strong> installation is when <u>multiple packages</u> are installed at the <u>same time</u>.
				This can be a <b>fast way</b> to get all of your dependencies set up, <i>especially</i> if you have a lot of
				them. This happens when the package manager can take advantage of <i>parallelism</i>, so it can install multiple
				packages at once, rather than waiting for one to finish before starting the next one. But{' '}
				<strong>concurrent</strong> installation <u>isn't perfect</u>. Because multiple packages are being installed at
				the same time, it can be <u>harder</u> to predict the order in which they'll be installed. This can make it more
				difficult <strong>to ensure that your project is reliable and reproducible</strong>.
			</p>
			<p>
				On the other hand, <strong>sequential</strong> installation is when multiple packages are installed{' '}
				<strong>one at a time</strong>, in a specific order. This can be <u>slower</u>, since it doesn't take advantage
				of <i>parallelism</i>, but it can also be more <strong>reliable</strong>. That's because the order in which
				packages are installed is deterministic, so you know exactly what will happen when you run your installation
				script.
			</p>
			<p>
				To sum up, when it comes to performance installing packages, <strong>yarn has a bit of an edge over npm</strong>
				. That's because yarn installs packages sequentially, rather than concurrently. This means that yarn can take
				advantage of <strong>cache</strong> and avoid making unnecessary network requests for packages that have already
				been installed. As a result, yarn is{' '}
				<b>faster at installing packages in smaller projects or adding new dependencies in a reliable way</b>, where npm
				is better for <b>projects with a large number of dependencies or faster installations</b>.
			</p>
			<h2>Security</h2>
			<p>
				Security is another area where yarn shines. It has features like <strong>workspaces</strong> and automatic
				detection of malicious packages that npm doesn't have. This can give you some extra peace of mind when working
				on projects with sensitive dependencies. It also has a <strong>deterministic</strong> dependency resolution
				algorithm, which means that the order in which packages are installed is always the same. This can be a big
				advantage in terms of reliability and reproducibility, since you can be confident that your project will behave
				the same way no matter where or how you install it.
			</p>
			<p>
				Of course, npm is still a <b>great package manager</b>, and it has a lot going for it. It's widely used, so it's
				often easier to find help or resources related to npm. And with a larger <b>ecosystem</b> of packages, npm may
				be more compatible with certain libraries or tools.
			</p>
			<h2>Conclusion</h2>
			<p>
				So which one should you use? Ultimately, the choice between npm and yarn comes down to your{' '}
				<strong>personal preference</strong> and the needs of your project. Both are powerful tools, and either one can
				help you manage your dependencies effectively. So, it's up to you to decide which one suits you the best.
			</p>
		</BaseBlog>
	)
}

export const postNpmYarn = {
	title: 'NPM vs Yarn',
	excerpt: 'Which Package Manager is right for your JavaScript project?',
	url: '/blog/npm-yarn',
	date: '01/01/2023',
	author: 'David Hormiga Afonso',
	image: require('./01-yarn-npm.png'),
	categories: ['javascript', 'programación', 'interés'],
}

export default NpmYarn
