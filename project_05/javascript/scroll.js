window.onscroll = function () {scroLL()};


var menU = document.querySelector('.menu-wrap');
var scr = document.body.scrollTop;

	function scroLL() {

		if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
			menU.classList.add('menu--fixed');
		}

		else {
			menU.classList.remove('menu--fixed');
		}

	}
