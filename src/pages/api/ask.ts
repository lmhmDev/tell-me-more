import { NextApiRequest, NextApiResponse } from 'next'
import { Configuration, OpenAIApi } from 'openai'

export default async function handler (req:NextApiRequest, res:NextApiResponse) {
	if (req.method !== 'POST') return res.status(405)

	const { promt } = req.body

	if (!promt) {
		return res.status(400).json({ error: 'Promt is required' })
	}

	try {
		const configuration = new Configuration({
			apiKey: process.env.OPENAI_API_KEY
		})
		const openai = new OpenAIApi(configuration)
		const response = await openai.createCompletion({
			model: 'text-davinci-003',
			prompt: `Answer to the next promt as if you were chat GPT with a fun fact about the promt. The promt is: ${promt}`,
			max_tokens: 256,
			temperature: 0,
			stream: false
		})

		if (response.status !== 200) {
			console.error(response.statusText)
			res.status(500).json({ error: response.statusText })
		}

		return res.status(200).json(response.data)
	} catch (error) {
		console.log(error.message)
		return res.status(500).json({ error: 'There was an internal server error' })
	}
}
