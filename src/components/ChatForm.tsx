import SendIcon from '@/utils/icons'
import React, { useEffect, useRef, useState } from 'react'

export type Props = {
	fetchData: any,
	error: string
}

export default function ChatForm({ fetchData, error }: Props) {
	const inputRef = useRef(null)
	const [value, setValue] = useState('')

	const submit = async (e:any) => {
		e.preventDefault()
		fetchData(value)
		setValue('')
	}

	const onChange = (e:any) => {
		setValue(e.target.value)
	}

	useEffect(() => {
		inputRef?.current?.focus()
	}, [])

	return (
		<>
			<form onSubmit={submit}>
				<div className='flex relative'>
					<label>
						<p className='absolute -top-5 text-gray-500 text-sm'>Tell me something about...</p>
						<input ref={inputRef} onChange={onChange} type='text' name='Input' id='Input' placeholder='Chainsaws' value={value} className={`h-full ${error ? 'border-2 border-red-600' : 'border-none'} outline-none px-2 py-3 rounded-sm`} />
					</label>
					<button disabled={!value} type='submit' className='ml-1 py-2 px-4 bg-mainColor hover:bg-mainColorHover rounded-sm'>
						<SendIcon />
					</button>
					{!!error && <p className='text-red-600 absolute -bottom-7 w-max'>{error}</p>}
				</div>
			</form>
		</>
	)
}