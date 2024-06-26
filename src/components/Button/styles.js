import styled from "styled-components";

export const Container = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;

	padding: ${({ Icon }) => "1rem 2rem" || "0.9rem"};
	font-size: 0.9rem;

	border: 0;
	border-radius: 0.3rem;

	background: ${({ theme }) => theme.COLORS.RED_800};
	color: ${({ theme }) => theme.COLORS.LIGHT_100};

	cursor: pointer;

	span {
		display: flex;
		align-items: center;
		padding-right: 0.5rem;
	}
`;
