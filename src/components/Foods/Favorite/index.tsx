import { PiHeart, PiHeartFill, PiPencilSimple } from "react-icons/pi";
import { Container } from "./styles";
import { api } from "../../../services/api";
import { Fragment } from "react/jsx-runtime";
import { useAuth } from "../../../hooks/auth";
import { CheckRoleUser } from "../../../utils/roles";

export default function FavoriteFoods({ food }) {
	const { user } = useAuth();

	async function insertFavoriteFood(id) {
		try {
			const response = await api.post("foods/favorites", { food: id }, { withCredentials: true });
			alert(response.data.message);
			window.location.reload();
		} catch (error) {
			if (error.response) {
				alert(error.response.data.message);
			} else {
				alert("Não foi possível favoritar esse prato!");
			}
		}
	}

	async function deleteFavoriteFood(id) {
		try {
			const response = await api.delete(`foods/favorites/${id}`, { withCredentials: true });
			alert(response.data.message);
			window.location.reload();
		} catch (error) {
			if (error.response) {
				alert(error.response.data.message);
			} else {
				alert("Não foi possível excluir dos favoritos esse prato!");
			}
		}
	}

	return (
		<Fragment>
			{!CheckRoleUser(user) ? (
				<Container
					onClick={() =>
						food.favorite.status == true ? deleteFavoriteFood(food.favorite.id) : insertFavoriteFood(food.id)
					}
				>
					{food.favorite.status == true ? <PiHeartFill /> : <PiHeart />}
				</Container>
			) : (
				<Container>
					<PiPencilSimple />
				</Container>
			)}
		</Fragment>
	);
}
