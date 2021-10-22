import { Product } from 'api/Products/declaration'
import { useEffect, useState } from 'react'
import { PRODUCTS_KEY } from 'shared/constants/local_storage_keys'
import { getProductsFromLocalStorage } from 'shared/utils/local_storage'

export default function useProductLocalStorage() {
	const [productsStorage, setProductsStorage] = useState<Product[] | []>()

	useEffect(() => {
		setProductsStorage(getProductsFromLocalStorage())
	}, [])

	const addProductInStorage = (product: Product, quantity: number) => {
		const products: Product[] = validateProduct(product, quantity, true)
		localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products))
		setProductsStorage(products)
	}

	const lessProductInStorage = (product: Product, quantity: number) => {
		const products: Product[] = validateProduct(product, quantity, false)
		localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products))
		setProductsStorage(products)
	}

	const removeProductStorage = (product: Product) => {
		const products = removeItem(product.id, productsStorage)
		localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products))
		setProductsStorage(products)
	}

	const validateProduct = (
		product: Product,
		quantity: number,
		isAdd: boolean,
	): Product[] => {
		const currentProduct = productsStorage?.find(
			({ id }) => id === product.id,
		)

		let products = removeItem(product.id, productsStorage)
		let newProduct: Product = { ...product, quantity }
		if (currentProduct) {
			const newQuantity = isAdd
				? currentProduct.quantity + quantity
				: currentProduct.quantity - quantity

			newProduct = {
				...currentProduct,
				quantity: newQuantity < 1 ? 1 : newQuantity,
			}
		}

		products = [...products, newProduct]
		return products
	}

	const removeItem = (item_id: number, products: Product[]): Product[] =>
		products.filter(({ id }) => id !== item_id)

	const clearProductsStorage = () => localStorage.removeItem(PRODUCTS_KEY)

	return {
		productsStorage,
		addProductInStorage,
		lessProductInStorage,
		removeProductStorage,
		clearProductsStorage,
	}
}
