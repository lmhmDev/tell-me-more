import SendIcon from '@/utils/icons'
import React, { useEffect, useRef, useState } from 'react'

export type Props = {
	children: React.ReactElement<any, string | React.JSXElementConstructor<any>>
}

export default function ChatForm({ fetchData }) {
	const inputRef = useRef(null)
	const [value, setValue] = useState('')

	const submit = async (e) => {
		e.preventDefault()
		fetchData(value)
		setValue('')
	}

	const onChange = (e) => {
		setValue(e.target.value)
	}

	useEffect(() => {
		inputRef.current.focus()
	}, [])

	return (
		<>
			<form onSubmit={submit}>
				<div className='flex relative'>
					<p className='absolute -top-5 text-gray-500 text-xs'>Tell me something about...</p>
					<input ref={inputRef} onChange={onChange} type='text' name='Input' id='Input' placeholder='Chainsaws' value={value} className='h-full outline-none p-2 rounded-sm' />
					<button type='submit' className='ml-1 py-2 px-3 bg-mainColor hover:bg-mainColorHover rounded-sm'>
						<SendIcon />
					</button>
				</div>
			</form>
		</>
	)
}