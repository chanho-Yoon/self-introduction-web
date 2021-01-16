const navHomeClickEvent = document.getElementById('nav-home');
const navAboutClickEvent = document.getElementById('nav-about');
const navProjectClickEvent = document.getElementById('nav-project');
const navFooterClickEvent = document.getElementById('nav-footer');

navHomeClickEvent.addEventListener('click', () => {
	window.scrollTo({ top: 0, behavior: 'smooth' });
});

navAboutClickEvent.addEventListener('click', () => {
	let offset = Number(document.getElementById('my-name').offsetTop);
	window.scrollTo({ top: offset - 40, behavior: 'smooth' });
});

navProjectClickEvent.addEventListener('click', () => {
	let offset = Number(document.getElementById('my-project').offsetTop);
	window.scrollTo({ top: offset - 40, behavior: 'smooth' });
});

navFooterClickEvent.addEventListener('click', () => {
	let offset = Number(document.getElementById('footer').offsetTop);
	window.scrollTo({ top: offset - 40, behavior: 'smooth' });
});