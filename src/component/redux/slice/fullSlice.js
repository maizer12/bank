import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	popup : false,
	addCard: false,
	balance: [1000, 5, 6],
	card: []
}

export const fullSlice = createSlice({
	name: 'full',

	initialState,
	reducers: {
		setPopup: state => {
			state.popup = !state.popup
		},
		setAddCard: state => {
			state.addCard = !state.addCard
		},
		setBalance: (state, action) => {
			state.balance = action.payload
		},
		setCardUser: (state, action) => {
			state.card = action.payload
		},
	},
})
export const { setPopup, setAddCard, setBalance, setCardUser } = fullSlice.actions
export default fullSlice.reducer
