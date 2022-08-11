export const toBase64 = (file) => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();

		reader.addEventListener('loadend', () => {
			resolve(reader.result);
		});

		reader.addEventListener('error', (e) => {
			reject(`Error: ${e.toString()}`);
		})

		reader.readAsDataURL(file);
	})
}