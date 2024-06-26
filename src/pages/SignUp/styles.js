import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	gap: 12rem;
	padding: 10rem;

	@media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
		padding: 8rem 4rem;
		gap: 6rem;
	}

	@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
		display: block;
	}
`;

export const Form = styled.form`
	display: grid;
	max-width: 30rem;
	padding: 4rem;

	background-color: ${({ theme }) => theme.COLORS.DARK_400};
	border-radius: 0.3rem;

	> button {
		width: 100%;
	}

	> *:not(:last-child) {
		margin-bottom: 2rem;
	}

	> h1 {
		font-size: 2rem;
		font-weight: 400;
		text-align: center;
	}

	> a {
		display: flex;
		justify-content: center;

		font-size: 0.9rem;
		font-weight: 300;
		color: ${({ theme }) => theme.COLORS.LIGHT_100};
	}

	@media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
		padding: 2rem 2rem;
	}

	@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
		display: block;
		margin: auto;

		background-color: ${({ theme }) => theme.COLORS.DARK_700};
		padding: 4rem 0;

		> h1 {
			display: none;
		}
	}
`;
