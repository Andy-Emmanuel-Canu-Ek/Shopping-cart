import { Disclosure } from '@headlessui/react'
import { ReactElement } from 'react'
import NavbarMenuButtom from './NavbarSections/NavbarMenuButtom'
import NavbarRigthIcons from './NavbarSections/NavBarRigthIcons'
import {
	ResponsiveNavbarTabs,
	DefaultNavbarTabs,
} from './NavbarSections/NavbarTabs'

const Navbar = (): ReactElement => (
	<Disclosure as="nav" className="bg-gray-800 fixed w-full z-10 top-0">
		{({ open }) => (
			<>
				<div
					className="
						max-w-7xl mx-auto 
						px-2 sm:px-6 lg:px-8"
				>
					<div
						className="
							relative flex items-center
							justify-between h-16"
					>
						<NavbarMenuButtom open={open} />
						<DefaultNavbarTabs />
						<NavbarRigthIcons />
					</div>
				</div>

				<ResponsiveNavbarTabs />
			</>
		)}
	</Disclosure>
)

export default Navbar
