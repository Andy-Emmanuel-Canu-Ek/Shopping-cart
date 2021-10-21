import type { AppProps } from 'next/app'
import Bugsnag from '@bugsnag/js'
import BugsnagPluginReact from '@bugsnag/plugin-react'
import environment from 'shared/constants/environment'
import '@fontsource/roboto'
import 'tailwindcss/tailwind.css'
import { ReactNode } from 'react'

const { bugsnagApiKey } = environment

if (bugsnagApiKey && bugsnagApiKey !== '') {
	Bugsnag.start({
		apiKey: environment.bugsnagApiKey,
		plugins: [new BugsnagPluginReact()],
		releaseStage: process.env.releaseStage,
		enabledReleaseStages: ['production', 'staging'],
	})
}

function MyApp({ Component, pageProps }: AppProps): ReactNode {
	return (
		<>
			<Component {...pageProps} />
		</>
	)
}
export default MyApp
