module.exports = () => {
	const REACT_APP_API_URL = process.env.REACT_APP_API_URL

	return {
		reactStrictMode: true,
		env: {
			REACT_APP_API_URL,
		},
	}
}
