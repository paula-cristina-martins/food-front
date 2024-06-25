import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
`;

export const Title = styled.h1`
	font-size: ${({ size }) => size + "rem" || "1.5rem"};
	padding-left: 1rem;
`;