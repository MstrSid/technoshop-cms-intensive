import {modalBtnOpen, modal} from './elems.js';
import {modalController} from "./modalController.js";

document.addEventListener('DOMContentLoaded', () => {
	modalController({
		modal: modal,
		modalBtnOpen: modalBtnOpen,
		modalClassClose: "btn-close",
		modalOpenClass: "d-block"
	})
});


