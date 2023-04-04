import Head from 'next/head'
import Layout from '@/components/Layout'
import Dialogue from '@/components/Dialogue'

export default function Home() {
	return (
		<>
			<Head>
				<title>Tell me more</title>
			</Head>
			<Layout>
				<>
					<Dialogue />
				</>
			</Layout>
		</>
	)
}
