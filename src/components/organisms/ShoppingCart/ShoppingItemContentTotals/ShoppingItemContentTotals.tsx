import { Product } from 'api/Products/declaration'
import React, { ReactElement } from 'react'
import ShoppingItemTotal from 'components/molecules/ShoppingCart/ShoppingItemTotal'

type Props = {
	products: Product[]
}

const ShoppingItemContentTotals = ({ products }: Props): ReactElement => (
	<div
		className="
				max-w-2xl mx-auto 
				px-4 sm:py-24 sm:px-6 
				lg:max-w-7xl lg:px-8"
	>
		<div className="flow-root h-2/5">
			<ul role="list" className="-my-6 divide-y divide-gray-200">
				{products?.map((product) => (
					<li key={product.id} className="py-6 flex">
						<ShoppingItemTotal product={product} />
					</li>
				))}
			</ul>
		</div>
	</div>
)

export default ShoppingItemContentTotals
