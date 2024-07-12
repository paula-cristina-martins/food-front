import { FOOD_CATEGORY } from "../../utils/foodCategory";
import { Container } from "./styles";

export function Select({ title, onChange, value, autoComplete, ...rest }) {
	return (
		<Container>
			<label>{title}</label>
			<select onChange={onChange} value={value}>
				<option>Selecione</option>
				<option value={FOOD_CATEGORY.DRINKS}>Bebidas</option>
				<option value={FOOD_CATEGORY.MEALS}>Refeição</option>
				<option value={FOOD_CATEGORY.DESSERTS}>Sobremesa</option>
			</select>
		</Container>
	);
}
