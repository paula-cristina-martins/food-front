import { FiCircle } from "react-icons/fi";
import { ORDER_TYPES, ORDER_TYPES_COLORS } from "../../../utils/orderTypes";
import { Container } from "./styles";
import { MdCircle } from "react-icons/md";
import { useEffect } from "react";

export default function OrderStatus({ status }) {
	function orderType(status) {
		switch (status) {
			case ORDER_TYPES.AWAITING_PAYMENT:
				return "Aguardando pagamento";
			case ORDER_TYPES.PENDING:
				return "Pendente";
			case ORDER_TYPES.PREPARING:
				return "Preparando";
			case ORDER_TYPES.DELIVERED:
				return "Entregue";
			case ORDER_TYPES.CANCELED:
				return "Cancelado";
			default:
				return "-";
		}
	}

	const text = orderType(status);

	function getColor(status) {
		switch (status) {
			case ORDER_TYPES.AWAITING_PAYMENT:
				return ORDER_TYPES_COLORS.AWAITING_PAYMENT;
			case ORDER_TYPES.PENDING:
				return ORDER_TYPES_COLORS.PENDING;
			case ORDER_TYPES.PREPARING:
				return ORDER_TYPES_COLORS.PREPARING;
			case ORDER_TYPES.DELIVERED:
				return ORDER_TYPES_COLORS.DELIVERED;
			case ORDER_TYPES.CANCELED:
				return ORDER_TYPES_COLORS.CANCELED;
			default:
				return ORDER_TYPES_COLORS.AWAITING_PAYMENT;
		}
	}

	return (
		<Container $color={getColor(status)}>
			<MdCircle />
			{text}
		</Container>
	);
}
