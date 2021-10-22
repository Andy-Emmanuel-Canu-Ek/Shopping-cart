/* This example requires Tailwind CSS v2.0+ */
import React, { ReactElement } from 'react'
import ItemContent from 'components/molecules/ShoppingCart/ItemContent'
import useProductLocalStorage from 'hooks/useProductLocalStorage'
import { Else, If, Then } from 'react-if'
import LoadingSpinner from 'components/atoms/LoadingSpinner'

const MainShoppingCart = (): ReactElement => {
	const { productsStorage } = useProductLocalStorage()

	const cartHasProducts = productsStorage?.length > 0

	return (
		<div>
			<If condition={cartHasProducts}>
				<Then>
					<ItemContent products={productsStorage} />
				</Then>
				<Else>
					El carrito de compras no tiene productos agregados
				</Else>
			</If>
		</div>
	)
}

export default MainShoppingCart
