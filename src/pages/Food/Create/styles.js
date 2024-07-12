import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../../styles/deviceBreakpoints";

export const Container = styled.div`
	height: 100vh;
	width: 100%;
`;

export const Buttons = styled.div`
	display: flex;
	align-items: center;
	justify-content: end;
	gap: 2rem;
	margin-bottom: 8rem;

	padding: 0 7.5rem;

	@media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
		padding: 0 3.5rem;
	}

	@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
		padding: 0 2rem 0;
		justify-content: space-between;
	}
`;
