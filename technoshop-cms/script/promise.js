const photos = ["https://loremflickr.com/3200/2400?random=1",
	"https://loremflickr.com/3200/2400?random=2",
	"https://loremflickr.com/3200/2400?random=3",
	"https://loremflickr.com/3200/2400?random=4",
	"https://loremflickr.com/3200/2400?random=5"];

const loadImg = (src) => new Promise((resolve, reject) => {
	const img = new Image(300);
	img.src = src;
	img.addEventListener('load', () => {
		resolve(img);
	});
	img.addEventListener('error', (err) => {
		reject(new Error(err.toString()));
	})
});

const allImg = [];
const loader = document.createElement('div');
loader.textContent = 'Loading images...';
document.body.prepend(loader);

photos.forEach((item, i) => {
	allImg.push(loadImg(photos[i]));
})

const showImg = async () => {
	const images = await Promise.all(allImg);
	images.forEach(item => document.body.prepend(item));
	return 0;
}

showImg().then(status => status === 0 ? loader.remove() : console.log('error'));


