document.querySelector('.nav__menu-btn').addEventListener('click', function(e){
	e.preventDefault;
	this.classList.toggle('active');
	document.querySelector('.nav__list').classList.toggle('w');
	document.querySelector('.content').classList.toggle('m');
});