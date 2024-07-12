import { FiUpload } from "react-icons/fi";
import { Container } from "./styles";
import { useRef } from "react";

export function InputFile({ title, description, type, placeholder, value, setFile, autoComplete, ...rest }) {
	const inputRef = useRef(null);

	function handleDivClick() {
		inputRef.current.click();
	}

	function handleChange(event) {
		const file = event.target.files[0];
		setFile(file);
	}

	return (
		<Container>
			<label>{title}</label>
			<div onClick={handleDivClick}>
				<FiUpload />
				{description}
			</div>
			<input
				ref={inputRef}
				type={"file"}
				value={value}
				onChange={handleChange}
				placeholder={placeholder}
				autoComplete={autoComplete}
			/>
		</Container>
	);
}
