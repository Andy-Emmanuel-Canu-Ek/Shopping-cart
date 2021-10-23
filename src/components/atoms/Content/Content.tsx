import React from 'react'

const Content: React.FC = ({ children }) => (
	<div className="flex h-screen">
		<div className="m-auto">{children}</div>
	</div>
)
export default Content
