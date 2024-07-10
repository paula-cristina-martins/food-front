import { useEffect } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container, Main } from "./styles";
import { CategoryFoods } from "../../components/Foods/Category";
import { useConsultFood } from "../../hooks/consultFood";
import { Banner } from "../../components/Banner";

export function Home() {
	const { foodsByCategory, searchFoodsByCategory } = useConsultFood();

	useEffect(() => {
		searchFoodsByCategory();
	}, []);

	return (
		<Container>
			<Header />
			<Main>
				<Banner />
				<CategoryFoods title={"Refeições"} category={foodsByCategory?.meals} />
				<CategoryFoods title={"Sobremesas"} category={foodsByCategory?.desserts} />
				<CategoryFoods title={"Bebidas"} category={foodsByCategory?.drinks} />
			</Main>
			<Footer />
		</Container>
	);
}
