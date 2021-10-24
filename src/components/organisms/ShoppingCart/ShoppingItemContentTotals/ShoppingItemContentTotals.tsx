import { Product } from 'api/Products/declaration'
import React, { ReactElement } from 'react'
import ShoppingItemTotal from 'components/molecules/ShoppingCart/ShoppingItemTotal'

type Props = {
	products: Product[]
}

const ShoppingItemContentTotals = ({ products }: Props): ReactElement => (
	<div
		className="
			mt-10
			mb-10
			sm:px-24 
			lg:px-24"
	>
		<ul role="list" className="-my-6 divide-y divide-gray-200">
			{products?.map((product) => (
				<li key={product.id} className="py-6 flex">
					<ShoppingItemTotal product={product} />
				</li>
			))}
		</ul>
	</div>
)

export default ShoppingItemContentTotals
