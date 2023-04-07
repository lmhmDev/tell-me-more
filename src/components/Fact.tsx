type Props = {
	fact:string
}

export default function Fact({ fact }: Props) {
	return (
		<div className='max-w-sm px-5'>
			<p>{fact}</p>
		</div>
	)
}