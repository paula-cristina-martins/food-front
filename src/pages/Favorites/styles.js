import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
	height: 100vh;
	width: 100%;
`;

export const Main = styled.main`
	display: block;
	align-items: center;
	padding: 1.7rem 7.5rem;
	gap: 3rem;
	margin-bottom: 40rem;

	> h1 {
		font-weight: 400;
		padding-bottom: 1rem;
		padding: 1rem 0 3rem;
	}

	@media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
		padding: 1.7rem 3.5rem;
	}

	@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
		display: block;
		justify-content: center;
		padding: 3.5rem 2rem 1.5rem;
	}
`;

export const Favorite = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);

	> div {
		display: flex;
		align-items: center;
		padding-bottom: 3rem;

		gap: 2rem;

		button {
			border: 0;
			background-color: transparent;
			color: ${({ theme }) => theme.COLORS.RED_200};
			font-size: 0.8rem;
		}
	}

	@media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
		display: block;
	}
`;
