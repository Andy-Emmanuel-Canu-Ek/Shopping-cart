import React, { ReactElement } from 'react'
import routes from 'shared/constants/routes'
const { products, shopping_cart } = routes

const navigation = [
	{ name: 'Productos', href: products, current: true },
	{ name: 'Ver carrito', href: shopping_cart, current: true },
]

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export const NavbarTabs = (): ReactElement => (
	<div
		className="
            flex-1 flex items-center 
            justify-center 
            sm:items-stretch 
            sm:justify-start"
	>
		<div className="hidden sm:block sm:ml-6">
			<div className="flex space-x-4">
				{navigation.map((item) => (
					<a
						key={item.name}
						href={item.href}
						className={classNames(
							item.current
								? 'bg-gray-900 text-white'
								: `text-gray-300 hover:bg-gray-700 
									hover:text-white`,
							'px-3 py-2 rounded-md text-sm font-medium',
						)}
						aria-current={item.current ? 'page' : undefined}
					>
						{item.name}
					</a>
				))}
			</div>
		</div>
	</div>
)
