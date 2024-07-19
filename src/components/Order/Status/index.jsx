import { FiCircle } from "react-icons/fi";
import { GetColor, ORDER_TYPES, ORDER_TYPES_COLORS, OrderType } from "../../../utils/orderTypes";
import { Container } from "./styles";
import { MdCircle } from "react-icons/md";
import { useEffect } from "react";

export default function OrderStatus({ status }) {
	const text = OrderType(status);

	return (
		<Container $color={GetColor(status)}>
			<MdCircle />
			{text}
		</Container>
	);
}
