import { RiSubtractFill } from "react-icons/ri";
import { Container, FoodQuantity } from "./styles";
import { PiPlus } from "react-icons/pi";
import { useState } from "react";
import { Button } from "../../../Button";
import { useOrders } from "../../../../hooks/orders";

export default function MakeOrderItem({ foodId, foodPrice }) {
	const { createOrder } = useOrders();

	const [quantity, setQuantity] = useState(1);

	return (
		<Container>
			<FoodQuantity>
				<RiSubtractFill onClick={() => (quantity > 1 ? setQuantity(quantity - 1) : 1)} /> {quantity}
				<PiPlus onClick={() => setQuantity(quantity + 1)} />
			</FoodQuantity>
			<Button
				name={"incluir"}
				icon={""}
				onClick={() => {
					createOrder(quantity, foodPrice, foodId);
				}}
			/>
		</Container>
	);
}
