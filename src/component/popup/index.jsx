import React, { useState } from 'react'
import './popup.Module.scss'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { setPopup } from '../redux/slice/fullSlice'
import { useSelector } from 'react-redux/es/exports'
import { setBalance } from '../redux/slice/fullSlice.js'
const Popup = () => {
	const balance = useSelector(event => event.full.balance)
	const [select, setSelect] = useState(1)
	const dispatch = useDispatch()
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm({
		mode: 'onChange',
	})
	const onSubmit = data => {
		dispatch(
			setBalance(
				balance.map((e, i) =>
					i === Number(select) - 1 ? Number(e) + Number(data.number) : e
				)
			)
		)
		reset()
	}
	return (
		<div className='popup'>
			<form onSubmit={handleSubmit(onSubmit)} className='popup__form'>
				<div className='popup__items'>
					<input
						placeholder='Сума'
						type='number'
						className='popup__input'
						{...register('number', {
							required: '*Минимум одна цифра',
							minLength: 1,
						})}
					/>
					<p>{errors?.number?.message}</p>
					<select
						name=''
						onChange={event => setSelect(event.target.value)}
						className='popup__input'
					>
						<option value='1'>UAH</option>
						<option value='2'>USD</option>
						<option value='3'>EUR</option>
					</select>
				</div>
				<div className='popup__buttons'>
					<button className='popup__btn' type='submit'>
						Зберегти
					</button>
					<button className='popup__btn' onClick={() => dispatch(setPopup())}>
						Скасувати
					</button>
				</div>
			</form>
		</div>
	)
}

export default Popup
