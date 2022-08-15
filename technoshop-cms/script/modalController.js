import {hidePreview} from "./previewController.js";
import {form, modal, modalSubmitBtn, modalTitle} from "./elems.js";
import {fillingForm} from "./formController.js";

const openModal = (id) => {
	if(id){
		fillingForm(id);
		modal.classList.add('d-block');
	}
	modal.classList.add('d-block');
};

export const closeModal = () => {
	modal.classList.remove('d-block');
	form.reset();
	hidePreview();
};

export const modalController = ({
	modalBtnOpen,
	delegation
}) => {
	if (modalBtnOpen) {
		modalBtnOpen.addEventListener('click', (e) => {
			if (e.target) {
				modalTitle.textContent = `Добавить новый товар`;
				modalSubmitBtn.textContent = `Добавить товар`;
				openModal();
			}
		});
	}
	if (delegation) {
		delegation.parent.addEventListener('click', ({target}) => {
			const goodsRow = target.closest(delegation.target);
			const targetExclude = target.closest(delegation.targetExclude);
			if (goodsRow && !targetExclude) {
				modalTitle.textContent =
					`Изменить товар №${goodsRow.dataset.id}`;
				modalSubmitBtn.textContent = `Изменить`;
				openModal(goodsRow.dataset.id);
			}
		})
	}


	modal.addEventListener('click', (e) => {
		if (e.target === modal || e.target.classList.contains('btn-close')) {
			closeModal();
		}
	})
};