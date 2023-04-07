import Head from 'next/head'
import Layout from '@/components/Layout'
import ChatForm from '@/components/ChatForm'
import { useState } from 'react'
import Fact from '@/components/Fact'

export default function Home() {
	const [fact, setFact] = useState('')

	const fetchData = async (promt:string) => {
		fetch('/api/ask', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				promt
			})
		})
			.then((res) => res.json())
			.then((data) => {
				setFact(data.choices[0].text)
			})
	}

	return (
		<>
			<Head>
				<title>Tell me more</title>
			</Head>
			<Layout>
				<>
					<Fact fact={fact} />
					<ChatForm fetchData={fetchData} />
				</>
			</Layout>
		</>
	)
}
