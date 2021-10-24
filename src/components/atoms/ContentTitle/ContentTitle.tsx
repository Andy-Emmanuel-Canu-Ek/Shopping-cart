import React from 'react'

type Props = {
	title: string
}

const ContentTitle = ({ title = '' }) => (
	<h2
		className="
        text-2xl font-extrabold 
        tracking-tight text-gray-900"
	>
		{title}
	</h2>
)

export default ContentTitle
