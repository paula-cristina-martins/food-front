import { Container } from "./styles";

export function Button({ name, onClick, icon: Icon, ...rest }) {
	return (
		<Container type={"button"} onClick={onClick}>
			{Icon && (
				<span>
					<Icon size={20} />
				</span>
			)}
			{name}
		</Container>
	);
}
