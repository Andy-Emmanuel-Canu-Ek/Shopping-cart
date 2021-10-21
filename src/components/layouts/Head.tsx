/* eslint-disable */
import React from 'react'
import NextHead from 'next/head'
import { Else, If, Then, When } from 'react-if'
export interface IOpenGraphMetas {
	title: string
	type: string
	url: string
	image: string
	description: string
}

type IHead = {
	title?: string
	description?: string
	subject?: string
	copyright?: string
	language?: string
	openGraph?: IOpenGraphMetas
	keyworkds?: string
	noIndex?: boolean
}

const Head = ({
	title = "Shopping cart",
	description = '',
	subject = '',
	copyright = "Shopping cart",
	language = 'es',
	openGraph,
	keyworkds = '',
	noIndex = false,
}: IHead) => {
	if (!openGraph) {
		openGraph = {
			title,
			type: '',
			url: `${process.env.applicationUrl}`,
			image: `${process.env.applicationUrl}/vercel.svg`,
			description: '',
		}
	}
	return (
		<NextHead>
			<meta charSet="utf-8" />
			<title>{title}</title>
			<link rel="shortcut icon" href="/favicon.ico" type="image/ico" />
			<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
			<link
				rel="apple-touch-icon"
				sizes="32x32"
				href="/apple-touch-icon-32x32.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/apple-touch-icon-180x180.png"
			/>
			<link rel="canonical" href={`${process.env.applicationUrl}`} />
			<link rel="shortlink" href={`${process.env.applicationUrl}`} />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
			/>
			<meta name="keywords" content={keyworkds} />
			<meta name="description" content={description} />
			<meta name="subject" content={subject} />
			<meta name="copyright" content={copyright} />
			<meta name="language" content={language} />
			<meta property="fb:app_id" content={null} />

			<If condition={noIndex}>
				<Then>
					<>
						<meta name="robots" content="noindex" />
						<meta name="googlebot" content="noindex" />
					</>
				</Then>
				<Else>
					<meta name="robots" content="index, follow" />
				</Else>
			</If>
			<meta httpEquiv="content-language" content={language} />
			<When condition={openGraph !== undefined && openGraph !== null}>
				<>
					<meta
						name="og:title"
						property="og:title"
						content={openGraph.title}
					/>
					<meta
						name="og:type"
						property="og:type"
						content={openGraph.type}
					/>
					<meta name="og:url" property="og:url" content={openGraph.url} />
					<meta
						name="og:image"
						property="og:image"
						content={openGraph.image}
					/>
					<meta
						name="og:site_name"
						property="og:site_name"
						content={title}
					/>
					<meta
						name="og:description"
						property="og:description"
						content={openGraph.description}
					/>
				</>
			</When>
		</NextHead>
	)
}

export default Head
