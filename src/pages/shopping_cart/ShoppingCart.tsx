import React, { ReactNode } from 'react'
import MainLayout from 'components/layouts/MainLayout'
import MainShoppingCart from 'components/templates/MainShoppingCart'
import Content from 'components/atoms/Content'

const ShoppingCart = (): ReactNode => (
	<MainLayout>
		<Content>
			<MainShoppingCart />
		</Content>
	</MainLayout>
)

export default ShoppingCart
