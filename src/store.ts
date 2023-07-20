import { configureStore } from "@reduxjs/toolkit";
import gifReducer from './GifSlice';

const store = configureStore({
	reducer: gifReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
