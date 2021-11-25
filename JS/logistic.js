const pages = Array.from(document.querySelectorAll('.logistic__pages'));
const content = Array.from(document.querySelectorAll('.page:nth-child(1n+3)'));
let underline = document.querySelector('.logistic__underline');
let color = document.querySelector('.logistic__row');

pages.forEach(el => {
	el.onclick = () => {
		let i = pages.indexOf(el);
		var shown = content.slice(i, i + 1);
		content.forEach(elem => {
			elem.style.display = 'none';
		})
		shown.forEach(elem => { elem.style.display = 'block'; })
		if (window.screen.width > 767) {
			color.style.background = 'radial-gradient(circle at 50% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%) ' + i * 156 + 'px 80px / 112px 35px no-repeat no-repeat, radial-gradient(circle at 50% 50%, rgba(91,99,107,1) 0%,  100%, rgba(255,255,255,1) 48.16%, rgba(69,168,255,0) 100%) 0px 80px / 200px 35px repeat no-repeat';
			color.style.backgroundClip = 'text';
			color.style.WebkitBackgroundClip = 'text';
			underline.style.background = 'radial-gradient(circle at 50% 50%, #F2B236 0%, #F2B236 100%) ' + i * 156 + 'px 0px / 112px no-repeat';
		} else if (window.screen.width < 481) {
			color.style.background = 'radial-gradient(circle at 50% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%) ' + i * 96 + 'px 40px / 77px 20px no-repeat no-repeat, radial-gradient(circle at 50% 50%, rgba(91,99,107,1) 0%,  100%, rgba(255,255,255,1) 48.16%, rgba(69,168,255,0) 100%) 0px 40px / 200px 35px repeat no-repeat';
			color.style.backgroundClip = 'text';
			color.style.WebkitBackgroundClip = 'text';
			underline.style.background = 'radial-gradient(circle at 50% 50%, #F2B236 0%, #F2B236 100%) ' + i * 96 + 'px 0px / 77px no-repeat';
		} else if (window.screen.width < 768) {
			color.style.background = 'radial-gradient(circle at 50% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%) ' + i * 115 + 'px 60px / 112px 35px no-repeat no-repeat, radial-gradient(circle at 50% 50%, rgba(91,99,107,1) 0%,  100%, rgba(255,255,255,1) 48.16%, rgba(69,168,255,0) 100%) 0px 60px / 200px 35px repeat no-repeat';
			color.style.backgroundClip = 'text';
			color.style.WebkitBackgroundClip = 'text';
			underline.style.background = 'radial-gradient(circle at 50% 50%, #F2B236 0%, #F2B236 100%) ' + i * 130 + 'px 0px / 97px no-repeat';
		}
	}
});