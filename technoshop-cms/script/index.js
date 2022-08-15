import {modalBtnOpen} from './elems.js';
import {modalController} from "./modalController.js";
import {previewController} from "./previewController.js";
import {tableController} from "./tableController.js";
import {formController} from "./formController.js";

document.addEventListener('DOMContentLoaded', () => {

	const init = () => {
		modalController({
			modalBtnOpen: modalBtnOpen,
		});

		previewController();
		tableController();
		formController();
	};

	init();
});


