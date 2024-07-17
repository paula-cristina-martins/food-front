import { createContext, useContext, useState, useEffect } from "react";

const OrdersContext = createContext({});

import { api } from "../services/api";
import { useAuth } from "./auth";
import { ORDER_TYPES } from "../utils/orderTypes";

function OrdersProvider({ children }) {
	const { user } = useAuth();
	const [orderCheck, setOrderCheck] = useState(null);
	const [orderQuantity, setOrderQuantity] = useState(0);

	async function searchOrdersAwaitingPayment() {
		try {
			const response = await api.get("orders/await", {
				withCredentials: true,
			});
			setOrderCheck(response.data?.count !== 0 ? response.data : null);
			setOrderQuantity(response.data?.totalAmount ?? 0);
		} catch (error) {
			if (error.response) {
				alert(error.response.data.message);
			} else {
				alert("Não foi possível localizar pedidos em aberto!");
			}
		}
	}

	async function createOrder(quantity, price, foodId) {
		let orderId = 0;

		try {
			if (orderCheck == null) {
				const response = await api.post("orders", { status: ORDER_TYPES.AWAITING_PAYMENT }, { withCredentials: true });
				orderId = response.data.id;
			}

			const response = await api.post(
				"order/items",
				{ quantity, price, foodId, orderId: orderCheck?.id ?? orderId },
				{ withCredentials: true }
			);

			searchOrdersAwaitingPayment();
		} catch (error) {
			if (error.response) {
				alert(error.response.data.message);
			} else {
				alert("Erro ao associar pedido!");
			}
		}
	}

	return (
		<OrdersContext.Provider
			value={{
				orderCheck,
				orderQuantity,
				createOrder,
				searchOrdersAwaitingPayment,
			}}
		>
			{children}
		</OrdersContext.Provider>
	);
}

function useOrders() {
	const context = useContext(OrdersContext);
	return context;
}

export { OrdersProvider, useOrders };
