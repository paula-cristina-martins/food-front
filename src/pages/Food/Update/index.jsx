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

export function UpdateFood() {
	const navigate = useNavigate();
	const { id } = useParams();

	const [name, setName] = useState("");
	const [category, setCategory] = useState("");
	const [price, setPrice] = useState("");
	const [description, setDescription] = useState("");

	const [photo, setPhoto] = useState("");

	const [ingredients, setIngredients] = useState([]);
	const [newIngredient, setNewIngredient] = useState("");

	async function searchFoodDetails() {
		if (id) {
			try {
				const response = await api.get(`foods/${id}`, {
					withCredentials: true,
				});
				setName(response.data.name);
				setCategory(response.data.category);
				setPrice(response.data.price);
				setDescription(response.data.description);
				setIngredients(response.data.ingredients);
			} catch (error) {
				if (error.response) {
					alert(error.response.data.message);
				} else {
					alert("Não foi possível localizar informações do prato selecionado!");
				}
			}
		}
	}

	useEffect(() => {
		searchFoodDetails();
	}, []);

	async function updateFoodDetails() {
		if (id) {
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
				const response = await api.put(`foods/${id}`, payload, {
					withCredentials: true,
				});

				if (photo) {
					updateFoodPhoto();
				}

				alert(response.data.message);
				window.location.reload();
			} catch (error) {
				if (error.response) {
					alert(error.response.data.message);
				} else {
					alert("Não foi possível atualizar o prato!");
				}
			}
		}
	}

	async function updateFoodPhoto() {
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

	async function deleteFood() {
		if (id) {
			try {
				const response = await api.delete(`foods/${id}`, {
					withCredentials: true,
				});
				alert(response.data.message);
				navigate("/");
			} catch (error) {
				if (error.response) {
					alert(error.response.data.message);
				} else {
					alert("Não foi possível apagar o prato!");
				}
			}
		}
	}

	return (
		<Container>
			<Header />
			<ButtonBack />
			<FormsFoods
				title={"Editar prato"}
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
				<ButtonOpacity name={"Excluir prato"} onClick={deleteFood} />
				<ButtonSecondary name={"Salvar alterações"} onClick={updateFoodDetails} />
			</Buttons>
			<Footer />
		</Container>
	);
}
