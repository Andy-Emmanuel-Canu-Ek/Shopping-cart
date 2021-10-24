import { Product } from 'api/Products/declaration'
import { Dispatch, SetStateAction } from 'react'

export type ShoppingCart = {
	products: Product[]
}

export type ShoppingCartState = {
	shoppingCartState: ShoppingCart
	setShoppingCartState: Dispatch<SetStateAction<ShoppingCart>>
}
