import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.button`
	display: flex;
	align-items: center;
	justify-content: start;
	font-size: 1.3rem;
	font-weight: 400;

	border: 0;
	background-color: transparent;

	color: ${({ theme }) => theme.COLORS.LIGHT_100};

	svg {
		font-size: 2.5rem;
	}

	padding: 1.5rem 6.6rem 0;

	@media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
		padding: 1.5rem 3.5rem;
	}

	@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
		padding: 2rem 1.5rem 0;
	}
`;
