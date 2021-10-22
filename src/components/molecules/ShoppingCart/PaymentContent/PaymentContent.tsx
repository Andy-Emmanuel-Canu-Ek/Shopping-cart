import React, { ReactElement } from 'react'

const PaymentContent = (): ReactElement => {
	return (
		<div
			className="
				border-t border-gray-200
				py-6 px-4 sm:px-6"
		>
			<div
				className="
				flex justify-between 
				text-base font-medium 
				text-gray-900"
			>
				<p>Subtotal</p>
				<p>$262.00</p>
			</div>
			<p className="mt-0.5 text-sm text-gray-500">
				Shipping and taxes calculated at checkout.
			</p>
			<div className="mt-6">
				<a
					href="#"
					className="
						flex justify-center items-center 
						px-6 py-3 border border-transparent 
						rounded-md shadow-sm text-base 
						font-medium text-white 
						bg-indigo-600 hover:bg-indigo-700"
				>
					Checkout
				</a>
			</div>
			<div
				className="
					mt-6 flex justify-center 
					text-sm text-center text-gray-500"
			>
				<p>
					or{' '}
					<button
						type="button"
						className="
							text-indigo-600 font-medium 
							hover:text-indigo-500"
					>
						Continue Shopping<span aria-hidden="true"> &rarr;</span>
					</button>
				</p>
			</div>
		</div>
	)
}

export default PaymentContent
