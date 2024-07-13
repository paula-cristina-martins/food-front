import React, { useRef, useState, useEffect } from "react";
import {
	Carousel,
	CarouselItem,
	Container,
	CarouselDetails,
	GradientOverlay,
	FoodTitle,
	FoodDetails,
	FoodPrice,
	DirectionCarousel,
	CategoryFood,
	Alert,
} from "./styles";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import FavoriteFoods from "../Favorite";
import MakeOrderItem from "../Order/MakeOrderItem";
import ImageFoods from "../Image";
import { useAuth } from "../../../hooks/auth";
import { CheckRoleUser } from "../../../utils/roles";
import { Link } from "react-router-dom";

export function CategoryFoods({ title, category }) {
	const { user } = useAuth();
	const carouselRef = useRef(null);

	const [isAtStart, setIsAtStart] = useState(true);
	const [isAtEnd, setIsAtEnd] = useState(false);

	function checkScrollPosition() {
		const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
		setIsAtStart(scrollLeft === 0);
		setIsAtEnd(scrollLeft + clientWidth === scrollWidth);
	}

	useEffect(() => {
		const carousel = carouselRef.current;
		if (carousel) {
			carousel.addEventListener("scroll", checkScrollPosition);
			checkScrollPosition();
			return () => carousel.removeEventListener("scroll", checkScrollPosition);
		}
	}, []);

	function scrollLeft() {
		if (carouselRef.current) {
			carouselRef.current.scrollBy({ left: -350, behavior: "smooth" });
		}
	}

	function scrollRight() {
		if (carouselRef.current) {
			carouselRef.current.scrollBy({ left: 350, behavior: "smooth" });
		}
	}

	return (
		<Container>
			<h1>{title}</h1>
			{category == undefined ? (
				<Alert>Não foi encontrado pratos associados a essa categoria!</Alert>
			) : (
				<CategoryFood>
					<DirectionCarousel onClick={scrollLeft}>
						<MdOutlineKeyboardArrowLeft />
					</DirectionCarousel>
					<Carousel ref={carouselRef}>
						<CarouselDetails>
							{category?.map((food) => (
								<CarouselItem key={food.id}>
									<FavoriteFoods food={food} />
									<Link to={`/show-food/${food.id}`}>
										<ImageFoods food={food} size={140} />
										<FoodTitle>
											<p>{food.name}</p>
											<MdOutlineKeyboardArrowRight />
										</FoodTitle>
									</Link>
									<FoodDetails>{food.description}</FoodDetails>
									<FoodPrice>R$ {food.price.toLocaleString("pr-br")}</FoodPrice>
									{!CheckRoleUser(user) && <MakeOrderItem foodId={food.id} foodPrice={food.price} />}
								</CarouselItem>
							))}
						</CarouselDetails>
					</Carousel>
					<DirectionCarousel onClick={scrollRight}>
						<MdOutlineKeyboardArrowRight />
					</DirectionCarousel>
					{!isAtStart && <GradientOverlay $left={"true"} />}
					{!isAtEnd && <GradientOverlay $right={"true"} />}
				</CategoryFood>
			)}
		</Container>
	);
}
