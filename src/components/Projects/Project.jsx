import React from 'react'
import './Project.css'

const Project = (props) => {
	const { project } = props

	return (
		<a className='project' target='_blank' rel='noreferrer' href={project.deploy}>
			<img src={project.image} alt={project.title} className='projectImage' />
			<h1 className='projectTitle'>{project.title}</h1>
			<p className='projectDescription'>{project.description}</p>
			<a target='_blank' rel='noreferrer' className='projectLink' href={project.github}>
				<p>See Github Repository</p>
				<img src={require('../../assets/github.png')} alt='github' style={{ width: 20, marginLeft: 5 }} />
			</a>
		</a>
	)
}

export default Project
