let open = document.querySelector(".rewivers");
let close = document.querySelector(".close");
let button = document.querySelector(".Open");
let pupuupOpen = document.querySelector(".developer-info__reviews-add")

function opens () {
  open.classList.add("open")
}
function closes () {
  open.classList.remove("open")
}
pupuupOpen.addEventListener("click" , opens);
close.addEventListener('click', closes);

