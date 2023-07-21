import { styled } from "styled-components";
import Form from "./pages/Home/Home";
import GetGifs from "./pages/Home/GetGifs";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";

const AppContainer = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	&.active {
		justify-content: flex-start;
	}
`;

function App() {
	const gif = useSelector((state: RootState) => state.gif);
	const gifLength = gif ? gif.length : 0;

	return (
		<AppContainer className={`${gifLength ? "active" : ""}`}>
			<Form />
			<GetGifs />
		</AppContainer>
	);
}

export default App;
