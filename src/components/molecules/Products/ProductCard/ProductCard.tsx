import React, { ReactElement, useState } from 'react'
import { Product } from 'api/Products/declaration'
import ProductImage from 'components/atoms/Product/ProductImage'
import ProductDescription from 'components/atoms/Product/ProductDescription'
import AddCartButton from 'components/atoms/AddCartButton'
import CounterInput from 'components/atoms/CounterInput'

type Props = {
	product: Product
}

const ProductCard = ({ product }: Props): ReactElement => {
	const [counter, setCounter] = useState(0)

	return (
		<a className="group">
			<ProductImage image_url={product.cover} />
			<ProductDescription {...product} />
			<CounterInput value={counter} setCounter={setCounter} />
			<AddCartButton />
		</a>
	)
}

export default ProductCard
