import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { styled } from "styled-components";

const ImgContainer = styled.div`
	border: 5px solid #fff;
	width: 350px;
	& > img {
		width: 100%;
		aspect-ratio: 1;
		max-width: 100%;
		object-fit: cover;
	}
	@media (max-width: 400px) {
		width: 80%;
	}
`;

const ImgGif = ({ source, alt }: { source: string; alt?: string }) => {
	const [loading, setLoading] = useState<boolean>(true);

	const handleLoad = () => {
		setLoading(false);
	};

	const handleError = () => {
		setLoading(false);
	};

	return (
		<ImgContainer>
			{loading && (
				<Stack>
					<Skeleton
						variant="rectangular"
						width={210}
						height={118}
						animation="wave"
					/>
				</Stack>
			)}
			<img
				src={source}
				alt={alt}
				onLoad={handleLoad}
				onError={handleError}
				style={{ display: loading ? "none" : "block" }}
			/>
		</ImgContainer>
	);
};

export default ImgGif;
