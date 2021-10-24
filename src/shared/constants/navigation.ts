import routes from './routes'

const { products, shopping_cart } = routes

export default [
	{ name: 'Productos', href: products, current: true },
	{ name: 'Ver carrito', href: shopping_cart, current: true },
]
