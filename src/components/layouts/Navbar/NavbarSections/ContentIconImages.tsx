import React, { ReactElement } from 'react'

const ContentIconImages = (): ReactElement => (
	<div className="flex-shrink-0 flex items-center">
		<img
			className="block lg:hidden h-8 w-auto"
			src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
			alt="Workflow"
		/>
		<img
			className="hidden lg:block h-8 w-auto"
			src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
			alt="Workflow"
		/>
	</div>
)

export default ContentIconImages
