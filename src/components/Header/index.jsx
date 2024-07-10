import { FiLogOut, FiSearch } from "react-icons/fi";
import { PiReceipt } from "react-icons/pi";
import { FaBars, FaTimes } from "react-icons/fa";

import { useAuth } from "../../hooks/auth";

import {
	Badge,
	Container,
	MenuMobile,
	Orders,
	Options,
	SignOutButton,
	User,
	OptionsMobile,
	Search,
	OptionButton,
} from "./styles";
import { BrandImage } from "../BrandImage";
import { Button } from "../Button";
import { Input } from "../Input";
import { Fragment, useEffect, useState } from "react";
import { CheckRoleUser, USER_ROLE } from "../../utils/roles";
import { ConsultFoods } from "../Foods/Consult";
import { useConsultFood } from "../../hooks/consultFood";
import { useOrders } from "../../hooks/orders";

export function Header() {
	const { user, signOut } = useAuth();
	const { orderQuantity, searchOrdersAwaitingPayment } = useOrders();
	const { search, setSearch } = useConsultFood();

	const [menuIsOpen, setMenuIsOpen] = useState(false);

	useEffect(() => {
		searchOrdersAwaitingPayment();
	}, []);

	return (
		<Fragment>
			{!menuIsOpen ? (
				<Container>
					<MenuMobile onClick={() => setMenuIsOpen(true)}>
						<FaBars size={20} />
					</MenuMobile>

					<User>
						<BrandImage />
						{CheckRoleUser(user) && <span>{user?.role}</span>}
					</User>

					<Search>
						<ConsultFoods description={search} setDescription={setSearch} />
					</Search>

					<Options>
						{CheckRoleUser(user) ? (
							<Button name={"Novo prato"} />
						) : (
							<Button icon={PiReceipt} name={`Pedidos (${orderQuantity ?? 0})`} />
						)}
					</Options>

					{!CheckRoleUser(user) && (
						<Orders>
							<div>
								<PiReceipt size={24} />
							</div>
							<Badge>{orderQuantity ?? 0}</Badge>
						</Orders>
					)}

					<SignOutButton type="button" onClick={signOut}>
						<FiLogOut size={24} />
					</SignOutButton>
				</Container>
			) : (
				<Fragment>
					<Container>
						<MenuMobile onClick={() => setMenuIsOpen(false)}>
							<FaTimes size={20} />
							<p>Menu</p>
						</MenuMobile>
					</Container>
					<OptionsMobile>
						<ConsultFoods description={search} setDescription={setSearch} />
						<OptionButton>
							{CheckRoleUser(user) && <button>Novo prato</button>}
							<button onClick={() => signOut()}>Sair</button>
						</OptionButton>
					</OptionsMobile>
				</Fragment>
			)}
		</Fragment>
	);
}
