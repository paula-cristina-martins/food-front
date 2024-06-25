import { Route, Routes } from "react-router-dom";
import { NotFound } from "../pages/NotFound";

export function CommonRoutes() {
	return (
		<Routes>
			<Route path="*" exact={true} element={<NotFound />} />
		</Routes>
	);
}
