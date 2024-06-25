import { Container } from "./styles";

export function Button({ name, onClick, ...rest }) {
	return (
		<Container type={"button"} onClick={onClick}>
			{name}
		</Container>
	);
}
