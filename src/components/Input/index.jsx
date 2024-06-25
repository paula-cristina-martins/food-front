import { Container } from "./styles";

export function Input({ title, type, placeholder, value, onChange, ...rest }) {
	return (
		<Container>
			<label>{title}</label>
			<input type={type} value={value} onChange={onChange} placeholder={placeholder} />
		</Container>
	);
}
