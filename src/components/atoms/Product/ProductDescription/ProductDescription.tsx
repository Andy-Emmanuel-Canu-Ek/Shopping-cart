import React, { ReactElement } from 'react'

type Props = {
	name: string
	cover: string
	price: number
}

const ProductDescription = ({ cover, name, price }: Props): ReactElement => (
	<div className="mt-4 flex justify-between">
		<div>
			<h3 className="text-sm text-gray-700">
				<a href={cover}>
					<span aria-hidden="true" className="absolute inset-0" />
					{name}
				</a>
			</h3>
		</div>
		<p className="text-sm font-medium text-gray-900">{price}</p>
	</div>
)

export default ProductDescription
