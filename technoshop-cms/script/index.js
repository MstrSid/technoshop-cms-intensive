import {modalBtnOpen, modal} from './elems.js';
import {modalController} from "./modalController.js";
import {previewController} from "./previewController.js";
import {tableController} from "./tableController.js";
import {formController} from "./formController.js";

document.addEventListener('DOMContentLoaded', () => {

	const init = () => {
		modalController({
			modal: modal,
			modalBtnOpen: modalBtnOpen,
			modalClassClose: "btn-close",
			modalOpenClass: "d-block"
		});

		previewController();
		tableController();
		formController();
	};

	init();
});


