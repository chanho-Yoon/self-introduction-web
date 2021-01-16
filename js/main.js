const navHomeClickEvent = document.getElementById('nav-home');
const navAboutClickEvent = document.getElementById('nav-about');
const navProjectClickEvent = document.getElementById('nav-project');

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

