import { Container } from "./styles";

export function Input({ title, type, placeholder, value, onChange, autoComplete, ...rest }) {
	return (
		<Container>
			<label>{title}</label>
			<input type={type} value={value} onChange={onChange} placeholder={placeholder} autoComplete={autoComplete} />
		</Container>
	);
}
