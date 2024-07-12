import { Container } from "./styles";

export function TextArea({ title, placeholder, value, onChange, autoComplete, ...rest }) {
	return (
		<Container>
			<label>{title}</label>
			<textarea value={value} onChange={onChange} placeholder={placeholder} autoComplete={autoComplete} rows={6} />
		</Container>
	);
}
