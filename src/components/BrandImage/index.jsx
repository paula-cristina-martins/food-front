import { Container, Title } from "./styles";

import Logo from "../../assets/logo.svg";
import LogoDark from "../../assets/logo_dark.svg";

export function BrandImage({ size, color }) {
	return (
		<Container>
			{color ? (
				<img src={LogoDark} alt="Logotipo da Food Explorer." />
			) : (
				<img src={Logo} alt="Logotipo da Food Explorer." />
			)}
			<Title size={size}>food explorer</Title>
		</Container>
	);
}
