import React, { useEffect } from 'react'
import Cards from '../cards'
import Popup from '../popup'
import Form from '../form/index'
import { useDispatch, useSelector } from 'react-redux'
import { setPopup } from '../redux/slice/fullSlice'
import './home.Module.scss'
const Home = () => {
	const popup = useSelector(state => state.full.popup)
	const addCard = useSelector(state => state.full.addCard)
	const balance = useSelector(state => state.full.balance)
	const card = useSelector(state => state.full.card)
	const [load, setLoad] = React.useState('false')
	const dispatch = useDispatch()
	useEffect(() => {
		if (card.length >= 1) {
			setLoad(true)
		}else{
			setLoad(false)
		}
	}, [card])
	return (
		<>
			<div className='home'>
				<section className='balance'>
					<h3 className='balance__name'>Баланс</h3>
					<div className='balance__numbers'>
						<h4 className='balance__number'>- UAH</h4>
						<h4 className='balance__number'>- USD</h4>
						<h4 className='balance__number'>- UER</h4>
					</div>
					<div className='balance__name balance__name_margin'>Готівка</div>
					<div className='balance__item'>
						<div className='balance__numbers'>
							<h4 className='balance__number'>- {balance[0]} UAH</h4>
							<h4 className='balance__number'>- {balance[1]} USD</h4>
							<h4 className='balance__number'>- {balance[2]} UER</h4>
						</div>
						<div onClick={() => dispatch(setPopup())} className='balance__btn'>
							редугавати
						</div>
					</div>
					<section className='balance__card'>
						<h3 className='balance__name'>Мої карти</h3>
						<ul className='balance__items'>
							{load ? (
								card.map((e, i) => (
									<li key={i} className='balance__item'>
										<h4 className='balance__number'>
											- Mono {e[0].num} {e[0].country}
										</h4>
										<h4 className='balance__btn'>редугавати</h4>
									</li>
								))
							) : (
								<h1>Загрузка...</h1>
							)}
						</ul>
					</section>
				</section>
				{addCard ? <Form /> : <Cards />}
				{popup ? <Popup /> : ''}
			</div>
		</>
	)
}

export default Home
