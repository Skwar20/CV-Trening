const bar = document.querySelector('.menu-item');

function addclass() {
	bar.classList.toggle('active');
}

bar.addEventListener('click', addclass);
