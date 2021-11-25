const actionItems = document.querySelectorAll('.actions__card');
const faqTrigger = Array.from(document.querySelectorAll('.faq__subtitle'));
const faqItem = document.querySelectorAll('.faq__text');

actionItems.forEach(el => {
	el.onclick = () => {
		el.scrollIntoView({ block: "nearest", behavior: "smooth", inline: "center" });
	}
})

faqTrigger.forEach(el => {
	el.onclick = () => {
		if (window.getComputedStyle(faqItem[faqTrigger.indexOf(el)]).height === '0px') {
			faqItem[faqTrigger.indexOf(el)].style.animation = 'text 700ms forwards';
		} else {
			faqItem[faqTrigger.indexOf(el)].style.animation = 'textBack 500ms forwards';
		}
	}
})