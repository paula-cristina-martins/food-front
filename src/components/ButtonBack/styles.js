import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.button`
	display: flex;
	align-items: center;
	font-size: 1.3rem;
	font-weight: 400;

	border: 0;
	background-color: transparent;

	color: ${({ theme }) => theme.COLORS.LIGHT_100};

	svg {
		font-size: 2.5rem;
	}

	padding: 1.5rem 7.5rem 0;

	@media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
		padding: 0 3.5rem;
	}

	@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
		padding: 2rem 2rem 0;
	}
`;
