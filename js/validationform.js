window.addEventListener("DOMContentLoaded", function() {

function setCursorPosition(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) 
elem.setSelectionRange(pos, pos);
    else if (elem.createTextRange) {

    let range = elem.createTextRange();
       range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);

        range.select()
    }
}

 

function mask(event) {
    let matrix = "+7 (___)-___-____",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    if (def.length >= val.length) val = def;
    this.value = matrix.replace(/./g, function(a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a

    });

    if (event.type == "blur") {
        if (this.value.length == 2) this.value = ""
    } else setCursorPosition(this.value.length, this)

};

    const input = document.querySelector("#tel");
    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);

})



const formContact = document.querySelector(".form__contact_preven")
/*
function formNoStyle(evt) {
evt.preventDefault()
formContact.action = "https://formspree.io/f/mqkgvoqz";
formContact.method = 'POST';
formContact.submit()

}


formContact.addEventListener("submit", formNoStyle);
*/

$(function() {
      $('.form__contact_preven').submit(function(e) {
        var $form = $(this);
        $.ajax({
          type: $form.attr('method'),
          url: $form.attr('action'),
          data: $form.serialize()
        }).done(function() {
          console.log('success');
        }).fail(function() {
          console.log('fail');
        });
        //отмена действия по умолчанию для кнопки submit
        e.preventDefault(); 
        formContact.reset();

      });
    });





