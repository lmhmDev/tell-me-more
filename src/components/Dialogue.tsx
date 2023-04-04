import React from 'react'

export type Props = {
	children: React.ReactElement<any, string | React.JSXElementConstructor<any>>
}

export default function Dialogue() {
	return (
		<>
			<form>
				<input type='text' name='' id='' />
			</form>
		</>
	)
}