const navHomeClickEvent = document.getElementById('nav-home');
const navAboutClickEvent = document.getElementById('nav-about');

navAboutClickEvent.addEventListener('click', () => {
	let offset = Number(document.getElementById('my-name').offsetTop);
	window.scrollTo(0, offset-40)
});

navHomeClickEvent.addEventListener('click', () => {
	window.scrollTo(0,0)
});