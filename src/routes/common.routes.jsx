import { Route, Routes } from "react-router-dom";
import { NotFound } from "../pages/NotFound";
import { Home } from "../pages/Home";
import { ShowFood } from "../pages/Food";
import { FavoriteFood } from "../pages/Favorites";

export function CommonRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/show-food/:id" element={<ShowFood />} />
			<Route path="/favorite-food" element={<FavoriteFood />} />
			<Route path="*" exact={true} element={<NotFound />} />
		</Routes>
	);
}
