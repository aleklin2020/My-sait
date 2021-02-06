let eng = {
   topSubtitle: "The Portfolio of Alex Lin",
    nav_1: "ABOUT ME",
    nav_2: "My Skill",
    nav_3: "My knowledge",
    nav_4: "Reviews",
    nav_5: "Contacts Witch",
    menu: "menu",
  about__title: "About me",
  About__text: "No one is going to hand me success. I must go out & get it myself. That’s why I’m here. To dominate. To conquer. Both the world, and myself.",
meskill__title: "Skill Set",
myskill__subtitle: "Fast, Better, More Modern",
knowledge__title: "I study",
reviews__button:"Add a review",
review__link: "view work",
contacts__subtitle: "Contacts witch me",
form__name: "Name",
form__phone: "Phone",
form__mesege: "Messege",
form__date: "Indicate when the work was done",
form__link: "link",
form__leave:"Leave a Review",
}

let rus = {
  topSubtitle: "Портфолио Алексея Фомина",
 nav_1: "Обо мне",
  nav_2: "Мой навыки",
  nav_3: "Я изучаю",
  nav_4: "Отзывы",
  nav_5: "Связь со мной",
   menu: "Меню",
about__title: "Обо мне",
About__text: "Никто не предоставит мне успех. Я должен пойти и добиться его сам. Вот почему я здесь. Чтобы доминировать и одержать победу. Над этим миром и над собой.",
meskill__title: "С этим я работаю",
myskill__subtitle: "Быстрые.Лучше.Cовременнее",
knowledge__title: "В данный момент я изучаю:",
reviews__button:"Добавить отзыв",
review__link: "Посмотреть работу",
contacts__subtitle: "Связаться со мной",
form__name: "Ваше имя",
form__phone: "Ваш номер телефона",
form__mesege: "Сообщение",
form__date: "Укажите когда была выполнена работа",
form__link: "Ссылка",
form__leave:"Оставить отзыв",
  
};

changeLagnuage();

function changeLagnuage(){
  let language = lang.checked ? rus : eng;
  document.querySelectorAll('[text]').forEach(el => {
    el.innerHTML = language[el.getAttribute('text')];
  })
}
