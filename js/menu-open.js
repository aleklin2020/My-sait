let menuClick = document.querySelector(".nav-toggle")
let menuOpened = document.querySelector(".nav")

function menuOpen () {
	menuOpened.classList.toggle("active");
	menuClick.classList.toggle("open")
}
menuClick.addEventListener("click" , menuOpen);