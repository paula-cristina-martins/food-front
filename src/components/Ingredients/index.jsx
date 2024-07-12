import { FiPlus, FiX } from "react-icons/fi";
import { Container, Items } from "./styles";
import { IngredientItem } from "./Item";

export function Ingredients({ ingredients, isNew, newIngredient, setNewIngredient, setIngredients, title, ...rest }) {
	function handleAddIngredient() {
		if (newIngredient != "") {
			setIngredients((prevState) => [...prevState, newIngredient]);
			setNewIngredient("");
		} else {
			alert("É necessário inserir um ingrediente para poder adicionar.");
		}
	}

	function handleRemoveIngredient(deleted) {
		setIngredients((prevState) => prevState.filter((ingredient) => ingredient !== deleted));
	}

	return (
		<Container>
			<label>{title}</label>
			<Items>
				<span className="ingredients">
					{ingredients.map((ingredient, index) => {
						return <IngredientItem key={index} value={ingredient} onClick={() => handleRemoveIngredient(ingredient)} />;
					})}
					<IngredientItem
						isNew
						placeholder="Adicionar"
						value={newIngredient}
						onChange={setNewIngredient}
						onClick={handleAddIngredient}
					/>
				</span>
			</Items>
		</Container>
	);
}
