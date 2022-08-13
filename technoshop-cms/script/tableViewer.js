import {tableGoods} from "./elems.js";
import {currencyFormatRUB} from "./tools.js";

export const tableRender = (goods) => {
	tableGoods.textContent = '';
	const fullTr = goods.map(item => createRow(item));
	tableGoods.append(...fullTr);
};

const createRow = ({id, title, category, price}) => {
	const tr = document.createElement('tr');
	tr.classList.add('table-row', 'table-goods-item');
	tr['data-id'] = id;
	tr.insertAdjacentHTML('beforeend', `
            <td>${id}</td>
            <td>${title}</td>
            <td>${category}</td>
            <td class="text-end">${currencyFormatRUB(price)}</td>
            <td class="d-flex">
              <button class="btn-table btn-delete">
                <svg width="30" height="30">
                  <use xlink:href="#delete" />
                </svg>
              </button>
            </td>
		`);
	return tr;
};