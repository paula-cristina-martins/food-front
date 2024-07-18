import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;

	svg {
		font-size: 0.9rem;
		color: ${({ theme, $color }) => ($color ? theme.COLORS[$color] : theme.COLORS.LIGHT_700)};
	}
`;
