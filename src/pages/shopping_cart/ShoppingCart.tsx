import React, { ReactNode } from 'react'
import MainLayout from 'components/layouts/MainLayout'
import MainShoppingCart from 'components/organisms/MainShoppingCart'

const ShoppingCart = (): ReactNode => (
	<MainLayout>
		<MainShoppingCart />
	</MainLayout>
)

export default ShoppingCart