export const toBase64 = (file) => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();

		reader.readAsDataURL(file);

		reader.addEventListener('loadend', () => {
			resolve(reader.result);
		});

		reader.addEventListener('error', (e) => {
			reject(`Error: ${e.toString()}`);
		});
	})
}

localStorage.setItem('cartGoods',
	JSON.stringify([{id: '1234', count: 5}, {id: '1235', count: 2}]));
console.log(JSON.parse(localStorage.getItem('cartGoods')));