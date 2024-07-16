import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../../styles/deviceBreakpoints";

export const Container = styled.div`
	display: block;

	h1 {
		font-weight: 400;
		padding: 0.5rem 0 3rem;
	}

	div {
		padding-bottom: 15rem;
	}

	@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
		display: ${({ theme, $checkMobile }) => ($checkMobile ? "none" : "")};
	}
`;

export const OrderItems = styled.div`
	display: block;

	div {
		display: flex;
		align-items: center;
		padding-bottom: 2rem;

		div {
			display: block;
		}

		gap: 1rem;

		span {
			color: ${({ theme }) => theme.COLORS.LIGHT_400};
			padding: 0 0.8rem;
			font-size: 0.8rem;
		}

		button {
			border: 0;
			background-color: transparent;
			color: ${({ theme }) => theme.COLORS.RED_200};
			font-size: 0.8rem;
		}
	}
`;

export const Amount = styled.div`
	font-size: 1.2rem;
`;

export const ButtonMobile = styled.section`
	display: none;
	justify-content: end;
	width: 100%;

	border: 0;
	background-color: transparent;

	@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
		display: flex;
	}
`;
