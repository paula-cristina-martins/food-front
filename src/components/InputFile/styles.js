import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
	display: block;
	align-items: center;
	width: 100%;

	> label {
		font-family: "Roboto", sans-serif;
		color: ${({ theme }) => theme.COLORS.LIGHT_100};
		font-weight: 400;
	}

	> div {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;

		cursor: pointer;

		width: 100%;
		padding: 0.8rem;
		margin-top: 0.3rem;

		background: ${({ theme }) => theme.COLORS.DARK_200};
		color: ${({ theme }) => theme.COLORS.LIGHT_100};

		border: 0;
		border-radius: 0.4rem;

		svg {
			font-size: 1.5rem;
		}

		@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
			border: 0;
		}
	}

	> input {
		display: none;
	}
`;
