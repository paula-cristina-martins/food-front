import { Fragment, useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container, Main } from "./styles";
import { api } from "../../services/api";
import { Button } from "../../components/Button";
import { PiHeart, PiHeartFill, PiPlus } from "react-icons/pi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { RiSubtractFill } from "react-icons/ri";
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
