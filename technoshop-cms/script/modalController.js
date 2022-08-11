import {hidePreview} from "./previewController.js";

const openModal = (modal, modalOpenClass) => {
	modal.classList.add(modalOpenClass);
};

const closeModal = (modal, modalOpenClass) => {
	modal.classList.remove(modalOpenClass);
}

export const modalController = ({
	modal,
	modalBtnOpen,
	modalClassClose,
	modalOpenClass
}) => {
	modalBtnOpen.addEventListener('click', (e) => {
		if (e.target) {
			openModal(modal, modalOpenClass);
		}
	});

	modal.addEventListener('click', (e) => {
		if (e.target === modal || e.target.classList.contains(
			modalClassClose)) {
			closeModal(modal, modalOpenClass);
			hidePreview();
		}
	})
}