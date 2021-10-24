import routes from './routes'

const { products, shopping_cart } = routes

export default [
	{ name: 'Productos', href: products, current: false },
	{ name: 'Ver carrito', href: shopping_cart, current: false },
]
