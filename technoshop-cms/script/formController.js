import {categories, form, modal} from "./elems.js";
import {getCategory, getGoods, postGoods} from "./serviceAPI.js";
import {toBase64} from "./tools.js";
import {createRow} from "./tableViewer.js";
import {closeModal} from "./modalController.js";
import {showPreview} from "./previewController.js";
import {API_URI} from "./const.js";

export const formController = () => {
	updateCategory();


	form.addEventListener('submit', async (ev) => {
		ev.preventDefault();

		const formData = new FormData(form);
		const data = {};

		for (const [key, value] of formData) {
			if (value) {
				data[key] = value;
			}
		}

		if (data.image.size) {
			data.image = await toBase64(data.image);
		} else	{
			delete data.image;
		}

		const goods = await postGoods(data);
		createRow(goods);
		closeModal(modal,"d-block");
	});


};

export const fillingForm = async (id) => {
	const {title, category, description, display, price, image} = await getGoods(id);
	form.title.value = title;
	form.category.value = category;
	form.description.value = description.join('\n');
	form.display.value = display;
	form.price.value = price;
	form.imagesave.value = image;
	showPreview(`${API_URI.replace('/api', '')}${image}`);
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