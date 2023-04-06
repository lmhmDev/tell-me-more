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
					<button type='submit' className='ml-1 py-2 px-3 bg-mainColor rounded-sm'>
						<svg stroke='currentColor' fill='none' stroke-width='2' viewBox='0 0 24 24' stroke-linecap='round' stroke-linejoin='round' className='h-4 w-4 mr-1 text-mainBg' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><line x1='22' y1='2' x2='11' y2='13' /><polygon points='22 2 15 22 11 13 2 9 22 2' /></svg>
					</button>
				</div>
			</form>
		</>
	)
}