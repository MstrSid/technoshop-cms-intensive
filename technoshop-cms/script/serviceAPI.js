import {API_URI} from "./const.js";

export const getGoods = async () => {
	const response = await fetch(`${API_URI}goods/?nopage=true`);
	if (response.ok) {
		return await response.json();
	}
	throw new Error(response.status.toString());
};

export const getCategory = async () => {
	const response = await fetch(`${API_URI}category`);
	if(response.ok){
		return await response.json();
	}
	throw new Error(response.status.toString());
};