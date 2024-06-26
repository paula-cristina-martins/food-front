import styled from "styled-components";

export const Container = styled.nav`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: ${({ theme }) => theme.COLORS.DARK_500};
	padding: 1.7rem 7.5rem;
	gap: 2rem;
`;

export const User = styled.div`
	display: block;
	align-items: center;
	text-align: right;

	span {
		font-size: 0.8rem;
		color: ${({ theme }) => theme.COLORS.BLUE_200};
	}
`;

export const Search = styled.div`
	flex-grow: 1;

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

export const SignOutButton = styled.button`
	display: flex;
	align-items: center;
	background-color: transparent;
	color: ${({ theme }) => theme.COLORS.LIGHT_100};
	border: none;
	cursor: pointer;
`;
