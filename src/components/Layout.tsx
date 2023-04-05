import Head from 'next/head'
import React from 'react'
import Footer from './Footer'

export type Props = {
	children: React.ReactElement<any, string | React.JSXElementConstructor<any>>
}

export default function Layout({ children }: Props) {
	return (
		<>
			<Head>
				<title>Tell me more</title>
			</Head>
			<div className='w-full h-screen relative bg-mainBg text-textColor flex flex-col justify-center items-center'>
				<h1 className='text-7xl capitalize font-mono h-56 -mt-40 mb-20'>Tell me more</h1>
				{children}
				<Footer />
			</div>
		</>
	)
}
