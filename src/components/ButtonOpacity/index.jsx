import { Container } from "./styles";

export function ButtonOpacity({ name, onClick, ...rest }) {
	return (
		<Container type={"button"} onClick={onClick}>
			{name}
		</Container>
	);
}
