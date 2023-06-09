import Head from 'next/head'
import Layout from '@/components/Layout'
import ChatForm from '@/components/ChatForm'
import { useState } from 'react'
import Fact from '@/components/Fact'

export default function Home() {
	const [fact, setFact] = useState('')
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')

	const fetchData = async (promt:string) => {
		const dividedPromt = promt.split(' ')
		if (dividedPromt.length > 2) {
			setError('Too many words! Try using 2 or less 😁')
			return
		}

		setError('')
		setFact('')
		setLoading(true)
		try {
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
					setLoading(false)
				})
		} catch (error) {
			setLoading(false)
			setError('Something went wrong 😢')
		}
	}

	return (
		<>
			<Head>
				<title>Tell me more</title>
			</Head>
			<Layout>
				<>
					<Fact fact={fact} loading={loading} error={error} />
					<ChatForm fetchData={fetchData} error={error} />
				</>
			</Layout>
		</>
	)
}
