import React, { ReactElement } from 'react'
import { Product } from 'api/Products/declaration'
import { formatMoney } from 'shared/utils/money'

type Props = {
	product: Product
}

const ShoppingItemTotalDescription = ({
	product,
}: Props): ReactElement => {
	const { price = 0, quantity = 0 } = product

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
						<a>
							{quantity} X {formatMoney(price)}
						</a>
					</h3>
					<div className="ml-4">
						<p className="text-center">Total</p>
						<p>{formatMoney(quantity * price)}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ShoppingItemTotalDescription
