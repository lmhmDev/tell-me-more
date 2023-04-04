import Head from 'next/head'
import React from 'react'

type Props = {
	children: React.ReactElement<any, string | React.JSXElementConstructor<any>>
}

export default function Layout({ children }: Props) {
	return (
		<>
			<Head>
				<title>Tell me more</title>
			</Head>
			{children}
		</>
	)
}
