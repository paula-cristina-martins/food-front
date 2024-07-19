import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { Alert, Container, InformationOrder, Main, Table } from "./styles";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";

import OrderStatus from "../../../components/Order/Status";
import { PiBowlFood } from "react-icons/pi";
import { FormatDate } from "../../../utils/formatDate";
import OrderStatusUpdate from "../../../components/Order/Update";

export function UpdateStatusOrder() {
	const [historicOrders, setHistoricOrders] = useState([]);

	async function searchHistoricOrder() {
		try {
			const response = await api.get(`orders/`, {
				withCredentials: true,
			});
			setHistoricOrders(response.data);
		} catch (error) {
			if (error.response) {
				alert(error.response.data.message);
			} else {
				alert("Não há pedidos realizados!");
			}
		}
	}

	useEffect(() => {
		searchHistoricOrder();
	}, []);

	return (
		<Container>
			<Header />
			<Main>
				<h1>Histórico de pedidos</h1>
				<Table>
					<thead>
						<tr>
							<th>Status</th>
							<th>Código</th>
							<th>Detalhamento</th>
							<th>Data e hora</th>
						</tr>
					</thead>
					<tbody>
						{historicOrders?.map((order) => {
							return (
								<tr key={order.id}>
									<td>{<OrderStatusUpdate order={order} status={order.status} />}</td>
									<td>{order.id}</td>
									<td>{order.foods.map((food) => `${food.quantity} x ${food.name}`).join(", ")}</td>
									<td>{FormatDate(order.updated_at)}</td>
								</tr>
							);
						})}
					</tbody>
				</Table>
				{historicOrders?.map((order) => {
					return (
						<InformationOrder key={order.id}>
							<div>
								{order.id} - {FormatDate(order.updated_at)}
							</div>
							<div>{order.foods.map((food) => `${food.quantity} x ${food.name}`).join(", ")}</div>
							<OrderStatusUpdate order={order} status={order.status} />
						</InformationOrder>
					);
				})}
				{historicOrders.length == 0 && (
					<Alert>
						<PiBowlFood />
						<p>Clientes não realizaram pedidos!</p>
					</Alert>
				)}
			</Main>
			<Footer />
		</Container>
	);
}
