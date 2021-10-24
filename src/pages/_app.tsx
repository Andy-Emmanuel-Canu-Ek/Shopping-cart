import type { AppProps } from 'next/app'
import Bugsnag from '@bugsnag/js'
import BugsnagPluginReact from '@bugsnag/plugin-react'
import environment from 'shared/constants/environment'
import '@fontsource/roboto'
import 'tailwindcss/tailwind.css'
import { ReactElement } from 'react'
import Navbar from 'components/layouts/Navbar'
import { BaseContext } from 'context/BaseContext'

const { bugsnagApiKey } = environment

if (bugsnagApiKey && bugsnagApiKey !== '') {
	Bugsnag.start({
		apiKey: environment.bugsnagApiKey,
		plugins: [new BugsnagPluginReact()],
		releaseStage: process.env.releaseStage,
		enabledReleaseStages: ['production', 'staging'],
	})
}

function MyApp({ Component, pageProps }: AppProps): ReactElement {
	return (
		<>
			<BaseContext>
				<Navbar />
				<Component {...pageProps} />
			</BaseContext>
		</>
	)
}
export default MyApp
