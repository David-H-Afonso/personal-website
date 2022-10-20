import React from 'react'
import BaseBlog from '../Base/Base'
import Code from '../../elements/Code/Code'
import {
	Variable,
	VariableName,
	VariableNameConstant,
	Comment,
	StringCode,
	SymbolsFuncitons,
	CssNumber,
} from '../../elements/Code/variable'

const VariablesJS = (props) => {
	return (
		<BaseBlog postInfo={postVariablesJS}>
			<h2>Nunca te has parado a pensar que es una variable en JavaScript?</h2>
			<p>Si, todos sabemos que es una cajita en la que podemos poner un número pero...</p>
			<h3>¿Qué más?</h3>
			<Code>
				<Comment>Declarando una variable con var, let y const</Comment> <br />
				<Variable>var</Variable> <VariableName>foo</VariableName> = 1 <br />
				<Variable>let</Variable> <VariableName>foo</VariableName> = 1 <br />
				<Variable>const</Variable> <VariableNameConstant>foo</VariableNameConstant> = 1 <br />
				<br />
				<Comment>Probando el nuevo componente de código poniendo css aquí</Comment>
				<br />
				<SymbolsFuncitons>.codeComponent</SymbolsFuncitons>
				<SymbolsFuncitons> &#123; </SymbolsFuncitons>
				<br />
				<VariableName>&nbsp;&nbsp;&nbsp;&nbsp;font-family</VariableName>:
				<StringCode>'Consolas'</StringCode>; <br />
				<VariableName>&nbsp;&nbsp;&nbsp;&nbsp;letter-spacing</VariableName>:
				<CssNumber>&nbsp;0.5px</CssNumber>; <br />
				<SymbolsFuncitons>&#125;</SymbolsFuncitons>
			</Code>
		</BaseBlog>
	)
}

export const postVariablesJS = {
	title: 'Variables in JavaScript',
	excerpt: 'Or how to store your data in JavaScript',
	url: '/blog/variables-in-javascript',
	date: '15/10/2022',
	author: 'David Hormiga Afonso',
	image: '',
	categories: ['javascript'],
}

export default VariablesJS
