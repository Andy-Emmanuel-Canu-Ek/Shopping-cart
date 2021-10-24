import { Disclosure } from '@headlessui/react'
import { useRouter } from 'next/router'
import React, { ReactElement } from 'react'
import navigation from 'shared/constants/navigation'
import ContentIconImages from './ContentIconImages'

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

const getNavigation = () => {
	const router = useRouter()
	const rootPath = router.pathname
	return navigation.map((nav) => ({
		...nav,
		current: nav.href === rootPath,
	}))
}

export const DefaultNavbarTabs = (): ReactElement => (
	<div
		className="
				flex-1 flex items-center 
				justify-center sm:items-stretch 
				sm:justify-start"
	>
		<ContentIconImages />
		<div className="hidden sm:block sm:ml-6">
			<div className="flex space-x-4">
				{getNavigation().map((item) => (
					<a
						key={item.name}
						href={item.href}
						className={classNames(
							item.current
								? 'bg-gray-900 text-white'
								: 'text-gray-300 hover:bg-gray-700 hover:text-white',
							'px-3 py-2 rounded-md text-sm font-medium',
						)}
						aria-current={item.current ? 'page' : undefined}
					>
						{item.name}
					</a>
				))}
			</div>
		</div>
	</div>
)

export const ResponsiveNavbarTabs = (): ReactElement => (
	<Disclosure.Panel className="sm:hidden">
		<div className="px-2 pt-2 pb-3 space-y-1">
			{getNavigation().map((item) => (
				<Disclosure.Button
					key={item.name}
					as="a"
					href={item.href}
					className={classNames(
						item.current
							? 'bg-gray-900 text-white'
							: 'text-gray-300 hover:bg-gray-700 hover:text-white',
						'block px-3 py-2 rounded-md text-base font-medium',
					)}
					aria-current={item.current ? 'page' : undefined}
				>
					{item.name}
				</Disclosure.Button>
			))}
		</div>
	</Disclosure.Panel>
)
