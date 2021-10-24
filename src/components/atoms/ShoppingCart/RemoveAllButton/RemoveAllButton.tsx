import React, { ReactElement } from 'react'

type Props = {
	onRemoveAll: () => void
}
const RemoveAllButton = ({ onRemoveAll }: Props): ReactElement => (
	<button
		onClick={onRemoveAll}
		title="Eliminar todos los productos"
		className="
           bg-indigo-600
           border border-transparent 
           rounded-md py-3 px-8 flex 
           text-base font-medium text-white 
           hover:bg-indigo-700 focus:outline-none 
           focus:ring-2 focus:ring-offset-2 
           focus:ring-indigo-500"
	>
		Vaciar carrito
	</button>
)

export default RemoveAllButton
