import styled from "styled-components";
export const GifStyle = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	gap: 2rem;
	& > .imgContainer {
		border: 2px solid #fff;
		& > img {
			width: 300px;
			/* aspect-ratio: 1; */
			max-width: 100%;
			box-sizing: border-box;
		}
	}
	@media (max-width: 300px) {
		& > .imgContainer {
			width: 80%;
		}
	}
`;
