import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container, Favorite, Main } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import ImageFoods from "../../components/Foods/Image";

export function FavoriteFood() {
	const [foodDetails, setFoodDetails] = useState([]);

	async function searchFoodFavorites() {
		try {
			const response = await api.get(`foods/favorites/search/user`, {
				withCredentials: true,
			});
			setFoodDetails(response.data);
		} catch (error) {
			if (error.response) {
				alert(error.response.data.message);
			} else {
				alert("Não há pratos favoritos!");
			}
		}
	}

	useEffect(() => {
		searchFoodFavorites();
	}, []);

	async function deleteFavoriteFood(id) {
		try {
			const response = await api.delete(`foods/favorites/${id}`, {
				withCredentials: true,
			});
			alert(response.data.message);
			window.location.reload();
		} catch (error) {
			if (error.response) {
				alert(error.response.data.message);
			} else {
				alert("Não foi possível excluir dos favoritos!");
			}
		}
	}

	return (
		<Container>
			<Header />
			<Main>
				<h1>Meus favoritos</h1>
				<Favorite>
					{foodDetails?.map((food, index) => {
						return (
							<div key={index}>
								<ImageFoods food={food} size={80} />
								<div>
									<p>{food.name}</p>
									<button onClick={() => deleteFavoriteFood(food.favorite_id)}>Remover dos favoritos</button>
								</div>
							</div>
						);
					})}
					{foodDetails.length == 0 && <div>Não há pratos favoritos!</div>}
				</Favorite>
			</Main>
			<Footer />
		</Container>
	);
}
