import { Fragment, useEffect } from "react";
import { useOrders } from "../../../hooks/orders";
import { api } from "../../../services/api";
import ImageFoods from "../../Foods/Image";
import { Amount, ButtonMobile, Container, OrderItems } from "./styles";
import { Button } from "../../Button";

export function OrderItemsDetails({ checkMobile, setCheckMobile, value, setValue }) {
	const { orderCheck } = useOrders();

	function amount() {
		if (orderCheck && orderCheck.foods) {
			const total = orderCheck.foods.reduce((old, item) => {
				return old + item.price * item.quantity;
			}, 0);
			setValue(total);
		}
	}

	useEffect(() => {
		amount();
	}, [orderCheck]);

	async function deleteOrderItem(id) {
		try {
			const response = await api.delete(`order/items/${id}`, {
				withCredentials: true,
			});
			alert(response.data.message);
			window.location.reload();
		} catch (error) {
			if (error.response) {
				alert(error.response.data.message);
			} else {
				alert("Não foi possível excluir o item do pedido!");
			}
		}
	}

	return (
		<Container $checkMobile={checkMobile ? checkMobile.toString() : ""}>
			<h1>Meu pedido</h1>
			{!orderCheck ? (
				<div>Não há pratos escolhidos para efetuar o pedido!</div>
			) : (
				<OrderItems>
					{orderCheck?.foods?.map((item, index) => {
						return (
							<div key={index}>
								<ImageFoods food={item} size={80} />
								<div>
									<p>
										{item.quantity} x {item.name}
										<span>R$ {item.price.toLocaleString("pr-br")}</span>
									</p>
									<button onClick={() => deleteOrderItem(item.order_item_id)}>Excluir</button>
								</div>
							</div>
						);
					})}
					<Amount>Total: R$ {value.toLocaleString("pr-br")}</Amount>
					{!checkMobile && (
						<ButtonMobile>
							<Button name={"Avançar"} onClick={() => setCheckMobile(true)} />
						</ButtonMobile>
					)}
				</OrderItems>
			)}
		</Container>
	);
}
