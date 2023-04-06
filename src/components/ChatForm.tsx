import SendIcon from '@/utils/icons'
import React from 'react'

export type Props = {
	children: React.ReactElement<any, string | React.JSXElementConstructor<any>>
}

export default function ChatForm() {
	return (
		<>
			<form>
				<div className='flex relative'>
					<p className='absolute -top-5 text-gray-500 text-xs'>Tell me something about...</p>
					<input type='text' name='Input' id='Input' placeholder='Chainsaws' className='h-full outline-none p-2 rounded-sm' />
					<button type='submit' className='ml-1 py-2 px-3 bg-mainColor hover:bg-mainColorHover rounded-sm'>
						<SendIcon />
					</button>
				</div>
			</form>
		</>
	)
}