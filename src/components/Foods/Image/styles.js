import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../../styles/deviceBreakpoints";

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	img {
		border-radius: 100%;
	}

	svg {
		color: ${({ theme }) => theme.COLORS.LIGHT_100};
	}

	@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
		svg {
			font-size: 10rem;
		}
	}
`;
