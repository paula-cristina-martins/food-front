import { BrowserRouter } from "react-router-dom";

import { useAuth } from "../hooks/auth";
import { USER_ROLE } from "../utils/roles";

import { AdminRoutes } from "./admin.routes";
import { CommonRoutes } from "./common.routes";
import { AuthRoutes } from "./auth.routes";
import { useEffect } from "react";
import { api } from "../services/api";

export function Routes() {
	const { user, signOut } = useAuth();

	useEffect(() => {
		api.get("/users/validated").catch((error) => {
			if (error.response?.status === 401) {
				signOut();
			}
		});
	}, []);

	function AccessRoute() {
		switch (user.role) {
			case USER_ROLE.ADMIN:
				return <AdminRoutes />;
			case USER_ROLE.COMMON:
				return <CommonRoutes />;
			default:
				<CommonRoutes />;
		}
	}

	return <BrowserRouter>{user ? <AccessRoute /> : <AuthRoutes />}</BrowserRouter>;
}
