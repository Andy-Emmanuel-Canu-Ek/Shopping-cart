import React, { ReactElement } from 'react'

type Props = {
	image_url: string
}

const ShoppingItemImage = ({ image_url }: Props): ReactElement => (
	<a href={image_url}>
		<div
			className="
            flex-shrink-0 w-24 h-24 border
            border-gray-200 rounded-md overflow-hidden
            "
		>
			<img
				src={image_url}
				className="w-full h-full object-center object-cover"
			/>
		</div>
	</a>
)

export default ShoppingItemImage
