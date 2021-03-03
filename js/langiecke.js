let eng = {
   topSubtitle: "The Portfolio of Alex Lin",
    nav_1: "ABOUT ME",
    nav_2: "My Skill",
    nav_3: "Reviews",
    nav_4: "My knowledge",
    nav_5: "Contacts Witch",
    menu: "menu",
  about__title: "About me",
  about__text_one: "Hey! I am 23 years old and I am a web developer striving to keep abreast of new developments on the web! I am in constant development and training, take courses, attend conferences. I create functional interactive websites responsive on all platforms and devices." ,
  About__text: "The only way to do great work is to love what you do. And damn it, that's exactly what I love!",
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
knowledge_block: "No one is going to hand me success. I must go out & get it myself. That’s why I’m here. To dominate. To conquer. Both the world, and myself.",
work_title: "My work",
work_text: "To write clean code, we first write dirty code and then refactor it.",
work_link: " The rest of the work can be found on GitHab",


}

let rus = {
  topSubtitle: "Портфолио Алексея Фомина",
 nav_1: "Обо мне",
  nav_2: "Мой навыки",
  nav_3: "Отзывы",
  nav_4: "Мой работы",
  nav_5: "Связь со мной",
   menu: "Меню",
about__title: "Обо мне",
about__text_one: "Привет! Мне 23 года и я веб разработчик стремящийся постоянно быть в курсе новых событий в вебе! Нахожусь в постоянном развитий и обучений , прохожу курсы, посещаю конференций. Создаю функциональные интерактивные веб сайты адаптивные на всех платформах и устройствах.",
About__text: "Единственный способ делать отличную работу - любить то, что делаешь. И черт возьми это имменно то что я люблю!",
meskill__title: "С этим я работаю",
myskill__subtitle: "Быстрые.Лучше.Cовременнее",
knowledge__title: "Я изучаю:",
reviews__button:"Добавить отзыв",
review__link: "Посмотреть работу",
contacts__subtitle: "Связаться со мной",
form__name: "Ваше имя",
form__phone: "Ваш номер телефона",
form__mesege: "Сообщение",
form__date: "Укажите когда была выполнена работа",
form__link: "Ссылка",
form__leave:"Оставить отзыв",
knowledge_block: "Никто не предоставит мне успех. Я должен пойти и добиться его сам. Вот почему я здесь. Чтобы доминировать и одержать победу. Над этим миром и над собой" , 
work_title: "Мой работы",
work_text: "Чтобы написать чистый код, мы сначала пишем грязный код, а затем рефакторим его.",
work_link: "С остальными работами можно ознакомится на GitHab"

};

changeLagnuage();

function changeLagnuage(){
  let language = lang.checked ? rus : eng;
  document.querySelectorAll('[text]').forEach(el => {
    el.innerHTML = language[el.getAttribute('text')];
  })
}
