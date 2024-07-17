import { Container } from "./styles";
import { useState } from "react";

export function InputDate({ title, type, placeholder, value, onChange, autoComplete, ...rest }) {
	const [formattedValue, setFormattedValue] = useState(value);

	const formatInput = (value) => {
		value = value.replace(/\D/g, "");

		if (value.length > 2) {
			value = `${value.slice(0, 2)}/${value.slice(2, 4)}`;
		}

		return value;
	};

	const handleChange = (e) => {
		const inputValue = e.target.value;
		const formatted = formatInput(inputValue);
		setFormattedValue(formatted);
		onChange(e);
	};

	return (
		<Container>
			<label>{title}</label>
			<input
				type={type}
				value={formattedValue}
				onChange={handleChange}
				placeholder={placeholder}
				autoComplete={autoComplete}
				{...rest}
			/>
		</Container>
	);
}
