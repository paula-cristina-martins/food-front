import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.nav`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: ${({ theme }) => theme.COLORS.DARK_500};
	padding: 1.7rem 7.5rem;
	gap: 2rem;

	@media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
		padding: 1.7rem 3.5rem;
	}

	@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
		padding: 3.5rem 2rem 1.5rem;
		justify-content: start;
		gap: 0;
	}
`;

export const User = styled.div`
	display: block;
	text-align: right;

	span {
		font-size: 0.8rem;
		color: ${({ theme }) => theme.COLORS.BLUE_200};
	}

	@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		gap: 1rem;

		span {
			margin-top: 0.4rem;
		}
	}
`;

export const Search = styled.div`
	flex-grow: 1;

	@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
		display: none;
	}
`;

export const Options = styled.div`
	display: flex;
	align-items: center;
	text-align: center;

	gap: 2rem;

	.options {
		border: 0;
		background-color: transparent;
		color: ${({ theme }) => theme.COLORS.LIGHT_100};
	}

	@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
		display: none;
	}
`;

export const SignOutButton = styled.button`
	display: flex;
	align-items: center;
	background-color: transparent;
	color: ${({ theme }) => theme.COLORS.LIGHT_100};
	border: none;
	cursor: pointer;

	@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
		display: none;
	}
`;

export const MenuMobile = styled.div`
	display: none;

	@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
		display: flex;
		align-items: center;

		p {
			font-family: "Roboto", sans-serif;
			font-size: 1.5rem;
			font-weight: 300;
			padding-left: 1rem;
		}
	}
`;

export const OptionsMobile = styled.div`
	display: none;
	width: 100%;
	height: 100vh;

	@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
		display: block;
		padding: 2.2rem 2rem 1.5rem;
	}
`;

export const OptionButton = styled.div`
	padding-top: 1.5rem;
	display: block;

	button {
		width: 100%;
		font-size: 1.5rem;
		font-weight: 200;
		text-align: left;
		padding: 1rem 0;
		background-color: transparent;
		border: 0;
		color: ${({ theme }) => theme.COLORS.LIGHT_100};
		border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_100};
		cursor: pointer;
	}
`;

export const Orders = styled.div`
	display: none;
	position: relative;

	div {
		display: flex;
		align-items: center;
		color: ${({ theme }) => theme.COLORS.LIGHT_100};
	}

	@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
		display: inline-block;
	}
`;

export const Badge = styled.span`
	position: absolute;
	top: -0.6rem;
	right: -0.6rem;
	background-color: ${({ theme }) => theme.COLORS.RED_800};
	color: ${({ theme }) => theme.COLORS.LIGHT_100};
	border-radius: 50%;
	font-size: 0.7rem;
	width: 1.4rem;
	height: 1.4rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;
