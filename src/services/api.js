import axios from "axios";

export const api = axios.create({
	baseURL: "https://food-back-9nux.onrender.com/",
	withCredentials: true,
});
