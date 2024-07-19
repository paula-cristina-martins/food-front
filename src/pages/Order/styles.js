import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
	height: 100vh;
	width: 100%;
`;

export const Main = styled.main`
	display: grid;
	grid-template-columns: repeat(2, 1fr);

	padding: 1.7rem 7.5rem;
	gap: 4.7rem;
	margin-bottom: 35rem;

	@media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
		padding: 1.7rem 3.5rem;
		gap: 3rem;
	}

	@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
		display: block;
		justify-content: center;
		padding: 3.5rem 2rem 1.5rem;
	}
`;

export const OrderItems = styled.div`
	display: block;

	> div {
		display: flex;
		align-items: center;
		padding-bottom: 2rem;

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
