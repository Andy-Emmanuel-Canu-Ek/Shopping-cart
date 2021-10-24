import React, { ReactElement } from 'react'
import { ShoppingCartIcon } from '@heroicons/react/outline'
import UserProfile from './UserProfile'
import Router from 'next/router'
import routes from 'shared/constants/routes'

const NavbarRigthIcons = (): ReactElement => {
	const goToShoppingCart = () => Router.push(routes.shopping_cart)

	return (
		<div
			className="
            absolute inset-y-0 
            right-0 flex items-center 
            pr-2 sm:static sm:inset-auto 
            sm:ml-6 sm:pr-0"
		>
			<button
				type="button"
				className="
                bg-gray-800 p-1 rounded-full 
                text-gray-400 hover:text-white 
                focus:outline-none focus:ring-2 
                focus:ring-offset-2 
                focus:ring-offset-gray-800 focus:ring-white"
			>
				<span className="sr-only">Ver carrito</span>
				<ShoppingCartIcon
					onClick={goToShoppingCart}
					className="h-6 w-6"
					aria-hidden="true"
				/>
			</button>
			<UserProfile />
		</div>
	)
}

export default NavbarRigthIcons
