import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";


interface Gif {
	images: {
		original: {
			url: string;
		};
	};
	title: string;
}

interface GifState {
	input: string;
	gif: Gif[] | null;
}

const initialState: GifState = {
	input: "",
	gif: null,
};

const gifSlice = createSlice({
	name: "gif",
	initialState,
	reducers: {
		setInput: (state, action: PayloadAction<string>) => {
			state.input = action.payload;
		},
		setGif: (state, action: PayloadAction<Gif[]>) => {
			state.gif = action.payload;
		},
	},
});

export const { setInput, setGif } = gifSlice.actions;
export default gifSlice.reducer;
