const trigger = document.querySelector('.nav__block');
const obj = Array.from(document.querySelectorAll('.nav__list-item_col'));
const burger = document.querySelector('.header__burger');
const navMenu = document.querySelector('.nav__list');

trigger.onmouseover = () => {
	obj.forEach(el => {
		el.style.display = 'block';
	})
}
trigger.onmouseleave = () => {
	obj.forEach(el => {
		el.style.display = 'none';
	})
}

let navTransform = () => {
	navMenu.style.display = 'block';
	navMenu.style.position = 'absolute';
	navMenu.style.right = '0';
	navMenu.style.background = '#fff';
	navMenu.style.width = '200px';
	document.querySelector('.nav__block').style.width = '200px';
}

burger.onclick = () => {
	if (window.getComputedStyle(navMenu).display === 'none') {
		navTransform();
	} else {
		navMenu.style.display = 'none';
	}
}

window.onresize = () => {
	if (window.screen.width > 767) {
		navMenu.style.display = 'flex';
		navMenu.style.position = 'unset';
		navMenu.style.width = '100%';
		navMenu.style.justifyContent = 'right';
		document.querySelector('.nav__block').style.width = 'unset';
	} else if (navMenu.style.display != 'none') { navTransform() }
}