import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
	height: 100vh;
	width: 100%;
`;

export const Main = styled.main`
	display: flex;
	align-items: center;
	padding: 1.7rem 7.5rem;
	gap: 3rem;
	margin-bottom: 21rem;

	@media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
		padding: 1.7rem 3.5rem;
		margin-bottom: 16rem;
	}

	@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
		display: block;
		justify-content: center;
		padding: 3.5rem 2rem 1.5rem;
		margin-bottom: 10rem;
	}
`;

export const Description = styled.div`
	font-weight: 500;
	font-size: 2.5rem;
	padding-bottom: 1.2rem;

	p {
		font-weight: 300;
		font-size: 1.2rem;
		padding-top: 1.2rem;
	}

	@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
		text-align: center;
		padding-top: 2rem;
	}
`;

export const Tags = styled.div`
	padding-top: 1.5rem;

	span {
		background-color: ${({ theme }) => theme.COLORS.DARK_100};
		padding: 0.5rem 0.5rem;
		border-radius: 0.5rem;
		text-align: center;
	}

	span:not(:first-child) {
		margin-left: 1rem;
	}

	@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
		display: flex;
		flex-wrap: wrap;
		justify-content: start;
		margin: 0 1rem;

		span {
			flex: 0 1 calc(33% - 1rem);
			margin-left: 1rem;
			margin-bottom: 1.3rem;
		}

		span:nth-child(3n + 1) {
			margin-left: 0;
		}
	}
`;

export const Order = styled.div`
	display: flex;
	align-items: center;
	justify-content: start;

	padding: 3rem 0;

	@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
		justify-content: center;
		padding: 1rem 0;
	}
`;
