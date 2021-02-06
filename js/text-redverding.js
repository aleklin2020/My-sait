var wrapper = document.querySelector(".lader__text");
var text = document.querySelector(".loaded3");

var textCont = text.textContent;
text.style.display = "none";

for (var i = 0; i < textCont.length; i++) {
  (function(i) {
    setTimeout(function() {
      // Created textNode to append
      var texts = document.createTextNode(textCont[i])
      var span = document.createElement('span');
      span.appendChild(texts);

      span.classList.add("header__wave");
      wrapper.appendChild(span);

    }, 55 * i);
  }(i));
}