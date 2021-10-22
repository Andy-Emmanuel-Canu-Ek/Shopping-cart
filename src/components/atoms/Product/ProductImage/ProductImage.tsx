import React, { ReactElement } from 'react'

type Props = {
	image_url: string
}

const ProductImage = ({ image_url }: Props): ReactElement => (
	<div className="
			w-full min-h-80 bg-gray-200 
			aspect-w-1 aspect-h-1 rounded-md 
			overflow-hidden group-hover:opacity-75 
			lg:h-80 lg:aspect-none">
		
		<img
			src={image_url}
			alt=""
			className="
				w-full h-full object-center 
				object-cover lg:w-full lg:h-full"
		/>

	</div>
)

export default ProductImage
