// change styles on scroll js
window.addEventListener('scroll', function () {
	let header = document.querySelector('header');
	let windowPosition = window.scrollY > 0;
	header.classList.toggle('scrolling-active', windowPosition);
});

// Select element function
const selectElement = function (element) {
	return document.querySelector(element);
};

const menuToggler = selectElement('.menu-toggle');
const body = selectElement('body');

menuToggler.addEventListener('click', function () {
	body.classList.toggle('open');
});

// const navLink = selectElement('.nav-link');

// navLink.addEventListener('click', function () {
// 	body.classList.toggle('open');
// });
