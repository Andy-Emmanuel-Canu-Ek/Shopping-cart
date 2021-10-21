import ProductsService from 'api/Products'
import { Product } from 'api/Products/declaration'
import { ReactElement, useEffect, useState } from 'react'
import ProductCard from 'components/molecules/Products/ProductCard'
import ContentImage from 'components/atoms/ContentImage'
import { formatProduct } from 'shared/utils/format'
import { Else, If, Then } from 'react-if'
import LoadingSpinner from 'components/atoms/LoadingSpinner'

const ProductList = (): ReactElement => {
	const [loading, setLoading] = useState(false)
	const [products, setProducts] = useState<Product[]>([])

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

	return (
		<>
			<If condition={loading}>
				<Then>
					<LoadingSpinner />
				</Then>
				<Else>
					<ContentImage title="Lista de productos">
						{products.map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
					</ContentImage>
				</Else>
			</If>
		</>
	)
}
export default ProductList
