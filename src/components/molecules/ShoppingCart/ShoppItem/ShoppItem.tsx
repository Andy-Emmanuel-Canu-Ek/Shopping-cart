import React, { ReactElement } from 'react'
import { Product } from 'api/Products/declaration'

type Props = {
	product: Product
}

const ShoppItem = ({ product }: Props): ReactElement => {
	return (
		<li className="py-6 flex">
			<div
				className="
					flex-shrink-0 w-24 h-24 
					border border-gray-200 
					rounded-md overflow-hidden"
			>
				<img
					src={product.cover}
					alt=""
					className="w-full h-full object-center object-cover"
				/>
			</div>

			<div className="ml-4 flex-1 flex flex-col">
				<div>
					<div
						className="
							flex justify-between 
							text-base font-medium 
							text-gray-900"
					>
						<h3>
							<a href={product.cover}>{product.name}</a>
						</h3>
						<p className="ml-4">{product.price}</p>
					</div>
				</div>
				<div
					className="
					    flex-1 flex items-end 
						justify-between text-sm"
				>
					<p className="text-gray-500">Qty {product.quantity}</p>

					<div className="flex">
						<button
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
		</li>
	)
}

export default ShoppItem
