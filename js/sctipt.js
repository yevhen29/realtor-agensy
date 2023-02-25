const open = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.getElementById('modal');

open.addEventListener('click', function(e){
	e.preventDefault();
	modal.classList.add('active')
})
close.addEventListener('click', () => {
	modal.classList.remove('active')
})