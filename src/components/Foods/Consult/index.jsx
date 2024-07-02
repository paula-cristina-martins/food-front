import { FiSearch } from "react-icons/fi";
import { BrandImage } from "../../BrandImage";
import { Container } from "./styles";

export function ConsultFoods({ description, setDescription }) {
	return (
		<Container>
			<span className="input-container">
				<FiSearch size={20} className="search-icon" />
				<input
					type={"text"}
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					placeholder={"Busque por pratos ou ingredientes"}
					autoComplete={"description"}
				/>
			</span>
		</Container>
	);
}
