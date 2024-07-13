import { PiBowlFoodBold } from "react-icons/pi";
import { Container } from "./styles";
import { api } from "../../../services/api";
import { useEffect, useState } from "react";

export default function ImageFoods({ food, size }) {
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

	return (
		<Container>
			{foodPhoto ? (
				<img src={foodPhoto} width={size ?? 264} height={size ?? 264} alt={food.name} />
			) : (
				<PiBowlFoodBold size={size ?? 264} />
			)}
		</Container>
	);
}
