import { createHttp } from "./BaseService";

const authenticatedHttp = createHttp(true);

export const getCurrentUser = () => authenticatedHttp.get("/users/me");
export const getUserById = (id) => authenticatedHttp.get(`/users/${id}`);
