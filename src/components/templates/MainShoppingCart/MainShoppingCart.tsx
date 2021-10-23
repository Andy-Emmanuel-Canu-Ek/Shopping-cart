import React, { ReactElement } from 'react'
import { Else, If, Then } from 'react-if'
import ShoppingCartContent from 'components/organisms/ShoppingCartContent'
import ShoppingAmount from 'components/organisms/ShoppingAmount'
import { ProductLocalStorage } from 'shared/types/local_storage'
import useProductLocalStorage from 'hooks/useProductLocalStorage'
import Content from 'components/atoms/Content'
import Router from 'next/router'
import COLORS from 'shared/constants/colors'
import routes from 'shared/constants/routes'

const MainShoppingCart = (): ReactElement => {
	const useCurrentProductLocalStorage: ProductLocalStorage =
		useProductLocalStorage()

	const { productsStorage } = useCurrentProductLocalStorage
	const cartHasProducts = productsStorage?.length > 0

	const goToProducts = () => Router.push(routes.products)

	return (
		<div>
			<If condition={cartHasProducts}>
				<Then>
					<div className="grid grid-cols-2 gap-4 divide-x">
						<div>
							<ShoppingCartContent
								productLocalStorage={useCurrentProductLocalStorage}
							/>
						</div>
						<div>
							<ShoppingAmount
								productLocalStorage={useCurrentProductLocalStorage}
							/>
						</div>
					</div>
				</Then>
				<Else>
					<Content>
						<p>
							Aun no hay productos agregados en el carrito{' '}
							<label
								onClick={goToProducts}
								style={{ color: COLORS.PRIMARY_COLOR }}
							>
								ir a productos
							</label>
						</p>
					</Content>
				</Else>
			</If>
		</div>
	)
}

export default MainShoppingCart
