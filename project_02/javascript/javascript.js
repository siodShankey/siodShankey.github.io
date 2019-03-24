// $(function menuS () {
// 	$(".nav-menu-list_arrow-down").on("mouseenter", function (){
// 		$(".nav-sub-menu").fadeIn(100);
// 	});
//
// 	$(".layout").on("click", function (){
// 		$(".nav-sub-menu").fadeOut(100);
// 	});


var navSubMenu = document.querySelector('.nav-sub-menu');

var navListHover = document.querySelectorAll('.nav-menu-list');

var doc = document.querySelector('.layout');



		function showMenu () {
		navSubMenu.setAttribute('class','nav-sub-menu--show');
		}

		function hideMenu () {
		navSubMenu.setAttribute('class','nav-sub-menu');
		}

		navListHover[0].addEventListener('mouseover', showMenu);

		doc.addEventListener('click', hideMenu);



var links = ['img/social/social-hover/twitter_hover.svg','img/social/twitter.svg'];

	function initaialSocial () {
		var social = document.querySelectorAll('.social-link__icon');

				social[0].addEventListener('mouseover',function () {


					social[0].setAttribute('src','img/social/social-hover/twitter_hover.svg');
				});

				social[0].addEventListener('mouseout',function () {

					social[0].setAttribute('src','img/social/twitter.svg');
				});

				social[1].addEventListener('mouseover',function () {

					social[1].setAttribute('src','img/social/social-hover/vimeo_hover.svg');
				});

				social[1].addEventListener('mouseout',function () {

					social[1].setAttribute('src','img/social/vimeo.svg');
				});

				social[2].addEventListener('mouseover',function () {

					social[2].setAttribute('src','img/social/social-hover/facebook_hover.svg');
				});

				social[2].addEventListener('mouseout',function () {

					social[2].setAttribute('src','img/social/facebook.svg');
				});

				social[3].addEventListener('mouseover',function () {

					social[3].setAttribute('src','img/social/social-hover/instagram_hover.svg');
				});

				social[3].addEventListener('mouseout',function () {

					social[3].setAttribute('src','img/social/instagram.svg');
				});

				social[4].addEventListener('mouseover',function () {

					social[4].setAttribute('src','img/social/social-hover/dribbble_hover.png');
				});

				social[4].addEventListener('mouseout',function () {

					social[4].setAttribute('src','img/social/dribbble.png');
				});

				social[5].addEventListener('mouseover',function () {

					social[5].setAttribute('src','img/social/social-hover/reddit_hover.png');
				});

				social[5].addEventListener('mouseout',function () {

					social[5].setAttribute('src','img/social/reddit.png');
				});

	}

	initaialSocial ();
