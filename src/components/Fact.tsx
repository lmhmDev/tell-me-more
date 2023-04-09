type Props = {
	fact:string,
	loading:boolean,
	error:string
}

export default function Fact({ fact, loading, error }: Props) {
	return (
		<div className='max-w-sm w-screen px-5'>
			{error ? 'Error' : <p className={loading ? 'after:content-["▋"] after:animate-blinking' : ''}>{fact}</p>}
		</div>
	)
}