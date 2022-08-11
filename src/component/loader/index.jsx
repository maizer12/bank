import React from 'react'
import ContentLoader from 'react-content-loader'

const MyLoader = props => (
	<ContentLoader
		speed={2}
		width={410}
		height={436}
		viewBox='0 0 410 436'
		backgroundColor='#f3f3f3'
		foregroundColor='#ecebeb'
		{...props}
	>
		<rect x='7' y='21' rx='0' ry='0' width='256' height='138' />
		<circle cx='108' cy='236' r='12' />
		<circle cx='119' cy='212' r='5' />
		<rect x='281' y='20' rx='0' ry='0' width='103' height='43' />
		<rect x='4' y='18' rx='0' ry='0' width='260' height='137' />
		<rect x='133' y='77' rx='0' ry='0' width='0' height='208' />
		<rect x='2' y='173' rx='0' ry='0' width='257' height='132' />
		<rect x='279' y='174' rx='0' ry='0' width='100' height='42' />
	</ContentLoader>
)

export default MyLoader
