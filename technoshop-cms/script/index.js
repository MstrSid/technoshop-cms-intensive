import {modalBtnOpen, modal} from './elems.js';
import {modalController} from "./modalController.js";
import {previewController} from "./previewController.js";

document.addEventListener('DOMContentLoaded', () => {
	modalController({
		modal: modal,
		modalBtnOpen: modalBtnOpen,
		modalClassClose: "btn-close",
		modalOpenClass: "d-block"
	});

	previewController();
});


