import { Modal } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { styled } from "styled-components";

const ImgContainer = styled.div`
	border: 5px solid #fff;
	border-radius: 15px;
	width: 350px;
	& > img {
		aspect-ratio: 1;
		width: 350px;
		height: 350px;
		border-radius: 10px;
		width: 100%;
		max-width: 100%;
		object-fit: cover;
	}
	@media (max-width: 400px) {
		width: 80%;
	}
`;

const ModalContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 400px;
	height: auto;
	border: 5px solid #000;
	& > img {
		width: 100%;
		max-width: 100%;
		object-fit: cover;
		box-sizing: border-box;
	}
	@media (max-width: 400px) {
		width: 80%;
	}
`;

const ImgGif = ({ source, alt }: { source: string; alt?: string }) => {
	const [loading, setLoading] = useState<boolean>(true);
	const [showModal, setShowModal] = useState<boolean>(false);

	const handleLoad = () => {
		setLoading(false);
	};

	const handleError = () => {
		setLoading(false);
	};

	const handleClick = () => {
		setShowModal(!showModal);
	};

	return (
		<ImgContainer onClick={handleClick}>
			{loading && (
				<Stack>
					<Skeleton
						variant="rectangular"
						width={350}
						height={350}
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

			{showModal && (
				<Modal open={showModal} >
					<ModalContent>
						<img src={source} alt={alt} />
					</ModalContent>
				</Modal>
			)}
		</ImgContainer>
	);
};

export default ImgGif;
