/* eslint-disable react/jsx-no-comment-textnodes */
export const Variable = ({ children }) => {
	return <span className='variable'>{children}</span>
}

export const VariableName = ({ children }) => {
	return <span className='variableName'>{children}</span>
}

export const VariableNameConstant = ({ children }) => {
	return <span className='variableNameConstant'>{children}</span>
}

export const Comment = ({ children }) => {
	return <span className='comment'>// {children}</span>
}

export const SymbolsFuncitons = ({ children }) => {
	return <span className='symbolsFuncitons'>{children}</span>
}

export const StringCode = ({ children }) => {
	return <span className='stringCode'>{children}</span>
}

export const CssNumber = ({ children }) => {
	return <span className='cssNumber'>{children}</span>
}
