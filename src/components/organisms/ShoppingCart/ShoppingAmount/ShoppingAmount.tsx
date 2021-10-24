import React, { ReactElement, useEffect, useState } from 'react'
import { ProductLocalStorage } from 'shared/types/local_storage'
import { formatMoney } from 'shared/utils/money'
import Router from 'next/router'
import Swal from 'sweetalert2'
import routes from 'shared/constants/routes'

type Props = {
	productLocalStorage: ProductLocalStorage
}

const ShoppingAmount = ({ productLocalStorage }: Props): ReactElement => {
	const [total, setTotal] = useState(0)
	const { productsStorage, clearProductsStorage } = productLocalStorage

	useEffect(() => {
		getTotalProducts()
	}, [productsStorage])

	const getTotalProducts = () => {
		const prices: number[] = productsStorage?.map(
			(product) => product.price * product.quantity,
		) || [0]

		const sumPrices = prices.reduce(
			(value, currentValue) => currentValue + value,
			0,
		)

		setTotal(sumPrices)
	}

	const onPayment = () =>
		Swal.fire({
			title:
				'¿Usted quiere realizar el pago de los productos agregados al carrito?',
			showDenyButton: true,
			confirmButtonText: 'Sí',
			denyButtonText: 'No, quiero seguir agregando productos',
			cancelButtonText: 'Cancelar',
		}).then((result) => {
			if (result.isConfirmed) {
				clearProductsStorage()
				Swal.fire(
					'Compra realizada',
					'Su compra se realizo correctamente',
					'success',
				)
				goToShopping()
			}
		})

	const goToShopping = () => Router.push(routes.products)

	return (
		<div
			className="
            max-w-2xl mx-auto 
            px-4 sm:py-24 sm:px-6 
            lg:max-w-7xl lg:px-8"
		>
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
					<p>Total</p>
					<p>{formatMoney(total)}</p>
				</div>
				<p className="mt-0.5 text-sm text-gray-500">
					Costo total de los productos agregados al carrito.
				</p>
				<div className="mt-6">
					<button
						onClick={onPayment}
						className="
                   				mt-6 w-full bg-indigo-600 
                   				border border-transparent 
                   				rounded-md py-3 px-8 flex 
                   				items-center justify-center 
                   				text-base font-medium text-white 
                   				hover:bg-indigo-700 focus:outline-none 
                   				focus:ring-2 focus:ring-offset-2 
                   				focus:ring-indigo-500"
					>
						Pagar
					</button>
				</div>
				<div
					className="
							mt-6 flex justify-center 
							text-sm text-center text-gray-500"
				>
					<p>
						or{' '}
						<button
							onClick={goToShopping}
							type="button"
							className="
									text-indigo-600 
									font-medium hover:text-indigo-500"
						>
							Continuar comprando
							<span aria-hidden="true"> &rarr;</span>
						</button>
					</p>
				</div>
			</div>
		</div>
	)
}

export default ShoppingAmount
