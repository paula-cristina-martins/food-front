import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
	height: 100vh;
	width: 100%;
`;

export const Main = styled.main`
	padding: 1.7rem 7.5rem;

	@media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
		padding: 1.7rem 3.5rem;
	}

	@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
		padding: 3.5rem 2rem 1.5rem;
	}
`;
