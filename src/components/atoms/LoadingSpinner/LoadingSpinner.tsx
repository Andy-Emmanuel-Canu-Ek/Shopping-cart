import React, { ReactElement } from 'react'

const LoadingSpinner = (): ReactElement => (
	<div className="flex justify-center items-center text-center">
		<div
			className="
            animate-spin rounded-full 
            h-32 w-32 border-b-2 border-gray-900"
		/>
	</div>
)

export default LoadingSpinner
