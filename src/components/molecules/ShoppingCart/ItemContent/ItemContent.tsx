import React, { ReactElement } from 'react'
import ShoppItem from '../ShoppItem'
import { Product } from 'api/Products/declaration'
import ContentImage from 'components/atoms/ContentImage'

type Props = {
	products: Product[]
}

const ItemContent = ({ products }: Props): ReactElement => {
	return (
		<ContentImage title="Productos agregados">
			<ul role="list" className="-my-6 divide-y divide-gray-200">
				{products?.map((product) => (
					<ShoppItem product={product} key={product.id} />
				))}
			</ul>
		</ContentImage>
	)
}

export default ItemContent
