import { PiBowlFoodBold } from "react-icons/pi";
import { Container } from "./styles";
import { api } from "../../../services/api";
import { useEffect, useState } from "react";

export default function ImageFoods({ food }) {
	const [foodPhoto, setFoodPhoto] = useState(null);

	async function showFoodPhoto(photo) {
		try {
			const response = await api.get(`files/${photo}`, { withCredentials: true, responseType: "blob" });
			const imageUrl = URL.createObjectURL(response.data);
			setFoodPhoto(imageUrl);
		} catch (error) {
			if (error.response) {
				alert(error.response.data.message);
			} else {
				alert("Não foi possível localizar a imagem desse prato!");
			}
		}
	}

	useEffect(() => {
		if (food && food.photo) {
			showFoodPhoto(food.photo);
		}
	}, [food]);

	return <Container>{foodPhoto ? <img src={foodPhoto} alt={food.name} /> : <PiBowlFoodBold />}</Container>;
}
