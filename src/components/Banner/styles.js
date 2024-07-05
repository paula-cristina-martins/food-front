import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	height: 17rem;
	background: linear-gradient(to top, ${({ theme }) => theme.COLORS.DARK_500}, ${({ theme }) => theme.COLORS.DARK_200});
	border-radius: 0.5rem;
	margin: 8rem 0 1rem 0;

	img {
		position: relative;
		left: -4rem;
		bottom: 4.4rem;
		width: 40rem;
	}

	div {
		display: block;
		z-index: 1;
		flex: 1;
		padding: 0 3rem 0 0;

		h1 {
			font-family: "Poppins", sans-serif;
			font-size: 2.5rem;
			font-weight: 500;
		}
	}

	@media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
		margin: 2rem 0 1rem 0;

		img {
			width: 30rem;
			left: -3rem;
			bottom: 1.2rem;
		}

		div {
			padding: 0 0.5rem 0 0;

			h1 {
				font-size: 2rem;
			}
		}
	}

	@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
		height: 9rem;
		margin: 0;

		img {
			width: 15rem;
			left: -1.5rem;
			bottom: 0.3rem;
		}

		div {
			padding: 0 0.5rem 0 0;

			h1 {
				font-size: 1.5rem;
			}

			p {
				font-size: 0.8rem;
			}
		}
	}
`;
