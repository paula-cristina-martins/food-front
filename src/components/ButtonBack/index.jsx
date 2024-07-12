import { useNavigate } from "react-router-dom";
import { Container } from "./styles";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

export function ButtonBack() {
	const navigate = useNavigate();

	function handleBack() {
		navigate("/");
	}

	return (
		<Container type={"button"} onClick={handleBack}>
			<MdOutlineKeyboardArrowLeft />
			voltar
		</Container>
	);
}
