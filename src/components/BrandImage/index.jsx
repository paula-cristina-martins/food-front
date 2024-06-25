import { Container, Title } from "./styles";

import Logo from "../../assets/logo.svg";

export function BrandImage({ size }) {
	return (
		<Container>
			<img src={Logo} alt="Logotipo da Food Explorer." />
			<Title size={size}>food explorer</Title>
		</Container>
	);
}
