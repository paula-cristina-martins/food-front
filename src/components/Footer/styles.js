import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.footer`
	display: flex;
	justify-content: space-between;
	align-items: center;

	width: 100%;
	bottom: 0;
	position: fixed;
	padding: 1.2rem 7.5rem;

	background-color: ${({ theme }) => theme.COLORS.DARK_500};

	div {
		color: ${({ theme }) => theme.COLORS.LIGHT_700};
	}

	p {
		font-size: 0.8rem;
	}

	@media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
		padding: 1.2rem 3.5rem;
	}

	@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
		padding: 1.2rem 2rem;

		p {
			font-size: 0.7rem;
		}
	}
`;
