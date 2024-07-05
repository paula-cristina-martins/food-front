import { Route, Routes } from "react-router-dom";
import { NotFound } from "../pages/NotFound";
import { Home } from "../pages/Home";

export function CommonRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="*" exact={true} element={<NotFound />} />
		</Routes>
	);
}
