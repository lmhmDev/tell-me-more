import Head from 'next/head'
import Layout from '@/components/Layout'
import ChatForm from '@/components/ChatForm'

export default function Home() {
	return (
		<>
			<Head>
				<title>Tell me more</title>
			</Head>
			<Layout>
				<>
					<ChatForm />
				</>
			</Layout>
		</>
	)
}
