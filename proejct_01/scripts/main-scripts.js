
var navLink = document.querySelectorAll('.nav__link');
var subMenu = document.querySelectorAll('.nav__sub-menu');
var subLink = document.querySelectorAll('.nav__link');
var shadowElem = document.createElement('div');
var b = document.body;

	navLink[0].addEventListener('mouseover', showSubMenuHtml);
	b.addEventListener('click', hideSubMenuHtml);
		function showSubMenuHtml() {
			hideSubMenuCss();
			hideSubMenuJavaScript();
			hideSubMenuPython();
			hideSubMenuJquery();
			hideSubMenuXml();
			 hideSubMenuPhp();
				subMenu[0].classList.add('nav__sub-menu--visual');
					subLink[0].classList.add('nav__link--current');
		}
			function hideSubMenuHtml () {
				subMenu[0].classList.remove('nav__sub-menu--visual');
					subLink[0].classList.remove('nav__link--current');
		}


	navLink[1].addEventListener('mouseover', showSubMenuCss);
	b.addEventListener('click', hideSubMenuCss);
		function showSubMenuCss () {
			hideSubMenuHtml();
			hideSubMenuJavaScript();
			hideSubMenuPython();
			hideSubMenuJquery();
			hideSubMenuXml();
			 hideSubMenuPhp();
				subMenu[1].classList.add('nav__sub-menu--visual');
					subLink[1].classList.add('nav__link--current');
		}
		function hideSubMenuCss () {
				subMenu[1].classList.remove('nav__sub-menu--visual');
					subLink[1].classList.remove('nav__link--current');
		}


	navLink[2].addEventListener('mouseover', showSubMenuJavaScript);
	b.addEventListener('click', hideSubMenuJavaScript);
		function showSubMenuJavaScript () {
			hideSubMenuHtml();
			hideSubMenuCss();
			hideSubMenuPython();
			hideSubMenuJquery();
			hideSubMenuXml();
			 hideSubMenuPhp();
				subMenu[2].classList.add('nav__sub-menu--visual');
					subLink[2].classList.add('nav__link--current');
		}

		function hideSubMenuJavaScript () {
				subMenu[2].classList.remove('nav__sub-menu--visual');
					subLink[2].classList.remove('nav__link--current');
		}


	navLink[3].addEventListener('mouseover', showSubMenuPython);
	b.addEventListener('click', hideSubMenuPython);
		function showSubMenuPython  () {
			hideSubMenuHtml();
			hideSubMenuCss();
			hideSubMenuJavaScript();
			hideSubMenuJquery();
			hideSubMenuXml();
			 hideSubMenuPhp();
				subMenu[3].classList.add('nav__sub-menu--visual');
					subLink[3].classList.add('nav__link--current');
		}

		function hideSubMenuPython () {
				subMenu[3].classList.remove('nav__sub-menu--visual');
					subLink[3].classList.remove('nav__link--current');
		}


	navLink[4].addEventListener('mouseover', showSubMenuJquery);
	b.addEventListener('click', hideSubMenuJquery);
		function showSubMenuJquery  () {
			hideSubMenuHtml();
			hideSubMenuCss();
			hideSubMenuJavaScript();
			hideSubMenuPython();
			hideSubMenuXml();
			 hideSubMenuPhp();
				subMenu[4].classList.add('nav__sub-menu--visual');
					subLink[4].classList.add('nav__link--current');
		}

		function hideSubMenuJquery () {
				subMenu[4].classList.remove('nav__sub-menu--visual');
					subLink[4].classList.remove('nav__link--current');
		}

		navLink[5].addEventListener('mouseover', showSubMenuXml);
		b.addEventListener('click', hideSubMenuXml);
			function showSubMenuXml  () {
				hideSubMenuHtml();
				hideSubMenuCss();
				hideSubMenuJavaScript();
				hideSubMenuPython();
				 hideSubMenuJquery();
				 hideSubMenuPhp();
					subMenu[5].classList.add('nav__sub-menu--visual');
						subLink[5].classList.add('nav__link--current');
			}

			function hideSubMenuXml () {
					subMenu[5].classList.remove('nav__sub-menu--visual');
						subLink[5].classList.remove('nav__link--current');
			}

			navLink[6].addEventListener('mouseover', showSubMenuPhp);
			b.addEventListener('click', hideSubMenuPhp);
				function showSubMenuPhp  () {
					hideSubMenuHtml();
					hideSubMenuCss();
					hideSubMenuJavaScript();
					hideSubMenuPython();
					hideSubMenuJquery();
					hideSubMenuXml();
						subMenu[6].classList.add('nav__sub-menu--visual');
							subLink[6].classList.add('nav__link--current');
				}

				function hideSubMenuPhp () {
						subMenu[6].classList.remove('nav__sub-menu--visual');
							subLink[6].classList.remove('nav__link--current');
				}


						// window.onscroll = function () {scrollTopSticky()};
						//
						// var sticky = headerNav.offsetTop;
						//
						// 	function scrollTopSticky () {
						// 		if (window.pageYOffset >= sticky )
						// 			{
						// 				headerNav.classList.add('header__bottom--fixed');
						// 			}
						//
						// 		else
						// 			 {
						// 				headerNav.classList.remove('header__bottom--fixed');
						// 			}
						// 	}







































	/*var zero = 0;
	var d = document.querySelector('html');
	var mainDocument = document.querySelector('.main');
	var innerMain = document.createElement('div');
	var circleDiv = document.createElement('div');

		d.addEventListener('click', mouseOver);


				function mouseOver () {

					var inT = setInterval(zz, 1);

						function zz () {

							if (zero <= 500){
								innerMain.classList.add('main__inner');
								mainDocument.appendChild(innerMain);
								circleDiv.classList.add('circle');
								zero++;
								circleDiv.innerHTML = zero;
								innerMain.appendChild(circleDiv);
							}
						}

				}
				*/
