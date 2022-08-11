import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'
import './cards.Module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setPopup, setAddCard, setCardUser } from '../redux/slice/fullSlice'
import MyLoader from '../loader'
const Cards = () => {
	const [card, setCard] = useState([])
	const [load, setLoad] = useState(false)
	const [openNum, setOpenNum] = useState()
	const dispatch = useDispatch()
	useEffect(() => {
		axios.get('https://62f40474a84d8c9681314082.mockapi.io/cards').then(res => {
			setLoad(false)
			setCard(res.data)
			setLoad(true)
		})
	}, [])
	useEffect(() => {
		dispatch(
			setCardUser(
				card.map(e => [{ num: e[0].cardBalance, country: e[0].select }])
			)
		)
	}, [load])
	return (
		<section className='setting'>
			<div className='setting__buttons'>
				<button className='setting__btn' onClick={() => dispatch(setAddCard())}>
					Додати карту
				</button>
				<button className='setting__btn' onClick={() => dispatch(setPopup())}>
					Додати готівку
				</button>
			</div>
			<div className='setting__cards'>
				{load ? (
					card.map((e, i) => (
						<div key={i} className='setting__item'>
							<div className='card'>
								<div className='card__text'>
									<div className='card__item'>
										<h3 className='card__name'>Mono</h3>
										<h4 className='card__number'>
											{e[0].cardBalance} {e[0].select}
										</h4>
									</div>
									<div className='card__item'>
										<h3 className='card__name'>
											{Number(e[0].cardNumber.slice(0, 1)) === 4
												? 'VISA'
												: 'none'}
										</h3>
										<p className='card__desc'>debit</p>
									</div>
								</div>
								<div className='card__code'>
									<h3
										onClick={() => openNum === i? setOpenNum(): setOpenNum(i)}
										className='card__number'
									>
										{openNum != i
											? e[0].cardNumber.slice(0, 4) +
											  ' **** **** ' +
											  e[0].cardNumber.slice(12, 16)
											: e[0].cardNumber}
									</h3>
									<button className='card__btn'>copy</button>
								</div>
								<h6 className='card__date'>
									{String(e[0].carDate).slice(1, 3)}/
									{String(e[0].carDate).slice(2, 4)}
								</h6>
							</div>
							<button className='setting__delete'>видалити</button>
						</div>
					))
				) : (
					<MyLoader />
				)}
			</div>
		</section>
	)
}

export default Cards
