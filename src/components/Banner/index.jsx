import BannerImage from "../../assets/banner.png";
import { Container } from "./styles";

export function Banner() {
	return (
		<Container>
			<img src={BannerImage} alt="Imagem de frutas e doces." />
			<div>
				<h1>Sabores inigualáveis</h1>
				<p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
			</div>
		</Container>
	);
}
