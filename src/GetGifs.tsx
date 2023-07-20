import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "./store";
import axios from "axios";
import debounce from "lodash.debounce";
import { useEffect } from "react";

const API_KEY = "UC6QeKH1sTZwo7OgHc1oAJJu4JFV59TJ";

const GifStyle = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	gap: 2rem;
	& > .imgContainer {
		border: 2px solid #fff;
		& > img {
			width: 300px;
			aspect-ratio: 1;
			max-width: 100%;
			box-sizing: border-box;
		}
		& > button {
			background: transparent;
			border: none;
			color: #fff;
			cursor: pointer;
			position: absolute;
			left: 150px;
			top: 90%;
		}
	}
	@media (max-width: 300px) {
		& > .imgContainer {
			width: 80%;
		}
	}
`;

interface Gif {
	images: {
		original: {
			url: string;
		};
	};
	title: string;
}

const GetGifs = (props: { input: string }) => {
	const dispatch = useDispatch();
	const input = props.input;

	const gif = useSelector((state: RootState) => state.gif);

	const getData = (input: string) => {
		console.log("input", input);
		axios
			.get(
				`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${input}&limit=25&offset=0&rating=g&lang=e`
			)
			.then((response) => {
				dispatch({ type: "gif/setGif", payload: response.data.data });
			})
			.catch((error: Error) => {
				console.error("Error fetching GIFs:", error);
			});
	};

	const debouncedGetData = debounce(getData, 500);

	useEffect(() => {
		debouncedGetData(input);
		return () => debouncedGetData.cancel();
	}, [input, debouncedGetData]);

	return (
		<GifStyle>
			{gif &&
				gif.map((item: Gif, index: number) => (
					<a
						className="imgContainer"
						key={index}
						href={item.images.original.url}
						download={`gif_${index}`}
						target="_blanc"
					>
						<img src={item.images.original.url} alt={item.title} />
					</a>
				))}
		</GifStyle>
	);
};

export default GetGifs;
