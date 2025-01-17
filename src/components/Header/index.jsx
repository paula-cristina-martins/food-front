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
import { Link } from "react-router-dom";

export function Header() {
	const { user, signOut } = useAuth();
	const { orderQuantity, searchOrdersAwaitingPayment, searchOrdersStatus } = useOrders();
	const { search, setSearch } = useConsultFood();

	const [menuIsOpen, setMenuIsOpen] = useState(false);

	useEffect(() => {
		if (user.role == USER_ROLE.ADMIN) searchOrdersStatus();
		else searchOrdersAwaitingPayment();
	}, []);

	return (
		<Fragment>
			{!menuIsOpen ? (
				<Container>
					<MenuMobile onClick={() => setMenuIsOpen(true)}>
						<FaBars size={20} />
					</MenuMobile>

					<User>
						<Link to="/">
							<BrandImage />
						</Link>
						{CheckRoleUser(user) && <span>{user?.role}</span>}
					</User>

					<Search>
						<ConsultFoods description={search} setDescription={setSearch} />
					</Search>

					<Options>
						<Link to={CheckRoleUser(user) ? "/favorite-food-admin" : "/favorite-food"} className="options">
							{CheckRoleUser(user) ? "Favoritos" : "Meus favoritos"}
						</Link>

						{!CheckRoleUser(user) ? (
							<Link to={"/order-historic"} className="options">
								Histórico de pedidos
							</Link>
						) : (
							<Link to={"/create-food"} className="options">
								Novo prato
							</Link>
						)}

						<Link to={`${CheckRoleUser(user) ? "/order-status-update" : "/order"}`}>
							<Button icon={PiReceipt} name={`Pedidos (${orderQuantity ?? 0})`} />
						</Link>
					</Options>

					<Orders>
						<Link to={`${CheckRoleUser(user) ? "/order-status-update" : "/order"}`}>
							<div>
								<PiReceipt size={24} />
							</div>
							<Badge>{orderQuantity ?? 0}</Badge>
						</Link>
					</Orders>

					<Link to="/">
						<SignOutButton type="button" onClick={signOut}>
							<FiLogOut size={24} />
						</SignOutButton>
					</Link>
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
							<Link to={CheckRoleUser(user) ? "/favorite-food-admin" : "/favorite-food"}>
								<button>{CheckRoleUser(user) ? "Favoritos" : "Meus favoritos"}</button>
							</Link>
							{!CheckRoleUser(user) && (
								<Link to="/order-historic">
									<button>Histórico de pedidos</button>
								</Link>
							)}
							{CheckRoleUser(user) && (
								<Link to="/create-food">
									<button>Novo prato</button>
								</Link>
							)}
							<Link to="/">
								<button onClick={() => signOut()}>Sair</button>
							</Link>
						</OptionButton>
					</OptionsMobile>
				</Fragment>
			)}
		</Fragment>
	);
}
