import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './form.Module.scss'
import { useDispatch } from 'react-redux';
import { setAddCard } from '../redux/slice/fullSlice'
import axios from 'axios'
const Form = () => {
	const dispatch = useDispatch()
	const [card, setCard] = useState('')
	const {
		register,
		formState:{
			errors
		},
		handleSubmit,
		reset
	} = useForm({
		mode:"onChange"
	})
	const onSubmit = (data) => {
		setCard([data])
		reset()
	}
	useEffect(() => {
		if (Array.isArray(card)) {
			axios.post('https://62f40474a84d8c9681314082.mockapi.io/cards', card)
		}
	}, [card])
	return (
		<section className='form'>
			<h2 className='form__title'>Додавання карти</h2>
			<form className='form__content' onSubmit={handleSubmit(onSubmit)}>
				<input
					type='number'
					placeholder='Номер карти'
					{...register('cardNumber', {
						required: '*Поле обязательно к заполнению!',
						maxLength: {
							value: 16,
							message: 'Должно быть 16 символов',
						},
						minLength: {
							value: 16,
							message: 'Должно быть 16 символов',
						},
					})}
					className='form__input'
				/>
				<p className='form__error'>{errors?.cardNumber?.message}</p>
				<div className='form__items'>
					<input
						placeholder='exp data'
						className='form__input'
						type='number'
						{...register('carDate', {
							required: '*Поле обязательно к заполнению!',
							maxLength: {
								value: 4,
								message: 'Должно быть 4 символов',
							},
							minLength: {
								value: 4,
								message: 'Должно быть 4 символов',
							},
						})}
					/>
					<p className='form__error'>{errors?.carDate?.message}</p>
					<input
						placeholder='CVV'
						className='form__input'
						{...register('cardPassword', {
							required: '*Поле обязательно к заполнению!',
							maxLength: {
								value: 3,
								message: 'Должно быть 3 символов',
							},
							minLength: {
								value: 3,
								message: 'Должно быть 3 символов',
							},
						})}
						type='password'
					/>
					<p className='form__error'>{errors?.cardPassword?.message}</p>
				</div>
				<input
					placeholder='Имя владельца'
					className='form__input'
					type='text'
				/>
				<p className='form__error'></p>
				<div className='form__items'>
					<input
						placeholder='Баланс'
						className='form__input'
						{...register('cardBalance', {
							required: '*Поле обязательно к заполнению!',
							minLength: {
								value: 1,
								message: 'Минимум должно быть 1 символов',
							},
						})}
						type='text'
					/>
					<p className='form__error'>{errors?.cardBalance?.message}</p>
					<select {...register('select')} className='form__input'>
						<option value="UAH">UAH</option>
						<option value="USD">USD</option>
						<option value="EUR">EUR</option>
					</select>
				</div>
				<div className='form__buttons'>
					<button type='submit' className='form__btn'>
						Додати карту
					</button>
					<button
						type='reset'
						onClick={() => dispatch(setAddCard())}
						className='form__btn'
					>
						Скасувати
					</button>
				</div>
			</form>
		</section>
	)
};

export default Form;