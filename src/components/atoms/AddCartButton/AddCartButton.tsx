import React, { ReactElement } from 'react'

const AddCartButton = (): ReactElement => (
	<div className="mt-6">
		<button
			className="
                mt-6 w-full bg-indigo-600 
                border border-transparent 
                rounded-md py-3 px-8 flex 
                items-center justify-center 
                text-base font-medium text-white 
                hover:bg-indigo-700 focus:outline-none 
                focus:ring-2 focus:ring-offset-2 
                focus:ring-indigo-500"
		>
			Agregar al carrito
		</button>
	</div>
)

export default AddCartButton