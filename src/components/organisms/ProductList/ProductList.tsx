import ProductsService from 'api/Products'
import { Product } from 'api/Products/declaration'
import { ReactElement, useEffect, useState } from 'react'
import ProductCard from 'components/molecules/Products/ProductCard'
import ContentImage from 'components/atoms/ContentImage'

const ProductList = (): ReactElement => {
	const [products, setProducts] = useState<Product[]>([])

	useEffect(() => {
		getProductList()
	}, [])

	const getProductList = async () => {
		const response: Product[] = await ProductsService.find()
		setProducts(response)
	}

	return (
		<>
			<ContentImage title="Lista de productos">
				{products.map((product) => (
					<ProductCard product={product} />
				))}
			</ContentImage>
		</>
	)
}
export default ProductList
