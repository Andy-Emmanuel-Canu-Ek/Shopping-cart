import { Product } from 'api/Products/declaration'

const MAX_STRING_LENGTH = 35;
export const formatProduct = (products: Product[]) =>
	products.map(({ name, ...rest }: Product) => ({
		name: name.length > MAX_STRING_LENGTH 
                ? `${name.slice(0, MAX_STRING_LENGTH)}...` 
				: name.slice(0, MAX_STRING_LENGTH),
		...rest,
	}))
