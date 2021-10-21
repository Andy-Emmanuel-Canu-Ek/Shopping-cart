import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
} from 'next/document'
import { ToBeDefined } from 'shared/interfaces/ToBeDefined'

class AppDocument extends Document {
	static async getInitialProps(
		ctx: DocumentContext,
	): Promise<ToBeDefined> {
		const originalRenderPage = ctx.renderPage

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) => <App {...props} />,
				})

			const initialProps = await Document.getInitialProps(ctx)
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
					</>
				),
			}
		} finally {
		
		}
	}

	render(): ToBeDefined {
		return (
			<Html translate="no">
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default AppDocument
