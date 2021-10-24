import React, { ReactElement, useContext, useLayoutEffect } from 'react'
import { ShoppingCartIcon } from '@heroicons/react/outline'
import UserProfile from './UserProfile'
import Router from 'next/router'
import routes from 'shared/constants/routes'
import { ShoppingCartContext } from 'context/ShoppingCartContext'
import { If, When } from 'react-if'

const NavbarRigthIcons = (): ReactElement => {
	const { shoppingCartState } = useContext(ShoppingCartContext)
	const { products } = shoppingCartState

	const getTotalProducts = (): number => {
		let totalProducts = 0

		if (products?.length > 0) {
			totalProducts = products
				.map(({ quantity }) => quantity)
				.reduce((value, total) => total + value, 0)
		}

		return totalProducts
	}

	const goToShoppingCart = () => Router.push(routes.shopping_cart)

	return (
		<div
			className="
            absolute inset-y-0 
            right-0 flex items-center 
            pr-2 sm:static sm:inset-auto 
            sm:ml-6 sm:pr-0"
		>
			<When condition={products?.length > 0}>
				<span
					className="
						inline-flex items-center 
						justify-center px-2 py-1 
						text-xs font-bold leading-none 
						text-red-100 bg-red-600 
						rounded-full"
				>
					{getTotalProducts()}
				</span>
			</When>

			<button
				type="button"
				className="
                bg-gray-800 p-1 rounded-full 
                text-gray-400 hover:text-white 
                focus:outline-none focus:ring-2 
                focus:ring-offset-2 
                focus:ring-offset-gray-800 focus:ring-white"
			>
				<ShoppingCartIcon
					onClick={goToShoppingCart}
					className="h-6 w-6"
					aria-hidden="true"
				></ShoppingCartIcon>
			</button>
			<UserProfile />
		</div>
	)
}

export default NavbarRigthIcons
