import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../../styles/deviceBreakpoints";

export const Container = styled.div`
	display: block;
	padding: 2rem 0;

	h1 {
		font-weight: 300;
		font-size: 2rem;
		padding-bottom: 2rem;
	}

	@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
		h1 {
			font-size: 1.8rem;
		}
	}
`;

export const Alert = styled.h3`
	font-weight: 300;
`;

export const CategoryFood = styled.div`
	position: relative;
	display: flex;
	align-items: center;
`;

export const DirectionCarousel = styled.div`
	cursor: pointer;
	z-index: 1;

	@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
		display: none;
	}
`;

export const Carousel = styled.div`
	display: flex;
	align-items: center;
	overflow-x: auto;
	scroll-snap-type: x mandatory;
	position: relative;

	&::-webkit-scrollbar {
		display: none;
	}
`;

export const CarouselDetails = styled.div`
	display: flex;
`;

export const CarouselItem = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	width: 20rem;
	margin: 0 1.6rem;
	padding: 1rem 1rem 1.6rem;

	background-color: ${({ theme }) => theme.COLORS.DARK_800};
	border-radius: 0.5rem;

	@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
		margin: 0 1rem;
		width: 15rem;
	}
`;

export const FoodTitle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	gap: 0.4rem;
	padding-top: 1.5rem;

	font-size: 1.5rem;
	font-weight: 400;

	color: ${({ theme }) => theme.COLORS.LIGHT_100};

	@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
		font-size: 1.2rem;
		gap: 0;
		width: 15rem;
	}
`;

export const FoodDetails = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-size: 0.9rem;
	font-weight: 300;
	font-family: "Roboto";
`;

export const FoodPrice = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	font-size: 2rem;
	font-weight: 400;
	font-family: "Roboto";

	color: ${({ theme }) => theme.COLORS.BLUE_200};

	@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
		font-size: 1.5rem;
	}
`;
