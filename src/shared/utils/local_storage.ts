import { Product } from 'api/Products/declaration'
import { PRODUCTS_KEY } from 'shared/constants/local_storage_keys'

export const getProductsFromLocalStorage = (): Product[] | [] => {
	let productsStorage = localStorage.getItem(PRODUCTS_KEY)
	if (!productsStorage) {
		return []
	}
	const products = JSON.parse(productsStorage) as Product[]
	return products
}
