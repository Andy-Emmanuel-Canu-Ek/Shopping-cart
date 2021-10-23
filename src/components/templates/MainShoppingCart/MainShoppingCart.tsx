import React, { ReactElement } from 'react'
import { Else, If, Then } from 'react-if'
import ShoppingCartContent from 'components/organisms/ShoppingCartContent'
import ShoppingAmount from 'components/organisms/ShoppingAmount'
import { ProductLocalStorage } from 'shared/types/local_storage'
import useProductLocalStorage from 'hooks/useProductLocalStorage'

const MainShoppingCart = (): ReactElement => {
	const useCurrentProductLocalStorage: ProductLocalStorage =
		useProductLocalStorage()

	const { productsStorage } = useCurrentProductLocalStorage
	const cartHasProducts = productsStorage?.length > 0

	return (
		<div>
			<If condition={cartHasProducts}>
				<Then>
					<ShoppingCartContent
						productLocalStorage={useCurrentProductLocalStorage}
					/>
					<ShoppingAmount
						productLocalStorage={useCurrentProductLocalStorage}
					/>
				</Then>
				<Else>El carrito de compras no tiene productos agregados</Else>
			</If>
		</div>
	)
}

export default MainShoppingCart
