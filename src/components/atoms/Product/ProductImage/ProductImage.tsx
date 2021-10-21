import React, { ReactElement } from 'react'
import Image from 'next/image'

type Props = {
	image_url: string
}

const ProductImage = ({ image_url }: Props): ReactElement => (
	<div
		className="
			w-full min-h-80 bg-gray-200 aspect-w-1 
			aspect-h-1 rounded-md overflow-hidden 
			group-hover:opacity-75 lg:h-80 lg:aspect-none"
	>
		<Image
			src={image_url}
			className="
				w-full h-full object-center 
				object-cover lg:w-full lg:h-full"
		/>
	</div>
)

export default ProductImage
