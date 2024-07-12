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
`;

export const Items = styled.div`
	padding: 4.9px 0.8rem;
	margin-top: 0.3rem;

	background: ${({ theme }) => theme.COLORS.DARK_200};
	color: ${({ theme }) => theme.COLORS.LIGHT_100};

	border: 0;
	border-radius: 0.4rem;

	&::placeholder {
		color: ${({ theme }) => theme.COLORS.LIGHT_500};
	}

	> span {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}
`;
