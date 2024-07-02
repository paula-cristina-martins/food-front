import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../../styles/deviceBreakpoints";

export const Container = styled.div`
	flex-grow: 1;
	width: 100%;

	.input-container {
		position: relative;
		display: flex;
		align-items: center;
	}

	input {
		padding: 0.9rem;
		padding-left: 3rem;
		border-radius: 0.3rem;
		border: 0;
		background: ${({ theme }) => theme.COLORS.DARK_200};
		color: ${({ theme }) => theme.COLORS.LIGHT_100};
		width: 100%;

		&::placeholder {
			color: ${({ theme }) => theme.COLORS.LIGHT_500};
		}
	}

	.search-icon {
		position: absolute;
		left: 1rem;
		pointer-events: none;
		color: ${({ theme }) => theme.COLORS.LIGHT_500};
	}
`;
