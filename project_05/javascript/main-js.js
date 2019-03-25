
////////////////////////VAR/////////////////////////////

var btn = document.querySelectorAll('.button-icon');
var navMenu = document.querySelector('.nav-wrap');
var header = document.querySelector('.header-wrap');
var pseudoBtn = document.createElement('button');
var formContainer = document.createElement('div');
var form = document.createElement('form');
var formInput = document.createElement('input');
var formBtn = document.createElement('button');

////////////////////////EventLIstener/////////////////////////////



	btn[0].addEventListener('click', showMenu);

	pseudoBtn.addEventListener('mouseover', hoverBtn);

	pseudoBtn.addEventListener('click', hideMenu);

	btn[1].addEventListener('click', showSearchForm);


//////////////////////Function//////////////////////
function showMenu() {

	header.removeChild(btn[0]);

		pseudoBtn.setAttribute('class','pseudo-btn');

			header.insertBefore(pseudoBtn, header.firstElementChild);

				navMenu.setAttribute('class','nav-wrap--left0');
}

function hideMenu () {

		navMenu.setAttribute('class','nav-wrap');

			header.removeChild(pseudoBtn);

				header.insertBefore(btn[0], header.firstElementChild);

}

function showSearchForm () {

	formContainer.setAttribute('class','search-block');
		header.appendChild(formContainer);


			form.setAttribute('class','form-search');
				formContainer.appendChild(form);


				formInput.setAttribute('class','form-search__input');
					form.appendChild(formInput);


					formBtn.setAttribute('class','form-search__button');
						form.appendChild(formBtn);

}


function hoverBtn (){
	pseudoBtn.style.boxShadow = '0 0 0 4px #ddd, 0 0 0 5px #cccccc;';
}
