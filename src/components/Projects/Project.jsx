import React from 'react'
import './Project.css'

const Project = (props) => {
	const { project } = props

	const navigateToDeploy = () => {
		window.open(project.deploy, '_blank')
	}

	return (
		<div className='project' onClick={navigateToDeploy}>
			<img src={project.image} alt={project.title} className='projectImage' />
			<h1 className='projectTitle'>{project.title}</h1>
			<p className='projectDescription'>{project.description}</p>
			<a target='_blank' rel='noreferrer' className='projectLink' href={project.github}>
				<p>See Github Repository</p>
				<img src={require('../../assets/github.png')} alt='github' style={{ width: 20, marginLeft: 5 }} />
			</a>
		</div>
	)
}

export default Project
