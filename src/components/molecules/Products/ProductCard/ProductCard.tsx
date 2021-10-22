import React, { ReactElement } from 'react'
import { Product } from 'api/Products/declaration'
import ProductImage from 'components/atoms/Product/ProductImage'
import ProductDescription from 'components/atoms/Product/ProductDescription'
import AddCartButton from 'components/atoms/AddCartButton'

type Props = {
	product: Product
}

const ProductCard = ({ product }: Props): ReactElement => (
	<a className="group">
		<ProductImage image_url={product.cover} />
		<ProductDescription {...product} />
		<AddCartButton />
	</a>
)

export default ProductCard
