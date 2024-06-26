import { FiLogOut, FiSearch } from "react-icons/fi";
import { PiReceipt } from "react-icons/pi";

import { useAuth } from "../../hooks/auth";

import { Container, Search, SignOutButton, User } from "./styles";
import { BrandImage } from "../BrandImage";
import { Button } from "../Button";
import { Input } from "../Input";
import { useState } from "react";
import { USER_ROLE } from "../../utils/roles";

export function Header() {
	const { user, signOut } = useAuth();
	const [description, setDescription] = useState("");

	return (
		<Container>
			<User>
				<BrandImage />
				{user?.role == USER_ROLE.ADMIN && <span>{user?.role}</span>}
			</User>

			<Search>
				<span className="input-container">
					<FiSearch size={20} className="search-icon" />
					<input
						type={"text"}
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						placeholder={"Busque por pratos ou ingredientes"}
						autoComplete={"description"}
					/>
				</span>
			</Search>

			{user?.role == USER_ROLE.ADMIN ? (
				<Button name={"Novo prato"} />
			) : (
				<Button icon={PiReceipt} name={"Pedidos (0)"} />
			)}

			<SignOutButton type="button" onClick={signOut}>
				<FiLogOut size={24} />
			</SignOutButton>
		</Container>
	);
}
