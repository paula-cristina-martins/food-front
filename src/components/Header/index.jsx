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
import { Fragment, useState } from "react";
import { USER_ROLE } from "../../utils/roles";
import { ConsultFoods } from "../Foods/Consult";

export function Header() {
	const { user, signOut } = useAuth();
	const [description, setDescription] = useState("");

	function checkRoleUser() {
		return user?.role === USER_ROLE.ADMIN;
	}

	const [menuIsOpen, setMenuIsOpen] = useState(false);

	return (
		<Fragment>
			{!menuIsOpen ? (
				<Container>
					<MenuMobile onClick={() => setMenuIsOpen(true)}>
						<FaBars size={20} />
					</MenuMobile>

					<User>
						<BrandImage />
						{checkRoleUser() && <span>{user?.role}</span>}
					</User>

					<Search>
						<ConsultFoods description={description} setDescription={setDescription} />
					</Search>

					<Options>
						{checkRoleUser() ? <Button name={"Novo prato"} /> : <Button icon={PiReceipt} name={"Pedidos (0)"} />}
					</Options>

					{!checkRoleUser() && (
						<Orders>
							<div>
								<PiReceipt size={24} />
							</div>
							<Badge>0</Badge>
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
						<ConsultFoods description={description} setDescription={setDescription} />
						<OptionButton>
							<button>Novo prato</button>
							<button onClick={() => signOut()}>Sair</button>
						</OptionButton>
					</OptionsMobile>
				</Fragment>
			)}
		</Fragment>
	);
}
