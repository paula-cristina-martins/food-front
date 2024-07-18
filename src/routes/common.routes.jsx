import { Route, Routes } from "react-router-dom";
import { NotFound } from "../pages/NotFound";
import { Home } from "../pages/Home";
import { ShowFood } from "../pages/Food";
import { FavoriteFood } from "../pages/Favorites";
import { Order } from "../pages/Order";
import { HistoricOrder } from "../pages/Order/Historic";

export function CommonRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/show-food/:id" element={<ShowFood />} />
			<Route path="/favorite-food" element={<FavoriteFood />} />
			<Route path="/order" element={<Order />} />
			<Route path="/order/historic" element={<HistoricOrder />} />
			<Route path="*" exact={true} element={<NotFound />} />
		</Routes>
	);
}
