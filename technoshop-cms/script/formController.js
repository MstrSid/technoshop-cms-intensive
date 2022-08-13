import {categories} from "./elems.js";
import {getCategory} from "./serviceAPI.js";

export const formController = () => {
	updateCategory();
};

const updateCategory = async () => {
	categories.textContent = '';
	const categoryList = await getCategory();
	const categoryOption = categoryList.map(cat => {
		const option = document.createElement('option');
		option.value = cat;
		return option;
	});
	categories.prepend(...categoryOption);
};