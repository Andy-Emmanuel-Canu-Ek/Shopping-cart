import React, { ReactElement } from 'react'
import { Product } from 'api/Products/declaration'
import ShoppingItemImage from 'components/atoms/ShoppingItemImage'

type Props = {
	product: Product
}

const ShoppingItemTotal = ({ product }: Props): ReactElement => (
	<>
		<ShoppingItemImage image_url={product.cover} />
	</>
)

export default ShoppingItemTotal
