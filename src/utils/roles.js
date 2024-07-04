export const USER_ROLE = {
	ADMIN: "admin",
	COMMON: "common_user",
};

export function CheckRoleUser(user) {
	return user?.role === USER_ROLE.ADMIN;
}
