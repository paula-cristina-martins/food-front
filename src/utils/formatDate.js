import { format, subHours } from "date-fns";

export function FormatDate(formatDate) {
	const date = new Date(formatDate);
	const updatedDate = subHours(date, 3);
	return format(updatedDate, "dd/MM 'às' HH'h'mm");
}
