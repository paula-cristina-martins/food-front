import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container, Details, Main, Order, Ingredients } from "./styles";
import { Link, useParams } from "react-router-dom";
import { api } from "../../services/api";
import MakeOrderItem from "../../components/Foods/Order/MakeOrderItem";
import ImageFoods from "../../components/Foods/Image";
import { Button } from "../../components/Button";
import { useAuth } from "../../hooks/auth";
import { CheckRoleUser } from "../../utils/roles";
import { ButtonBack } from "../../components/ButtonBack";

export function ShowFood() {
	const { id } = useParams();
	const { user } = useAuth();

	const [foodDetails, setFoodDetails] = useState({});

	async function searchFoodDetails() {
		try {
			const response = await api.get(`foods/${id}`, {
				withCredentials: true,
			});
			setFoodDetails(response.data);
		} catch (error) {
			if (error.response) {
				alert(error.response.data.message);
			} else {
				alert("Não foi possível localizar informações do prato selecionado!");
			}
		}
	}

	useEffect(() => {
		searchFoodDetails();
	}, []);

	return (
		<Container>
			<Header />
			<ButtonBack />
			<Main>
				<div>
					<ImageFoods food={foodDetails} />
				</div>
				<div>
					<Details>
						{foodDetails.name}
						<p>{foodDetails.description}</p>
					</Details>
					<Ingredients>
						{foodDetails.ingredients?.map((ingredient, index) => {
							return <span key={index}>{ingredient}</span>;
						})}
					</Ingredients>
					<Order>
						{CheckRoleUser(user) ? (
							<Link to={`/update-food/${foodDetails.id}`}>
								<Button name={"Editar prato"} icon={""} onClick={() => {}} />
							</Link>
						) : (
							<MakeOrderItem foodId={foodDetails.id} foodPrice={foodDetails.price} showPrice />
						)}
					</Order>
				</div>
			</Main>
			<Footer />
		</Container>
	);
}
