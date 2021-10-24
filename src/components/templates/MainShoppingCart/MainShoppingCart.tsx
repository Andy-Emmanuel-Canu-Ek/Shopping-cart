import React, { ReactElement } from 'react'
import { Else, If, Then } from 'react-if'
import ShoppingItemContent from 'components/organisms/ShoppingCart/ShoppingItemContent'
import ShoppingAmount from 'components/organisms/ShoppingCart/ShoppingAmount'
import { ProductLocalStorage } from 'shared/types/local_storage'
import useProductLocalStorage from 'hooks/useProductLocalStorage'
import Content from 'components/atoms/Content'
import Router from 'next/router'
import COLORS from 'shared/constants/colors'
import routes from 'shared/constants/routes'
import ShoppingItemContentTotals from 'components/organisms/ShoppingCart/ShoppingItemContentTotals'
import ContentTitle from 'components/atoms/ContentTitle'
import Swal from 'sweetalert2'
import RemoveAllButton from 'components/atoms/ShoppingCart/RemoveAllButton'

const MainShoppingCart = (): ReactElement => {
	const useCurrentProductLocalStorage: ProductLocalStorage =
		useProductLocalStorage()

	const { productsStorage, clearProductsStorage } =
		useCurrentProductLocalStorage

	const cartHasProducts = productsStorage?.length > 0

	const goToProducts = () => Router.push(routes.products)

	const onRemoveAll = () =>
		Swal.fire({
			title: `Esta apunto de eliminar todos los porductos agregados al carrito.
				 ¿Quiere continuar con esta operación?`,
			showDenyButton: true,
			showCancelButton: true,
			confirmButtonText: 'Sí',
			denyButtonText: 'No',
			cancelButtonText: 'Cancelar',
		}).then((result) => {
			if (result.isConfirmed) {
				clearProductsStorage()
				Swal.fire(
					'Carrito de compras vacio',
					'Se eliminaron todos los productos agregados al carrito',
					'success',
				)
			}
		})

	return (
		<div>
			<If condition={cartHasProducts}>
				<Then>
					<div className="mt-32 text-center">
						<ContentTitle title="Productos agregados" />
					</div>
					<div className="text-right ml-32 mt-10">
						<RemoveAllButton onRemoveAll={onRemoveAll} />
					</div>

					<div
						className="
							grid lg:grid-cols-2 
							sm:grid-cols-1 md:grid-cols-2 
							md:divide-x lg:divide-x  mt-10"
					>
						<div className="p-10">
							<ShoppingItemContent
								productLocalStorage={useCurrentProductLocalStorage}
							/>
						</div>
						<div className="p-10">
							<ShoppingItemContentTotals products={productsStorage} />
							<ShoppingAmount
								productLocalStorage={useCurrentProductLocalStorage}
							/>
						</div>
					</div>
				</Then>
				<Else>
					<Content>
						<p className="text-center">
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
