import React, { ReactElement } from 'react'
import { Product } from 'api/Products/declaration'
import ShoppingItemImage 
	from 'components/atoms/ShoppingCart/ShoppingItemImage'
import ShoppingItemTotalDescription 
	from 'components/atoms/ShoppingCart/ShoppingItemTotalDescription'

type Props = {
	product: Product
}

const ShoppingItemTotal = ({ product }: Props): ReactElement => (
	<>
		<ShoppingItemImage image_url={product.cover} />
		<ShoppingItemTotalDescription product={product} />
	</>
)

export default ShoppingItemTotal
