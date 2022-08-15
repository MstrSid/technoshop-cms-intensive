import {preview, form, fieldsForm} from "./elems.js";
import {toBase64} from "./tools.js";

export const showPreview = (src) => {
	preview.style.display = 'block';
	preview.src = src;
};

export const hidePreview = () => {
	preview.style.display = '';
	preview.src = '';
	fieldsForm.forEach(item => {
		item.value = '';
	});
};

export const previewController = () => {
	const imageFile = form.image;
	imageFile.addEventListener('change', async () => {
		if (imageFile.files.length) {
			const src = await toBase64(imageFile.files[0]);
			showPreview(src);
		}
	});
};