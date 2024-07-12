import { FiPlus, FiX } from "react-icons/fi";
import { Container } from "./styles";

export function IngredientItem({ isNew, value, placeholder, onClick, onChange, ...rest }) {
	return (
		<Container $isNew={isNew ? isNew.toString() : ""}>
			<input
				type="text"
				value={value}
				readOnly={!isNew}
				placeholder={isNew ? placeholder : ""}
				onChange={(e) => onChange(e.target.value)}
				{...rest}
			/>
			<button type="button" onClick={onClick} className="button">
				{isNew ? <FiPlus /> : <FiX />}
			</button>
		</Container>
	);
}
