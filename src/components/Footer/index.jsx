import { BrandImage } from "../BrandImage";
import { Container } from "./styles";

export function Footer() {
	return (
		<Container>
			<div>
				<BrandImage size={1.5} color />
			</div>
			<p>&#169; 2024 - Todos os direitos reservados.</p>
		</Container>
	);
}
