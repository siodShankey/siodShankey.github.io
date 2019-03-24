var headerBottom = document.querySelector('.header__bottom');
var mainPage = document.querySelector('.main__inner');
var shadowElem = document.createElement('div');
var headerNav = document.querySelector('.header__nav');
var socials = document.querySelector('.page__socials');
window.onscroll = function () {scrollTopSticky()};

var sticky = headerNav.offsetTop;

	function scrollTopSticky () {
		if (window.pageYOffset >= sticky)
			{
				// headerBottom.classList.add('header__bottom--fixed');
				socials.classList.add('page__socials--visible');
				headerBottom.appendChild(shadowElem);
				mainPage.classList.add('main__inner_js--margin');
				headerNav.classList.add('header__nav--sticky');
			}

		else
			 {
				shadowElem.remove();
				socials.classList.remove('page__socials--visible');
				headerNav.classList.remove('header__nav--sticky');
			}
	}
