import { PiCreditCard, PiPixLogo, PiQrCode, PiReceipt } from "react-icons/pi";
import { Button } from "../../Button";
import { ConclusionPayment, Container, CreditCard, FormCreditCard, Payment, Pix, Types } from "./styles";
import { Fragment, useState } from "react";
import { Input } from "../../Input";
import { InputDate } from "../../InputDate";
import { api } from "../../../services/api";
import { ORDER_TYPES } from "../../../utils/orderTypes";
import { useOrders } from "../../../hooks/orders";
import { useNavigate } from "react-router-dom";

export function OrderPayment({ checkMobile, value }) {
	const navigate = useNavigate();
	const { orderCheck } = useOrders();

	const [isPix, setIsPix] = useState(true);
	const [isCreditCard, setIsCreditCard] = useState(false);

	const [expiringCard, setExpiringCard] = useState("");
	const [numberCard, setNumberCard] = useState("");
	const [cvcCard, setCvcCard] = useState("");

	function resetStates() {
		setExpiringCard("");
		setNumberCard("");
		setCvcCard("");
	}

	async function updateOrder(id) {
		if (isCreditCard == true && cvcCard.length !== 3) return alert("O CVC deve conter apenas 3 dígitos.");
		if (isCreditCard == true && numberCard.length !== 16)
			return alert("O número do cartão deve conter apenas 16 dígitos.");

		const payload = {
			status: ORDER_TYPES.PENDING,
			price: value,
			pix: isPix,
			card: isCreditCard,
			expiringCard: expiringCard,
			numberCard: numberCard,
			cvcCard: cvcCard,
		};

		try {
			const response = await api.put(`orders/${orderCheck.id}`, payload, { withCredentials: true });
			alert(response.data.message);
			navigate("/order-historic");
		} catch (error) {
			if (error.response) {
				alert(error.response.data.message);
			} else {
				alert("Não foi possível concluir o pedido!");
			}
		}
	}

	return (
		<Container $checkMobile={checkMobile ? checkMobile.toString() : ""}>
			<h1>Pagamento</h1>
			<Payment>
				<Types
					$isActive={isPix ? isPix.toString() : ""}
					onClick={() => {
						setIsPix(true), setIsCreditCard(false), resetStates();
					}}
				>
					<PiPixLogo />
					PIX
				</Types>
				<Types
					$isActive={isCreditCard ? isCreditCard.toString() : ""}
					onClick={() => {
						setIsPix(false), setIsCreditCard(true);
					}}
				>
					<PiCreditCard />
					Crédito
				</Types>
			</Payment>

			{isPix && (
				<Pix>
					<PiQrCode />
				</Pix>
			)}

			{isCreditCard && (
				<CreditCard>
					<Input
						title={"Número do Cartão"}
						type={"number"}
						placeholder={"0000 0000 0000 0000"}
						value={numberCard}
						onChange={(e) => setNumberCard(e.target.value)}
					/>
					<FormCreditCard>
						<InputDate
							title={"Validade"}
							placeholder={"mm/aa"}
							value={expiringCard}
							onChange={(e) => setExpiringCard(e.target.value)}
						/>
						<Input
							title={"CVC"}
							type={"number"}
							placeholder={"000"}
							value={cvcCard}
							onChange={(e) => setCvcCard(e.target.value)}
						/>
					</FormCreditCard>
				</CreditCard>
			)}
			<ConclusionPayment>
				<Button icon={PiReceipt} name={"Finalizar pagamento"} onClick={updateOrder} />
			</ConclusionPayment>
		</Container>
	);
}
