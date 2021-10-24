import { FC } from 'react'
import { ShoppingCartProvider } from './ShoppingCartContext'

export const BaseContext: FC = ({ children }) => (
	<ShoppingCartProvider>{children}</ShoppingCartProvider>
)
