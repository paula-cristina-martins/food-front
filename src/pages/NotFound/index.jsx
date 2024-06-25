import { Link } from "react-router-dom";
import { Container } from "./styles";
import { BrandImage } from "../../components/BrandImage";

export function NotFound() {
	return (
		<Container>
			<BrandImage />
			<h1>Página não localizada!</h1>
			<Link to="/">Voltar para a página inicial</Link>
		</Container>
	);
}
