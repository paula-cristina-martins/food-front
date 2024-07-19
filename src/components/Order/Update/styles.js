import { MdCircle } from "react-icons/md";
import styled from "styled-components";

export const Container = styled.div`
	position: relative;
	display: flex;
	align-items: center;
`;

export const Select = styled.select`
	width: 100%;
	padding: 1rem 3rem;

	border: 0;
	border-radius: 0.5rem;
	font-size: 1rem;

	background-color: ${({ theme, $color }) => ($color ? theme.COLORS[$color] : theme.COLORS.DARK_100)};
	color: ${({ theme, $color }) => ($color ? theme.COLORS[$color] : theme.COLORS.LIGHT_100)};
`;

export const CircleIcon = styled(MdCircle)`
	position: absolute;
	left: 1rem;
	font-size: 0.9rem;
	color: ${({ theme, $color }) => ($color ? theme.COLORS[$color] : theme.COLORS.LIGHT_700)};
`;
