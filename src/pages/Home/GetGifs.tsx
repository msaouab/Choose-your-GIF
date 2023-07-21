import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import axios from "axios";
import debounce from "lodash.debounce";
import { useEffect } from "react";
import { setGif } from "../../store/GifSlice";
import ImgGif from "../../components/ImgGif";
import styled from "styled-components";

const API_KEY = "UC6QeKH1sTZwo7OgHc1oAJJu4JFV59TJ";

interface Gif {
	images: {
		original: {
			url: string;
		};
	};
	title: string;
}

const GifStyle = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	gap: 1rem;
	& > .imgContainer {
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

const GetGifs = () => {
	const dispatch = useDispatch();
	const gif = useSelector((state: RootState) => state.gif);
	const input = useSelector((state: RootState) => state.input);

	const getData = (input: string) => {
		axios
			.get<{ data: Gif[] }>(
				`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${input}&limit=25&offset=0&rating=g&lang=e`
			)
			.then((response) => {
				dispatch(setGif(response.data.data));
			})
			.catch((error: Error) => {
				console.error("Error fetching GIFs:", error);
			});
	};

	const debouncedGetData = debounce(getData, 500);

	useEffect(() => {
		debouncedGetData(input);
		return () => {
			debouncedGetData.cancel();
		};
	}, [input]);

	return (
		<GifStyle>
			{gif &&
				gif.map((item: Gif, index: number) => (
					<div className="imgContainer" key={index}>
						<ImgGif source={item.images.original.url} alt={item.title} />
					</div>
				))}
		</GifStyle>
	);
};

export default GetGifs;
