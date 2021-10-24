import ProductsService from 'api/Products'
import { Product } from 'api/Products/declaration'
import { ReactElement, useContext, useEffect, useState } from 'react'
import ProductCard from 'components/molecules/Products/ProductCard'
import ContentImage from 'components/atoms/ContentImage'
import { formatProduct } from 'shared/utils/format'
import { Else, If, Then } from 'react-if'
import LoadingSpinner from 'components/atoms/LoadingSpinner'
import useProductLocalStorage from 'hooks/useProductLocalStorage'
import { ShoppingCartContext } from 'context/ShoppingCartContext'

const ProductList = (): ReactElement => {
	const { setShoppingCartState } = useContext(ShoppingCartContext)
	const { productsStorage, addProductInStorage } = useProductLocalStorage()
	const [loading, setLoading] = useState(false)
	const [products, setProducts] = useState<Product[]>([])

	useEffect(() => {
		setShoppingCartState({ products: productsStorage })
	}, [productsStorage])

	useEffect(() => {
		getProductList()
	}, [])

	const getProductList = async () => {
		try {
			setLoading(true)
			const response: Product[] = await ProductsService.find()
			const productsData = formatProduct(response)
			setProducts(productsData)
		} catch (error) {
		} finally {
			setLoading(false)
		}
	}

	const addProduct = (product: Product, quantity: number) =>
		addProductInStorage(product, quantity)

	return (
		<>
			<If condition={loading}>
				<Then>
					<LoadingSpinner />
				</Then>
				<Else>
					<ContentImage title="Lista de productos">
						{products.map((product) => (
							<ProductCard
								key={product.id}
								product={product}
								addProduct={addProduct}
							/>
						))}
					</ContentImage>
				</Else>
			</If>
		</>
	)
}
export default ProductList
