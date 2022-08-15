import {API_URI} from "./const.js";

export const getGoods = async (id) => {
	const response = await fetch(
		`${API_URI}goods/${id ? id : `?nopage=true`}`);
	if (response.ok) {
		return await response.json();
	}
	throw new Error(response.status.toString());
};

export const postGoods = async (data) => {
	const response = await fetch(`${API_URI}goods`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data),
	});
	if (response.ok) {
		return await response.json();
	}
	throw new Error(response.status.toString());
};

export const getCategory = async () => {
	const response = await fetch(`${API_URI}category`);
	if (response.ok) {
		return await response.json();
	}
	throw new Error(response.status.toString());
};