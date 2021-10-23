import React, { ReactElement, useState } from 'react'
import { Product } from 'api/Products/declaration'
import ProductImage from 'components/atoms/Product/ProductImage'
import ProductDescription from 'components/atoms/Product/ProductDescription'
import AddCartButton from 'components/atoms/AddCartButton'
import CounterInput from 'components/atoms/CounterInput'
import Swal from 'sweetalert2'
import { minProductValue } from 'shared/constants/constants'

type Props = {
	product: Product
	addProduct: (product: Product, quantity: number) => void
}

const ProductCard = ({ product, addProduct }: Props): ReactElement => {
	const [counter, setCounter] = useState(minProductValue)

	const productText = `${counter} producto${counter > 1 ? 's' : ''}`

	const onAddNewProducts = () =>
		Swal.fire({
			title: `¿Desea agregar estos ${productText} al carrito?`,
			showCancelButton: true,
			confirmButtonText: 'Sí',
			cancelButtonText: 'No',
		}).then((result) => {
			if (result.isConfirmed) {
				addProduct(product, counter)
				Swal.fire(
					'Correcto',
					`Se agrego ${productText} al carrito`,
					'success',
				)
				setCounter(minProductValue)
			}
		})

	return (
		<a className="group">
			<ProductImage image_url={product.cover} />
			<ProductDescription {...product} />
			<CounterInput value={counter} setValue={setCounter} />
			<AddCartButton onAddNewProducts={onAddNewProducts} />
		</a>
	)
}

export default ProductCard
