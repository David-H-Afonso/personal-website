import React from 'react'
import './Portfolio.css'
import Projects from '../Projects/Projects'
import Project from '../Projects/Project'

const Portfolio = () => {
	const sortedProjects = Projects.sort((a, b) => {
		return a.id - b.id
	})

	return (
		<div className='portfolioWrapper'>
			<h1 style={{ textAlign: 'center' }}>Check out some of my creations</h1>
			<div className='projectsContainer'>
				{sortedProjects.reverse().map((project) => (
					<Project key={project.id} project={project} />
				))}
			</div>
		</div>
	)
}

export default Portfolio
