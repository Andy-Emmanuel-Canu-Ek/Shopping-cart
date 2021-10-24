import { Product } from 'api/Products/declaration'
import React, { ReactElement } from 'react'
import ShoppingItem from 'components/molecules/ShoppingCart/ShoppingItem'
import Swal from 'sweetalert2'
import { ProductLocalStorage } from 'shared/types/local_storage'

type Props = {
	productLocalStorage: ProductLocalStorage
}

const ShoppingItemContent = ({
	productLocalStorage,
}: Props): ReactElement => {
	const {
		productsStorage,
		addProductInStorage,
		lessProductInStorage,
		removeProductStorage,
	} = productLocalStorage

	const removeProduct = (product: Product) =>
		Swal.fire({
			title: '¿Desea eliminar este producto del carrito?',
			showDenyButton: true,
			showCancelButton: true,
			confirmButtonText: 'Sí',
			denyButtonText: 'No',
			cancelButtonText: 'Cancelar',
		}).then((result) => {
			if (result.isConfirmed) {
				removeProductStorage(product)
				Swal.fire(
					'Producto eliminado',
					'Se elimino un producto del carrito',
					'success',
				)
			}
		})

	return (
		<div
			className="
			    mt-10
				mb-10
				sm:px-24 
				lg:max-w-7xl lg:px-24"
		>
			<ul role="list" className="-my-6 divide-y divide-gray-200">
				{productsStorage?.map((product) => (
					<li key={product.id} className="py-6 flex">
						<ShoppingItem
							product={product}
							addProduct={addProductInStorage}
							lessProduct={lessProductInStorage}
							removeProduct={removeProduct}
						/>
					</li>
				))}
			</ul>
		</div>
	)
}

export default ShoppingItemContent
