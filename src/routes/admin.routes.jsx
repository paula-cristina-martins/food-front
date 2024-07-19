import { Route, Routes } from "react-router-dom";
import { NotFound } from "../pages/NotFound";
import { Home } from "../pages/Home";
import { ShowFood } from "../pages/Food";
import { UpdateFood } from "../pages/Food/Update";
import { CreateFood } from "../pages/Food/Create";
import { FavoriteFoodAdmin } from "../pages/FavoritesAdmin";
import { UpdateStatusOrder } from "../pages/Order/Status";

export function AdminRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/show-food/:id" element={<ShowFood />} />
			<Route path="/update-food/:id" element={<UpdateFood />} />
			<Route path="/create-food" element={<CreateFood />} />
			<Route path="/favorite-food-admin" element={<FavoriteFoodAdmin />} />
			<Route path="/order-status-update" element={<UpdateStatusOrder />} />
			<Route path="*" exact={true} element={<NotFound />} />
		</Routes>
	);
}
