import React, { ReactElement, useState } from 'react'
import { Product } from 'api/Products/declaration'
import { formatMoney } from 'shared/utils/money'
import CounterInput from '../../CounterInput'
import { minProductValue } from 'shared/constants/constants'

type Props = {
	product: Product
	addProduct: (product: Product, quantity: number) => void
	lessProduct: (product: Product, quantity: number) => void
	removeProduct: (product: Product) => void
}

const ShoppingItemDescription = ({
	product,
	addProduct,
	lessProduct,
	removeProduct,
}: Props): ReactElement => {
	const [itemQuantity, setItemQuantity] = useState(
		product.quantity || minProductValue,
	)

	const { cover = '', name = '', price = 0 } = product

	const onRemove = () => removeProduct(product)

	const onSum = () => addProduct(product, 1)

	const onLess = () => lessProduct(product, 1)

	return (
		<div className="ml-4 flex-1 flex flex-col">
			<div>
				<div
					className="
                        flex justify-between 
                        text-base font-medium 
                        text-gray-900"
				>
					<h3>
						<a href={cover}>{name}</a>
					</h3>
					<p className="ml-4">{formatMoney(price)}</p>
				</div>
			</div>
			<br />
			<div className="flex-2 flex items-end justify-between text-sm">
				<div className="flex">
					<CounterInput
						value={itemQuantity}
						setValue={setItemQuantity}
						onSum={onSum}
						onLess={onLess}
					/>
				</div>

				<div className="flex">
					<button
						onClick={onRemove}
						type="button"
						className="
                            font-medium text-indigo-600 
                            hover:text-indigo-500"
					>
						Remove
					</button>
				</div>
			</div>
		</div>
	)
}

export default ShoppingItemDescription
