import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	width: 100%;
	justify-content: end;

	font-size: 1.5rem;

	border: 0;
	background-color: transparent;

	cursor: pointer;

	svg {
		color: ${({ theme }) => theme.COLORS.LIGHT_100};
	}
`;
