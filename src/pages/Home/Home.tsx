import styled from "styled-components";
import { useDispatch } from "react-redux";

const FromStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-bottom: 5rem;
	gap: 2rem;
	& > h1 {
		color: #fff;
		border: 1px solid #fff;
		padding: 1rem 1rem;
		text-transform: uppercase;
		margin-top: 2rem;
		text-align: center;
	}
	& > form {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.2rem;
		& > input {
			padding: 1rem;
			font-size: 1rem;
			border: 1px solid #fff;
			background: rgba(217, 217, 217, 0);
			color: #d0d6f9;
			width: 40em;
			outline: none;
		}
	}
	@media (max-width: 768px) {
		& > h1 {
			font-size: 1.5rem;
			width: 100%;
		}
		width: 60%;
		& > form {
			width: 100%;
			gap: 1rem;
		}
	}
`;

const Form = () => {
	const dispatch = useDispatch();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		const value = e.target.value;
		dispatch({ type: "gif/setInput", payload: value });
	};

	return (
		<FromStyle>
			<h1>Choose your GIFs</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="search"
					name="search"
					id="search"
					onChange={handleChange}
					placeholder="Find your GIF"
					autoComplete="off"
				/>
			</form>
		</FromStyle>
	);
};

export default Form;
