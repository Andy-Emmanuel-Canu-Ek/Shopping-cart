import React, { ReactElement } from 'react'

type Props = {
	name: string
	cover: string
	price: number
}

const ProductDescription = ({
	name,
	price,
}: Props): ReactElement => (
	<>
		<h3 className="mt-4 text-sm text-gray-700">{name}</h3>
		<p className="mt-1 text-lg font-medium text-gray-900">${price}</p>
	</>
)

export default ProductDescription
