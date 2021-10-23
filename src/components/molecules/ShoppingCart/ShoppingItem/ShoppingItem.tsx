import React, { ReactElement } from 'react'
import { Product } from 'api/Products/declaration'
import ShoppingItemImage from 'components/atoms/ShoppingItemImage'
import ShoppingItemDescription from 'components/atoms/ShoppingItemDescription'

type Props = {
	product: Product
	addProduct: (product: Product, quantity: number) => void
	lessProduct: (product: Product, quantity: number) => void
	removeProduct: (product: Product) => void
}

const ShoppingItem = ({
	product,
	addProduct,
	lessProduct,
	removeProduct,
}: Props): ReactElement => (
	<>
		<ShoppingItemImage image_url={product.cover} />
		<ShoppingItemDescription
			product={product}
			addProduct={addProduct}
			lessProduct={lessProduct}
			removeProduct={removeProduct}
		/>
	</>
)

export default ShoppingItem
