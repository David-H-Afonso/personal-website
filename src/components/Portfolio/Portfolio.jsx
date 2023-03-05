import React from 'react'
import './Portfolio.css'
import Projects from '../Projects/Projects'
import Project from '../Projects/Project'

const Portfolio = () => {
	const highlightProjects = []
	const sortedProjects = Projects.sort((a, b) => {
		return a.id - b.id
	}).filter((project) => {
		if (project.highlight) {
			highlightProjects.push(project)
		}
		return !project.highlight
	})

	return (
		<div className='portfolioWrapper'>
			<h1 style={{ textAlign: 'center' }}>Check out some of my creations</h1>
			<div className='projectsContainer'>
				{[...sortedProjects, ...highlightProjects].reverse().map((project) => (
					<Project key={project.id} project={project} />
				))}
			</div>
		</div>
	)
}

export default Portfolio
