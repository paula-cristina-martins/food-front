import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	gap: 19rem;
	padding: 10rem;
`;

export const Form = styled.form`
	padding: 4rem;
	background-color: ${({ theme }) => theme.COLORS.DARK_400};
	border-radius: 0.3rem;
	max-width: 30rem;
	width: 100%;

	> *:not(:last-child) {
		margin-bottom: 2rem;
	}

	> h1 {
		font-size: 2rem;
		font-weight: 400;
		text-align: center;
	}

	> a {
		display: flex;
		justify-content: center;

		font-size: 0.9rem;
		font-weight: 300;
		color: ${({ theme }) => theme.COLORS.LIGHT_100};
	}
`;
