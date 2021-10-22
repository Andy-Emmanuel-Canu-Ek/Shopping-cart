/* This example requires Tailwind CSS v2.0+ */
import React, { ReactElement } from 'react'
import ItemContent from 'components/molecules/ShoppingCart/ItemContent'
import useProductLocalStorage from 'hooks/useProductLocalStorage'

const MainShoppingCart = (): ReactElement => {
	const { productsStorage } = useProductLocalStorage()

	return (
		<div>
			<ItemContent products={productsStorage} />
		</div>
	)
}

export default MainShoppingCart
