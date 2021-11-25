const filterTrigger = document.querySelector('.filter__title');
const filterSubj = document.querySelector('.filter__column');
const content = document.querySelector('.cards__block');
const slides = document.querySelectorAll("input[type=range]");
const displays = Array.from(document.querySelectorAll('input[type=text]')).splice(1, 6);

filterTrigger.onclick = () => {
	if (window.screen.width < 641) {
		if (window.getComputedStyle(filterSubj).height === '80px') {
			filterSubj.style.height = '951px';
			content.style.marginTop = '850px';
		} else {
			filterSubj.style.height = '80px';
			content.style.marginTop = '0px';
		}
	}
}

window.onresize = () => {
	if (window.screen.width > 640) {
		content.style.marginTop = 'unset';
	} else if (window.screen.width < 641 && window.getComputedStyle(filterSubj).height === '951px') {
		content.style.marginTop = '850px';
	}
}

function getVals() {
	//значение атрибута value
	var slide1 = parseFloat(slides[0].value);
	var slide2 = parseFloat(slides[1].value);
	var slide3 = parseFloat(slides[2].value);
	var slide4 = parseFloat(slides[3].value);
	var slide5 = parseFloat(slides[4].value);
	var slide6 = parseFloat(slides[5].value);
	// меняет местами ползунки при пересечении
	if (slide1 > slide2) { var tmp = slide2; slide2 = slide1; slide1 = tmp; }
	if (slide3 > slide4) { var tmp = slide4; slide4 = slide3; slide3 = tmp; }
	if (slide5 > slide6) { var tmp = slide6; slide6 = slide5; slide5 = tmp; }
	// вывод значения в поля

	displays[0].value = slide1;
	displays[1].value = slide2;
	displays[2].value = slide3;
	displays[3].value = slide4;
	displays[4].value = slide5;
	displays[5].value = slide6;
}

slides.forEach(el => {
	el.oninput = () => {
		getVals();
	}
})

displays.forEach(el => {
	el.oninput = () => {
		slides[displays.indexOf(el)].value = displays[displays.indexOf(el)].value;
	}
})