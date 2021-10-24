import { Menu } from '@headlessui/react'
import React, { ReactElement } from 'react'

const UserProfile = (): ReactElement => {
	const imageProfile =
	'https://lh3.googleusercontent.com/a-/AOh14GikjcyOCeXiX9H8188KtDvihiJQTeT7opzI-jxZ=s288-p-rw-no'

	return (
		<Menu as="div" className="ml-3 relative">
			<div>
				<Menu.Button
					className="
                    bg-gray-800 flex text-sm 
                    rounded-full focus:outline-none 
                    focus:ring-2 focus:ring-offset-2 
                    focus:ring-offset-gray-800 focus:ring-white"
				>
					<img
						className="h-8 w-8 rounded-full"
						src={imageProfile}
						alt=""
					/>
				</Menu.Button>
			</div>
		</Menu>
	)
}
export default UserProfile
