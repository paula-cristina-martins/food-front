import styled from "styled-components";

export const Container = styled.div`
	height: 100vh;
	width: 100%;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	> h1 {
		padding: 3rem;
		font-size: 3rem;
	}

	> a {
		color: ${({ theme }) => theme.COLORS.BLUE_200};
	}
`;
