import { Ingredients } from "../../Ingredients";
import { Input } from "../../Input";
import { InputFile } from "../../InputFile";
import { Select } from "../../Select";
import { TextArea } from "../../TextArea";
import { Container, Form2, Form3, Space } from "./styles";

export function FormsFoods({
	title,
	setPhoto,
	name,
	setName,
	category,
	setCategory,
	ingredients,
	newIngredient,
	setNewIngredient,
	setIngredients,
	price,
	setPrice,
	description,
	setDescription,
}) {
	return (
		<Container>
			<h1>{title}</h1>
			<Form3>
				<Space>
					<InputFile title={"Imagem do prato"} description={"Selecione imagem"} setFile={setPhoto} />
				</Space>
				<Space>
					<Input
						title={"Nome"}
						type={"text"}
						placeholder={"Ex: Salada Ceasar"}
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</Space>
				<Space>
					<Select title={"Categoria"} value={category} onChange={(e) => setCategory(e.target.value)} />
				</Space>
			</Form3>
			<Form2>
				<Space>
					<Ingredients
						isNew
						title={"Ingredientes"}
						ingredients={ingredients}
						newIngredient={newIngredient}
						setNewIngredient={setNewIngredient}
						setIngredients={setIngredients}
					/>
				</Space>
				<Space>
					<Input
						title={"Preço"}
						type={"number"}
						placeholder={"R$ 00,00"}
						value={price}
						onChange={(e) => setPrice(e.target.value)}
					/>
				</Space>
			</Form2>
			<Space>
				<TextArea
					title={"Descrição"}
					placeholder={"Fale brevemente sobre o prato, seus ingredientes e composição"}
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
			</Space>
		</Container>
	);
}
