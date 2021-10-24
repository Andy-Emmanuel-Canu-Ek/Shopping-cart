import { Product } from 'api/Products/declaration'
import { ShoppingCartContext } from 'context/ShoppingCartContext'
import { useContext, useEffect, useState } from 'react'
import { PRODUCTS_KEY } from 'shared/constants/local_storage_keys'
import { ProductLocalStorage } from 'shared/types/local_storage'
import { getProductsFromLocalStorage } from 'shared/utils/local_storage'

export default function useProductLocalStorage(): ProductLocalStorage {
	const { setShoppingCartState } = useContext(ShoppingCartContext)
	const [productsStorage, setProductsStorage] = useState<Product[] | []>()

	useEffect(() => {
		setProductsState(getProductsFromLocalStorage())
	}, [])

	const addProductInStorage = (product: Product, quantity: number) => {
		const products: Product[] = validateProduct(product, quantity, true)
		saveProducts(products)
	}

	const lessProductInStorage = (product: Product, quantity: number) => {
		const products: Product[] = validateProduct(product, quantity, false)
		saveProducts(products)
	}

	const removeProductStorage = (product: Product) => {
		const products = removeItem(product.id, productsStorage)
		saveProducts(products)
	}

	const saveProducts = (products: Product[]) => {
		const sortProducts = products.sort(({ id: a }, { id: b }) => a - b)
		localStorage.setItem(PRODUCTS_KEY, JSON.stringify(sortProducts))
		setProductsState(sortProducts)
	}

	const setProductsState = (products: Product[]) => {
		setShoppingCartState({ products })
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

	const clearProductsStorage = () => {
		localStorage.removeItem(PRODUCTS_KEY)
		setProductsState([])
	}

	return {
		productsStorage,
		addProductInStorage,
		lessProductInStorage,
		removeProductStorage,
		clearProductsStorage,
	}
}
