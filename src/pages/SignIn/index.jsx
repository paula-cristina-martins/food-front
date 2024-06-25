import { useState } from "react";

import { useAuth } from "../../hooks/auth";

import { Container, Form } from "./styles";

import Logo from "../../assets/logo.svg";
import { BrandImage } from "../../components/BrandImage";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";

export function SignIn() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { signIn } = useAuth();

	function handleSignIn() {
		signIn({ email, password });
	}

	return (
		<Container>
			<BrandImage size={2} />
			<Form>
				<h1>Faça login</h1>

				<Input
					title={"Email"}
					type={"text"}
					placeholder={"exemplo@exemplo.com.br"}
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					autoComplete="email"
				/>

				<Input
					title={"Senha"}
					type={"password"}
					placeholder={"- - - - - - -"}
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					autoComplete="current-password"
				/>

				<Button name={"Entrar"} onClick={handleSignIn} />

				<Link to={"/register"}>Criar uma conta</Link>
			</Form>
		</Container>
	);
}
