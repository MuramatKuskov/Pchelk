const filterTrigger = document.querySelector('.filter__title');
const subj = document.querySelector('.filter__column');
const content = document.querySelector('.cards__block');

filterTrigger.onclick = () => {
	if (window.screen.width < 641) {
		if (window.getComputedStyle(subj).height === '80px') {
			subj.style.height = '251px';
			content.style.marginTop = '150px';
		} else {
			subj.style.height = '80px';
			content.style.marginTop = '0px';
		}
	}
}

window.onresize = () => {
	if (window.screen.width > 640) {
		content.style.marginTop = 'unset';
	} else if (window.screen.width < 641 && window.getComputedStyle(subj).height === '251px') {
		content.style.marginTop = '150px';
	}
}