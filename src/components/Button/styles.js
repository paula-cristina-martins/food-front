import styled from "styled-components";

export const Container = styled.button`
	width: 100%;
	padding: 0.9rem;
	font-size: 0.9rem;

	border: 0;
	border-radius: 0.3rem;

	background: ${({ theme }) => theme.COLORS.RED_800};
	color: ${({ theme }) => theme.COLORS.LIGHT_100};
`;
