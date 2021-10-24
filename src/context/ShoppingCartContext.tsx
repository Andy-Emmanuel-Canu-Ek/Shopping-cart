import { createContext, FC, useState } from 'react'
import { ShoppingCartState } from 'shared/types/context/shopping_cart'

const InitShoppingCart = {
	products: [],
}

const contextDefaultValues: ShoppingCartState = {
	shoppingCartState: InitShoppingCart,
	setShoppingCartState: () => {},
}

export const ShoppingCartContext = createContext<ShoppingCartState>(
	contextDefaultValues,
)

export const ShoppingCartProvider: FC = ({ children }) => {
	const [shoppingCartState, setShoppingCartState] = useState(
		contextDefaultValues.shoppingCartState,
	)

	return (
		<ShoppingCartContext.Provider
			value={{
				shoppingCartState,
				setShoppingCartState,
			}}
		>
			{children}
		</ShoppingCartContext.Provider>
	)
}
