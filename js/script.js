// Just to be sure that the functions are executed in the proper HTML file
var url = window.location.href;
var file = url.split('/');
var fileName = file[file.length - 1].split('.');

// SWITCH Statement
switch (fileName[0]) {
	case 'index':
		break;
	case 'projects':

		const headerElement = document.getElementById("header");
		window.onscroll = function () {
			if (window.scrollY > 55) { // Set to black
				headerElement.style.backgroundColor = "#131313ee";
			};

			if (window.scrollY < 55) { // Set to transparent
				headerElement.style.backgroundColor = "transparent";
			};
		}
		break;
}

// Hamburger menu



