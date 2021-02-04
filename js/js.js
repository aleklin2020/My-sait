let open = document.querySelector(".reviews__button");
let rewiverser = document.querySelector(".rewiverser");
let close = document.querySelector(".close");


function rewiv () {
   rewiverser.classList.toggle("active")
}


open.addEventListener('click', rewiv);
close.addEventListener('click', rewiv);

