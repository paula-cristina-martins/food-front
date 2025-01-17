import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext({});

import { api } from "../services/api";

function AuthProvider({ children }) {
	const [data, setData] = useState({});

	async function signIn({ email, password }) {
		try {
			if ((email.length == 0) | (password.length == 0)) {
				return alert("Informe e-mail e senha para acessar o sistema!");
			} else {
				const response = await api.post("sessions", { email, password }, { withCredentials: true });
				const { user } = response.data;

				localStorage.setItem("@food:user", JSON.stringify(user));

				setData({ user });
			}
		} catch (error) {
			if (error.response) {
				alert(error.response.data.message);
			} else {
				alert("Não foi possível acessar o sistema!");
			}
		}
	}

	function signOut() {
		localStorage.removeItem("@food:user");
		setData({});
	}

	useEffect(() => {
		const user = localStorage.getItem("@food:user");

		if (user) {
			setData({
				user: JSON.parse(user),
			});
		}
	}, []);

	return (
		<AuthContext.Provider
			value={{
				signIn,
				signOut,
				user: data.user,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

function useAuth() {
	const context = useContext(AuthContext);
	return context;
}

export { AuthProvider, useAuth };
