import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../../../styles/deviceBreakpoints";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	gap: 1rem;

	@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
		display: block;

		button {
			width: 100%;
		}
	}
`;

export const FoodQuantity = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	gap: 0.9rem;

	svg {
		font-size: 1rem;
		cursor: pointer;
	}

	font-family: "Roboto";

	@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
		padding: 0 0 0.9rem 0;
	}
`;
