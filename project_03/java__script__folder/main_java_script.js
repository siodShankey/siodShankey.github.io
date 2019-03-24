

function bgShow(){
	var mainHeaderNavWrapper = document.getElementById('wrapper__header__nav');
	var f = document.getElementById("borderChng");
	var s = document.getElementById("object__search");

 		mainHeaderNavWrapper.style.top = "0px";
		f.style.borderBottom = "1px solid #a7a7a7";
		s.setAttribute("data","svg/search_glass_icon.svg");
};

function bgShowReturn(){
	var mainHeaderNavWrapper = document.getElementById('wrapper__header__nav');
	var f = document.getElementById("borderChng");
	var s = document.getElementById("object__search");

		mainHeaderNavWrapper.style.top = "-280px";
		f.style.borderBottom = "1px solid #a7a7a7";
		s.setAttribute("data","svg/search_glass_icon.svg");
};


function hideShowNav(){
	var clickArrow = document.getElementById('wrapper__header__nav');
	 	state = clickArrow.style.top;
	        if(state =="0px") clickArrow.style.top = "-280px";
            else clickArrow.style.top = "0px";

	var s = document.getElementById("object__search");
		  s.setAttribute("data","svg/search_glass_icon.svg");

	var f = document.getElementById("borderChng");
		f.style.borderBottom = "1px solid #a7a7a7";
 };

 function changeColorSearchIcon(){
	 var f = document.getElementById("borderChng");
	 var s = document.getElementById("object__search");
	 	s.setAttribute("data","svg/search_glass_icon02.svg");
		f.style.borderBottom = "1px solid #cc5c48";
 };

function chngBckground(){
	 var a = document.getElementByTagName("body");
	    a.style.display = "none";
};

 function color(){
	 var b = document.getElementsByTagName("td");
		for(a = 0; a< co.length; a++)
				b[a].style.fontSize = "5px";
};

function soundcloudWidget(){
	var soundcloudWidgetBar = document.getElementById("soundcloud__container__wrapper");
	var mainHeaderNavWrapper = document.getElementById('wrapper__header__nav');
	var search = document.getElementById("object__search");
	var borderChng = document.getElementById("borderChng");
	var bB = document.getElementsByClassName("sub_menu");

		state = soundcloudWidgetBar.style.top;
			if(state = soundcloudWidgetBar.style.top=="") soundcloudWidgetBar.style.top = "100px";
			else if(state = soundcloudWidgetBar.style.top=="100px")soundcloudWidgetBar.style.top = "";
		mainHeaderNavWrapper.style.top = "-280px";
		search.setAttribute("data","svg/search_glass_icon.svg");
		borderChng.style.borderBottom = " 1px solid #a7a7a7";
		if(bB[0].style.display == "block") bB[0].style.display = "none",soundcloudWidgetBar.style.top = "100px";
};

function showTable() {
	var s = document.getElementById("object__search");
	var f = document.getElementById("borderChng");
	var bB = document.getElementsByClassName("sub_menu");
	var mainHeaderNavWrapper = document.getElementById('wrapper__header__nav');
	var b = document.getElementById("object__search");
	var soundcloudWidgetBar = document.getElementById("soundcloud__container__wrapper");

		s.setAttribute("data","svg/search_glass_icon.svg");
		f.style.borderBottom = "1px solid #a7a7a7";
		state = bB[0].style.display;
		   if(state =="") bB[0].style.display = "block";
			else bB[0].style.display = "";
			if (soundcloudWidgetBar.style.top =="100px") bB[0].style.display = "block",soundcloudWidgetBar.style.top = "-600px";
		mainHeaderNavWrapper.style.top = "-280px";
		mainHeaderNavWrapper.style.position = "fixed";
	 	s.setAttribute("data","svg/search_glass_icon.svg");

};

//===============================================================================================================================================================================
//

// function bgShowDbl(){
//  var bgShow = document.getElementById('wrapper__header__nav');
//   	mainHeaderNavWrapper.style.top = "0px";
// 	var f = document.getElementById("borderChng");
// 		f.style.borderBottom = "1px solid #a7a7a7";
// 			var s = document.getElementById("object__search");
// 				s.setAttribute("data","svg/search_glass_icon.svg");
// };


//function showTableUnreleased() {
// 	var aBc = document.getElementsByClassName("sub_menuUn");
// 		state = aBc[0].style.visibility;
// 		    if(state == "") aBc[0].style.visibility = "visible";
// 			    else aBc[0].style.visibility = "";
//
// var mainHeaderNavWrapper = document.getElementById('wrapper__header__nav');
// 	mainHeaderNavWrapper.style.top = "-280px";
//
// var s = document.getElementById("object__search");
// 	s.setAttribute("data","svg/search_glass_icon.svg");
//
// var f = document.getElementById("borderChng");
// 	f.style.borderBottom = "1px solid #a7a7a7";
//
// 	var soundcloudWidgetBar = document.getElementById("soundcloud__container__wrapper");
// 		soundcloudWidgetBar.style.top = "-600px";
//
// };


// var g = [function color()
// 	var co = querySelectorAll("th");
// 		for(e = 0; e < co.length; e++)
// 			co[e].style.color = "green";
// ];


 // function changeColorSearchIconReturn(){
	//  var s = document.getElementById("object__search");
	//  		s.setAttribute("data","svg/search_glass_icon02.svg");
 // };
