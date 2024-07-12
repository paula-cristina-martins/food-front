import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../../styles/deviceBreakpoints";

export const Container = styled.main`
	display: block;
	padding: 1.7rem 7.5rem;

	> h1 {
		font-weight: 400;
		padding-bottom: 1rem;
	}

	@media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
		padding: 1.7rem 3.5rem;
	}

	@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
		display: block;
		justify-content: center;
		padding: 2rem 2rem 1.5rem;
	}
`;

export const Form2 = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 2rem;

	& > :nth-child(1) {
		grid-column: span 3;
	}

	@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
		display: block;
	}
`;

export const Form3 = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 2rem;

	& > :nth-child(2) {
		grid-column: span 2;
	}

	@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
		display: block;
	}
`;

export const Space = styled.div`
	padding: 1rem 0;
`;
