import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../../styles/deviceBreakpoints";

export const Container = styled.div`
	height: 100vh;
	width: 100%;
`;

export const Main = styled.main`
	display: block;
	align-items: center;
	padding: 1.7rem 7.5rem;
	gap: 3rem;
	margin-bottom: 30rem;

	> h1 {
		font-weight: 400;
		padding-bottom: 1rem;
		padding: 1rem 0 3rem;
	}

	@media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
		padding: 1.7rem 3.5rem;
	}

	@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
		display: block;
		justify-content: center;
		padding: 3.5rem 2rem 1.5rem;
	}
`;

export const Table = styled.table`
	width: 100%;
	border-spacing: 0;
	border-radius: 0.5rem;

	thead {
		th {
			padding: 1rem 2rem;
			border: 1px solid ${({ theme }) => theme.COLORS.DARK_100};
			font-weight: 500;
			text-align: left;
		}

		th:first-child {
			border-top-left-radius: 0.5rem;
		}

		th:last-child {
			border-top-right-radius: 0.5rem;
		}
	}

	tbody {
		td {
			padding: 1rem 2rem;
			border: 1px solid ${({ theme }) => theme.COLORS.DARK_100};
			color: ${({ theme }) => theme.COLORS.LIGHT_400};

			&:nth-child(3) {
				width: 3fr;
			}
		}

		tr:last-child {
			td:first-child {
				border-bottom-left-radius: 0.5rem;
			}

			td:last-child {
				border-bottom-right-radius: 0.5rem;
			}
		}
	}

	@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
		display: none;
	}
`;

export const InformationOrder = styled.div`
	visibility: hidden;

	@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
		visibility: visible;
		width: 100%;

		border: 1px solid ${({ theme }) => theme.COLORS.DARK_100};
		border-radius: 0.5rem;
		padding: 1rem 1.3rem;
		margin-bottom: 1.3rem;

		div {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding-bottom: 1rem;
		}
	}
`;

export const Alert = styled.div`
	display: block;
	justify-content: center;
	align-items: center;
	text-align: center;
	padding: 3rem 0;
	color: ${({ theme }) => theme.COLORS.LIGHT_400};

	svg {
		padding: 3rem 0;
		font-size: 15rem;
		color: ${({ theme }) => theme.COLORS.LIGHT_700};
	}
`;
