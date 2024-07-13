import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container, Favorite, Main } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import ImageFoods from "../../components/Foods/Image";

export function FavoriteFoodAdmin() {
	const [foodDetails, setFoodDetails] = useState([]);
	console.log(foodDetails);
	async function searchFoodFavorites() {
		try {
			const response = await api.get(`foods/favorites/search/count`, {
				withCredentials: true,
			});
			setFoodDetails(response.data);
		} catch (error) {
			if (error.response) {
				alert(error.response.data.message);
			} else {
				alert("Não há pratos favoritos pelos usuários!");
			}
		}
	}

	useEffect(() => {
		searchFoodFavorites();
	}, []);

	async function deleteFavoriteFood(id) {
		try {
			const response = await api.delete(`foods/favorites/exclusion/${id}`, {
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
				<h1>Favoritos - Quantidade por usuários</h1>
				<Favorite>
					{foodDetails?.map((food, index) => {
						return (
							<div key={index}>
								<ImageFoods food={food} size={80} />
								<div>
									<p>Favoritado: {food.count} vez(es)</p>
									<p>{food.name}</p>
									<button onClick={() => deleteFavoriteFood(food.id)}>Remover dos usuários</button>
								</div>
							</div>
						);
					})}
					{foodDetails.length == 0 && <div>Não há pratos favoritos pelos usuários!</div>}
				</Favorite>
			</Main>
			<Footer />
		</Container>
	);
}
