import { configureStore } from "@reduxjs/toolkit";
import full from './slice/fullSlice'


export const store = configureStore({
	reducer:{
		full
	}
})