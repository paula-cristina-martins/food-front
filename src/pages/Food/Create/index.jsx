import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../../services/api";
import { Container } from "../styles";
import { Header } from "../../../components/Header";
import { ButtonBack } from "../../../components/ButtonBack";
import { FormsFoods } from "../../../components/Foods/Forms";
import { Buttons } from "./styles";
import { ButtonOpacity } from "../../../components/ButtonOpacity";
import { ButtonSecondary } from "../../../components/ButtonSecondary";
import { Footer } from "../../../components/Footer";

export function CreateFood() {
	const navigate = useNavigate();

	const [name, setName] = useState("");
	const [category, setCategory] = useState("");
	const [price, setPrice] = useState("");
	const [description, setDescription] = useState("");

	const [photo, setPhoto] = useState("");

	const [ingredients, setIngredients] = useState([]);
	const [newIngredient, setNewIngredient] = useState("");

	async function createFoodDetails() {
		if (name == "" || category == "" || price == 0 || description == 0 || ingredients.length == 0) {
			return alert("Verifique se todos os campos estão preenchidos!");
		}

		const payload = {
			name: name,
			category: category,
			price: price,
			description: description,
			ingredients: ingredients,
		};

		try {
			const response = await api.post("foods", payload, {
				withCredentials: true,
			});

			if (photo) {
				updateFoodPhoto(response.data.id);
			}

			alert(response.data.message);
			navigate("/");
		} catch (error) {
			if (error.response) {
				alert(error.response.data.message);
			} else {
				alert("Não foi possível cadastrar o prato!");
			}
		}
	}

	async function updateFoodPhoto(id) {
		if (photo) {
			const filePhoto = new FormData();
			filePhoto.append("photo", photo);

			try {
				const response = await api.patch(`foods/photo/${id}`, filePhoto, {
					withCredentials: true,
				});
			} catch (error) {
				if (error.response) {
					alert(error.response.data.message);
				} else {
					alert("Não foi possível atualizar a imagem do prato!");
				}
			}
		}
	}

	return (
		<Container>
			<Header />
			<ButtonBack />
			<FormsFoods
				title={"Adicionar prato"}
				setPhoto={setPhoto}
				name={name}
				setName={setName}
				category={category}
				setCategory={setCategory}
				ingredients={ingredients}
				newIngredient={newIngredient}
				setNewIngredient={setNewIngredient}
				setIngredients={setIngredients}
				price={price}
				setPrice={setPrice}
				description={description}
				setDescription={setDescription}
			/>
			<Buttons>
				<ButtonSecondary name={"Salvar alterações"} onClick={createFoodDetails} />
			</Buttons>
			<Footer />
		</Container>
	);
}
