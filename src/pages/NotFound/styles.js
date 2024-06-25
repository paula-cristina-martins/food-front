import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
	height: 100vh;
	width: 100%;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	> h1 {
		padding: 3rem;
		font-size: 3rem;
	}

	> a {
		color: ${({ theme }) => theme.COLORS.BLUE_200};
		font-size: 1rem;
	}

	@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
		> h1 {
			font-size: 1.5rem;
		}
	}
`;
