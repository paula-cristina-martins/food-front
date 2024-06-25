import { useState } from "react";
import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { BrandImage } from "../../components/BrandImage";

export function SignUp() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	function handleSignUp() {
		if (!name || !email || !password) {
			return alert("Preencha todos os campos!");
		}
		if (password.length < 6) {
			return alert("A senha deve conter no mínimo 6 dígitos!");
		}

		api
			.post("/users", { name, email, password })
			.then(() => {
				alert("Cadastro realizado com sucesso!");
				navigate("/");
			})
			.catch((error) => {
				if (error.response) {
					alert(error.response.data.message);
				} else {
					alert("Não foi possível cadastrar.");
				}
			});
	}

	return (
		<Container>
			<BrandImage size={2.6} />
			<Form>
				<h1>Crie a sua conta</h1>

				<Input
					title={"Seu nome"}
					type={"text"}
					placeholder={"Exemplo: Maria da Silva"}
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>

				<Input
					title={"Email"}
					type={"text"}
					placeholder={"Exemplo: exemplo@exemplo.com.br"}
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>

				<Input
					title={"Senha"}
					type={"password"}
					placeholder={"No mínimo 6 caracteres"}
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>

				<Button name={"Criar Conta"} onClick={handleSignUp} />

				<Link to={"/"}>Já tenho uma conta</Link>
			</Form>
		</Container>
	);
}
