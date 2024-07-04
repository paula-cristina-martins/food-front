import { createContext, useContext, useState, useEffect } from "react";

const ConsultFoodContext = createContext({});

import { api } from "../services/api";
import { useAuth } from "./auth";

function ConsultFoodProvider({ children }) {
	const { user } = useAuth();
	const [search, setSearch] = useState("");
	const [foodsByCategory, setFoodsByCategory] = useState({});

	async function searchFoodsByCategory() {
		try {
			const response = await api.get(`foods/search/category?search=${search}`, {
				withCredentials: true,
			});
			setFoodsByCategory(response.data);
		} catch (error) {
			setFoodsByCategory({});
			if (error.response) {
				alert(error.response.data.message);
			} else {
				alert("Não foi possível localizar pratos por categoria!");
			}
		}
	}

	useEffect(() => {
		if (user != undefined) searchFoodsByCategory();
	}, [search]);

	return (
		<ConsultFoodContext.Provider
			value={{
				search,
				setSearch,
				foodsByCategory,
				searchFoodsByCategory,
			}}
		>
			{children}
		</ConsultFoodContext.Provider>
	);
}

function useConsultFood() {
	const context = useContext(ConsultFoodContext);
	return context;
}

export { ConsultFoodProvider, useConsultFood };
