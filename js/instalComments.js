
const commentsOpen = document.querySelector(".reviews__button") // кнопка открытие popup коментария
const commentClose = document.querySelector(".close") // кнокпа Закрытие комментария
const popupComment = document.querySelector(".rewiverser") // попап добавление комментария
const nameInput = popupComment.querySelector(".form-name") // input имени
const linkInput = popupComment.querySelector(".form-link") // input link
const messageInput = popupComment.querySelector(".form__text") // input messega
const addComment = document.querySelector(".developer-info__review")
const cardReview = document.querySelector(".review")
const addButton = document.querySelector(".form__logo")
const form = document.querySelector(".form__contact")
const date = new Date().toLocaleDateString(); // Дата пользователя 
const animationForm = popupComment.querySelectorAll(".animation-form")

// поиск template


function getComment (name, item, messega, dateAdd) {
const commentTemplate = document.querySelector("#templete-comments")// Темплеит форма
	const newElement = commentTemplate.content.cloneNode(true)
	const nameComment = newElement.querySelector(".review__name")
	const linkComment = newElement.querySelector(".review__link")
	const reviewComment = newElement.querySelector(".review__text")
	const dateComment = newElement.querySelector(".review__data")

	nameComment.textContent = name 
	linkComment.href = item 
	reviewComment.textContent = messega
	dateComment.textContent = dateAdd



	return newElement;
}


function getComments (name, messega, dateAdd) {	
const commentTemplate = document.querySelector("#templete-comments")// Темплеит форма
	const newElement = commentTemplate.content.cloneNode(true)
	const nameComment = newElement.querySelector(".review__name")
	const linkComment = newElement.querySelector(".review__link")
	const reviewComment = newElement.querySelector(".review__text")
	const dateComment = newElement.querySelector(".review__data")
	
	nameComment.textContent = name 
	reviewComment.textContent = messega
	dateComment.textContent = dateAdd
	linkComment.classList.add("no-active")


	return newElement;
}


function addComments (evt) {
	evt.preventDefault()

	const addName = nameInput.value
	const addLink = linkInput.value
	const addMesege = messageInput.value
	const addDate = date
	//const com = getComments(addName, addLink, addMesege, addDate)
	
	const comes =  () => {
		
		if (addLink.length > 3) {
			
			return getComment(addName, addLink, addMesege, addDate)
					
		} else {
			
			return getComments(addName, addMesege, addDate)
		}
	
			}
	
    cardReview.append(comes()) 

    form.reset()
    popupCommentClose(popupComment)
}



function popupCommentOpen (elementOpen) {
	elementOpen.classList.add("active_form")
	animationForm.forEach(anim => {
		anim.classList.add("active")
	})
	
}
function popupCommentClose (elementClose) {
	elementClose.classList.remove("active_form")
	form.reset()
}

// закрытие комментария
commentsOpen.addEventListener("click", () => popupCommentOpen(popupComment))
// открытие комментария
commentClose.addEventListener("click", () => popupCommentClose(popupComment))
form.addEventListener("submit", addComments)

popupComment.addEventListener("mousedown", event => {
	if (event.target === event.currentTarget) {
		popupCommentClose(popupComment)
	}
})
