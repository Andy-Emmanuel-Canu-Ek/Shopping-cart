import React, { ReactElement } from 'react'
import { Product } from 'api/Products/declaration'
import ProductImage from 'components/atoms/Product/ProductImage'
import ProductDescription from 'components/atoms/Product/ProductDescription'

type Props = {
	product: Product
}

const ProductCard = ({ product }: Props): ReactElement => (
	<div key={product.id} className="group relative">
		<ProductImage image_url={product.cover} />
		<ProductDescription {...product} />
	</div>
)

export default ProductCard
