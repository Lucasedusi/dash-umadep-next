import axios from "axios";

export const api = axios.create({
	baseURL: "https://crud-umadep.herokuapp.com/",
});
