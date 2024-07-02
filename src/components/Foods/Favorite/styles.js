import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	width: 100%;
	justify-content: end;

	font-size: 1.5rem;

	border: 0;
	background-color: transparent;
	color: ${({ theme }) => theme.COLORS.LIGHT_100};

	cursor: pointer;
`;
