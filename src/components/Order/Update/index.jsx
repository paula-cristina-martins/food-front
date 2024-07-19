import { useState, useEffect } from "react";
import { GetColor, ORDER_TYPES } from "../../../utils/orderTypes";
import { CircleIcon, Container, Select } from "./styles";
import { api } from "../../../services/api";
import { useOrders } from "../../../hooks/orders";

export default function OrderStatusUpdate({ order, status }) {
	const { searchOrdersStatus } = useOrders();
	const [currentStatus, setCurrentStatus] = useState(status);
	const [newStatus, setNewStatus] = useState("");

	useEffect(() => {
		searchOrdersStatus();
	}, [currentStatus]);

	useEffect(() => {
		setCurrentStatus(status);
	}, [status]);

	async function handleChange(event) {
		const newStatus = event.target.value;
		setCurrentStatus(newStatus);
		if (newStatus) {
			setNewStatus(newStatus);
			await updateStatus(order, newStatus);
		}
	}

	async function updateStatus(order, status) {
		const payload = {
			status: status,
			price: order.value,
			pix: order.isPix,
			card: order.isCreditCard,
			expiringCard: order.expiringCard,
			numberCard: order.numberCard,
			cvcCard: order.cvcCard,
		};

		try {
			const response = await api.put(`orders/${order.id}`, payload, { withCredentials: true });
			alert(response.data.message);
		} catch (error) {
			if (error.response) {
				alert(error.response.data.message);
			} else {
				alert("Não foi possível atualizar o status do pedido!");
			}
		}
	}

	return (
		<Container $color={GetColor(currentStatus)}>
			<CircleIcon $color={GetColor(currentStatus)} />
			<Select value={currentStatus} onChange={handleChange}>
				<option value={ORDER_TYPES.AWAITING_PAYMENT}>Aguardando pagamento</option>
				<option value={ORDER_TYPES.PENDING}>Pendente</option>
				<option value={ORDER_TYPES.PREPARING}>Preparando</option>
				<option value={ORDER_TYPES.DELIVERED}>Entregue</option>
				<option value={ORDER_TYPES.CANCELED}>Cancelado</option>
			</Select>
		</Container>
	);
}
