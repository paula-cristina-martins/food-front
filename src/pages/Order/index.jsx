import { useState } from "react";
import { Container, Main } from "./styles";
import { Header } from "../../components/Header";
import { OrderItemsDetails } from "../../components/Order/Items";
import { Footer } from "../../components/Footer";
import { OrderPayment } from "../../components/Order/Payment";

export function Order() {
	const [value, setValue] = useState(0);

	const [checkMobile, setCheckMobile] = useState(false);

	return (
		<Container>
			<Header />
			<Main>
				<OrderItemsDetails
					checkMobile={checkMobile}
					value={value}
					setValue={setValue}
					setCheckMobile={setCheckMobile}
				/>
				{value > 0 && <OrderPayment checkMobile={checkMobile} value={value} />}
			</Main>
			<Footer />
		</Container>
	);
}
