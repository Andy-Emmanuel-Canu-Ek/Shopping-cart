import React, { ReactNode } from 'react'
import MainLayout from 'components/layouts/MainLayout'
import ProductList from 'components/organisms/ProductList'
import Content from 'components/atoms/Content'

const Products = (): ReactNode => (
	<MainLayout>
		<Content>
			<ProductList />
		</Content>
	</MainLayout>
)

export default Products
