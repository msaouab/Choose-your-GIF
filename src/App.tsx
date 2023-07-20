import { styled } from "styled-components";
import Form from "./pages/Home/Home";

const AppContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

function App() {
	return (
		<AppContainer>
			<Form />
		</AppContainer>
	);
}

export default App;