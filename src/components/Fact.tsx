type Props = {
	fact:string,
	loading:boolean,
	error:string
}

export default function Fact({ fact, loading, error }: Props) {
	return (
		<div className='max-w-sm px-5'>
			{error ? 'Error' : loading ? 'Loading...' : <p>{fact}</p>}
		</div>
	)
}