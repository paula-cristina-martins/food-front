import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../../styles/deviceBreakpoints";

export const Container = styled.div`
	display: block;

	h1 {
		font-weight: 400;
		padding: 0.5rem 0 3rem;
	}

	@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
		display: ${({ theme, $checkMobile }) => ($checkMobile ? "" : "none")};
	}
`;

export const Payment = styled.div`
	display: flex;
`;

export const Types = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 100%;
	gap: 0.5rem;
	padding: 2rem 0;

	border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_700};

	background-color: ${({ theme, $isActive }) => ($isActive ? theme.COLORS.DARK_200 : "transparent")};

	color: ${({ theme }) => theme.COLORS.LIGHT_100};

	svg {
		font-size: 1.5rem;
	}
`;

export const Pix = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 100%;
	gap: 0.5rem;

	border-left: 1px solid ${({ theme }) => theme.COLORS.LIGHT_700};
	border-right: 1px solid ${({ theme }) => theme.COLORS.LIGHT_700};

	svg {
		font-size: 15rem;
		color: ${({ theme }) => theme.COLORS.LIGHT_700};
	}
`;

export const CreditCard = styled.div`
	display: block;
	padding: 2.5rem 6rem;
	width: 100%;

	border-left: 1px solid ${({ theme }) => theme.COLORS.LIGHT_700};
	border-right: 1px solid ${({ theme }) => theme.COLORS.LIGHT_700};

	@media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
		padding: 2.5rem 2rem;
	}
`;

export const FormCreditCard = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 2rem;
	padding-top: 2rem;
`;

export const ConclusionPayment = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	button {
		width: 100%;
	}

	padding: 0 6rem 3rem;

	border-left: 1px solid ${({ theme }) => theme.COLORS.LIGHT_700};
	border-right: 1px solid ${({ theme }) => theme.COLORS.LIGHT_700};
	border-bottom: 1px solid ${({ theme }) => theme.COLORS.LIGHT_700};

	border-bottom-left-radius: 0.5rem;
	border-bottom-right-radius: 0.5rem;

	@media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
		padding: 0 2rem 3rem;
	}
`;
