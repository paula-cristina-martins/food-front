import { Container } from "./styles";

export function ButtonSecondary({ name, onClick, ...rest }) {
	return (
		<Container type={"button"} onClick={onClick}>
			{name}
		</Container>
	);
}
