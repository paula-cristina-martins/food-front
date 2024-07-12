import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../../styles/deviceBreakpoints";

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: ${({ theme, $isNew }) => ($isNew ? theme.COLORS.DARK_200 : theme.COLORS.LIGHT_500)};
	color: ${({ theme }) => theme.COLORS.LIGHT_100};

	border: ${({ theme, $isNew }) => ($isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none")};

	border-radius: 0.7rem;
	padding: 0 0.8rem;

	.button {
		color: ${({ theme, $isNew }) => ($isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100)};
	}

	> button {
		border: none;
		background: none;
	}

	> input {
		width: 100%;
		padding: 0.5rem;

		color: ${({ theme }) => theme.COLORS.LIGHT_100};
		background: transparent;

		border: none;

		&::placeholder {
			color: ${({ theme }) => theme.COLORS.LIGHT_500};
		}
	}

	@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
		width: 40%;
	}
`;
