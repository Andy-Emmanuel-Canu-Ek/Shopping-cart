import React, { ReactElement } from 'react'
import MainLayout from 'components/layouts/MainLayout'
import ProductList from 'components/organisms/ProductList'

const Products = (): ReactElement => {
	return (
		<MainLayout>
			<ProductList />
		</MainLayout>
	)
}

export default Products
