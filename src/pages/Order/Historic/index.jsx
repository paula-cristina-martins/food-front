import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { Alert, Container, InformationOrder, Main, Table } from "./styles";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";

import OrderStatus from "../../../components/Order/Status";
import { PiBowlFood } from "react-icons/pi";
import { FormatDate } from "../../../utils/formatDate";

export function HistoricOrder() {
	const [historicOrders, setHistoricOrders] = useState([]);

	async function searchHistoricOrder() {
		try {
			const response = await api.get(`orders/show`, {
				withCredentials: true,
			});
			setHistoricOrders(response.data);
		} catch (error) {
			if (error.response) {
				alert(error.response.data.message);
			} else {
				alert("Não há pratos favoritos!");
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
									<td>{<OrderStatus status={order.status} />}</td>
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
								<span>{order.id}</span>
								<span>{<OrderStatus status={order.status} />}</span>
								<span>{FormatDate(order.updated_at)}</span>
							</div>
							<span>{order.foods.map((food) => `${food.quantity} x ${food.name}`).join(", ")}</span>
						</InformationOrder>
					);
				})}
				{historicOrders.length == 0 && (
					<Alert>
						<PiBowlFood />
						<p>Você ainda não realizou nenhum pedido!</p>
					</Alert>
				)}
			</Main>
			<Footer />
		</Container>
	);
}
