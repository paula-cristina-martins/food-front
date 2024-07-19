export const ORDER_TYPES = {
	AWAITING_PAYMENT: "awaiting_payment",
	PENDING: "pending",
	PREPARING: "preparing",
	DELIVERED: "delivered",
	CANCELED: "canceled",
};

export const ORDER_TYPES_COLORS = {
	AWAITING_PAYMENT: "LIGHT_700",
	PENDING: "YELLOW_300",
	PREPARING: "BLUE_200",
	DELIVERED: "GREEN_200",
	CANCELED: "RED_600",
};

export function OrderType(status) {
	switch (status) {
		case ORDER_TYPES.AWAITING_PAYMENT:
			return "Aguardando pagamento";
		case ORDER_TYPES.PENDING:
			return "Pendente";
		case ORDER_TYPES.PREPARING:
			return "Preparando";
		case ORDER_TYPES.DELIVERED:
			return "Entregue";
		case ORDER_TYPES.CANCELED:
			return "Cancelado";
		default:
			return "-";
	}
}

export function GetColor(status) {
	switch (status) {
		case ORDER_TYPES.AWAITING_PAYMENT:
			return ORDER_TYPES_COLORS.AWAITING_PAYMENT;
		case ORDER_TYPES.PENDING:
			return ORDER_TYPES_COLORS.PENDING;
		case ORDER_TYPES.PREPARING:
			return ORDER_TYPES_COLORS.PREPARING;
		case ORDER_TYPES.DELIVERED:
			return ORDER_TYPES_COLORS.DELIVERED;
		case ORDER_TYPES.CANCELED:
			return ORDER_TYPES_COLORS.CANCELED;
		default:
			return ORDER_TYPES_COLORS.AWAITING_PAYMENT;
	}
}
