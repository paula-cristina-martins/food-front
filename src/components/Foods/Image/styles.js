import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../../styles/deviceBreakpoints";

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	img {
		width: 12rem;
		height: 12rem;
		border-radius: 100%;
	}

	svg {
		font-size: 12rem;
	}

	@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
		img {
			width: 10rem;
			height: 10rem;
		}

		svg {
			font-size: 10rem;
		}
	}
`;
