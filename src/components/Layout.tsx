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
			<div className='w-full h-screen relative bg-mainBg text-textColor flex flex-col justify-evenly items-center'>
				<h1 className='text-5xl sm:text-7xl capitalize font-mono  mb-16 text-center'>Tell me more</h1>
				{children}
				<Footer />
			</div>
		</>
	)
}
