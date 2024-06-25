import styled from "styled-components";

export const Container = styled.div`
	display: block;
	align-items: center;

	> label {
		font-family: "Roboto", sans-serif;
		color: ${({ theme }) => theme.COLORS.LIGHT_100};
		font-weight: 400;
	}

	> input {
		width: 100%;
		padding: 0.8rem;
		margin-top: 0.3rem;

		background: transparent;
		color: ${({ theme }) => theme.COLORS.LIGHT_100};

		border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
		border-radius: 0.4rem;

		&::placeholder {
			color: ${({ theme }) => theme.COLORS.LIGHT_500};
		}
	}
`;
