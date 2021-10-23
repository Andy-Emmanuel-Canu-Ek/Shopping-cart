import React, { Dispatch, ReactElement, SetStateAction } from 'react'
import { minProductValue } from 'shared/constants/constants'

type Props = {
	value: number
	setValue: Dispatch<SetStateAction<number>>
	onSum?: () => void
	onLess?: () => void
}

const CounterInput = ({
	value,
	setValue,
	onSum,
	onLess,
}: Props): ReactElement => {
	const increment = () => {
		setValue((currentValue) => currentValue + 1)
		onSum && onSum()
	}

	const decrement = () => {
		setValue((currentValue) => validateMinimum(currentValue))
		onLess && onLess()
	}

	const validateMinimum = (currentValue: number): number =>
		currentValue <= minProductValue ? minProductValue : currentValue - 1

	return (
		<>
			<br />
			<div className="custom-number-input h-10 w-32">
				<label
					className="
                        w-full text-gray-700 
                        text-sm font-semibold"
				>
					Cantidad
				</label>
				<div
					className="
                    flex flex-row h-8 w-full
                    rounded-lg relative bg-transparent mt-1"
				>
					<button
						onClick={decrement}
						data-action="decrement"
						className="
                        bg-gray-300 text-gray-600 
                        hover:text-gray-700 hover:bg-gray-400
                        h-full w-20 rounded-l 
                        cursor-pointer outline-none"
					>
						<span className="m-auto text-2xl font-thin">−</span>
					</button>
					<input
						type="number"
						className="
                        outline-none focus:outline-none
                        text-center w-full bg-gray-300
                        font-semibold text-md hover:text-black
                        focus:text-black  md:text-basecursor-default
                        flex items-center text-gray-700  outline-none"
						name="custom-input-number"
						defaultValue={minProductValue}
						min={minProductValue}
						value={value}
					/>
					<button
						onClick={increment}
						data-action="increment"
						className="
                        bg-gray-300 text-gray-600 
                        hover:text-gray-700 hover:bg-gray-400 
                        h-full w-20 rounded-r cursor-pointer"
					>
						<span className="m-auto text-2xl font-thin">+</span>
					</button>
				</div>
			</div>
			<br />
		</>
	)
}

export default CounterInput
