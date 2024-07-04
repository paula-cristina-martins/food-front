import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./hooks/auth";
import { ConsultFoodProvider } from "./hooks/consultFood";

import theme from "./styles/theme";
import GlobalStyles from "./styles/global";

import { Routes } from "./routes";
import { OrdersProvider } from "./hooks/orders";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<AuthProvider>
				<ConsultFoodProvider>
					<OrdersProvider>
						<Routes />
					</OrdersProvider>
				</ConsultFoodProvider>
			</AuthProvider>
		</ThemeProvider>
	</React.StrictMode>
);
