import { Route, Routes } from "react-router-dom";
import { NotFound } from "../pages/NotFound";
import { Home } from "../pages/Home";
import { ShowFood } from "../pages/Food";

export function CommonRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/show-food/:id" element={<ShowFood />} />
			<Route path="*" exact={true} element={<NotFound />} />
		</Routes>
	);
}
