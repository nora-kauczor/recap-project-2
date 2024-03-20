// AUFGABE 4 (queryselectors auch oben, dort auskommentiert)
const newQuestionField = document.querySelector(
  '[data-js="new-cards_question-field"]'
);
const outputQuestion = document.querySelector(
  '[data-js="remaining-characters_question"]'
);

newQuestionField.addEventListener("input", (event) => {
  outputQuestion.innerText = 150 - event.target.value.length;
});

const newAnswerField = document.querySelector(
  '[data-js="new-cards_answer-field"]'
);

const outputAnswer = document.querySelector(
  '[data-js="remaining-characters_answer"]'
);

newAnswerField.addEventListener("input", (event) => {
  outputAnswer.innerText = 150 - event.target.value.length;
});

// AUFGABE 3

const newCardsForm = document.querySelector('[data-js="new-cards"]');

// // 1. Listen the form's submit event
newCardsForm.addEventListener("submit", (event) => {
  //   // 2. Prevent the default submit behavior to handle everything within JavaScript
  event.preventDefault();
  //   // 3. Read all entered data from the input fields (question, answer, tags) - möglichkeit 1 ???
  // const formElements = event.target.elements;
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  createNewCard(data);
});

// // 3. Read all entered data from the input fields (question, answer, tags) - möglichkeit 2 ???
// // ich habe die funktion hier ohne parameter erstellt, da die werte sich ja schon durch die erneute abfrage an den eingabefeldern (durch query) andern sollten..
// // ich habe "var" zum kreiren des objekts benutzt.. ?
// // newCardsForm.addEventListener("submit", (event) => {
// //   const newQuestionField = document.querySelector(
// //     '[data-js="new-cards_question-field"]'
// //   );
// //   console.log(newQuestionField.value);
// //   const newAnswerField = document.querySelector(
// //     '[data-js="new-cards_answer-field"]'
// //   );
// //   const newTagsInput = document.querySelector(
// //     '[data-js="new-cards_tag-input"]'
// //   );
// //   const formInput = {
// //     question: newQuestionField.value,
// //     answer: newAnswerField.value,
// //     tags: newTagsInput.value,
// //   };
// //   return formInput;
// // });

// // 4. Generate all DOM element for a card with createElement()
// // zum appenden muss es aber exportiert werden in index.js
function createNewCard(someInput) {
  //  Elemente nachbauen
  let newCard = document.createElement("article");
  newCard.classList.add("card");
  //
  let newCardQuestion = document.createElement("h2");
  newCardQuestion.classList.add("card__question");
  //
  let newCardButtonAnswer = document.createElement("button");
  newCardButtonAnswer.classList.add("card__button-answer");
  newCardButtonAnswer.setAttribute("type", "button");
  newCardButtonAnswer.setAttribute("data-js", "card__button-answer");
  newCardButtonAnswer.textContent = "Show Answer";
  //
  let newCardAnswer = document.createElement("p");
  newCardAnswer.classList.add("card__answer");
  newCardAnswer.setAttribute("data-js", "card__answer");
  //
  let newCardTags = document.createElement("ul");
  newCardTags.classList.add("card__tag-list");
  let newCardTagsListItem = document.createElement("li");
  newCardTagsListItem.classList.add("card__tag-list-item");
  newCardTags.append(newCardTagsListItem);
  //
  let newCardButtonBookmark = document.createElement("div");
  newCardButtonBookmark.classList.add("card__button-bookmark");
  let newCardBookmark = document.createElement("button");
  newCardBookmark.classList.add("bookmark");
  newCardBookmark.setAttribute("aria-label", "bookmark");
  newCardBookmark.setAttribute("type", "button");
  newCardBookmark.setAttribute("data-js", "card__button-bookmark");
  newCardButtonBookmark.append(newCardBookmark);
  // let newBookmarkIcon = createElement("svg");
  // newBookmarkIcon.classList.add("bookmark__icon");
  // newBookmarkIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  // newBookmarkIcon.setAttribute("viewbox", "0 0 24 24");
  let newBookmarkPath = document.createElement("path");
  newBookmarkPath.setAttribute(
    "d",
    "M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"
  );
  newCardBookmark.append(newBookmarkPath);
  //
  newCard.append(
    newCardQuestion,
    newCardButtonAnswer,
    newCardAnswer,
    newCardTags,
    newCardButtonBookmark
  );
  // werte aus dem zuvor erstellten objekt als textcontent der neuen html-elemente einfügen
  newCardQuestion.textContent = someInput.question;
  newCardAnswer.textContent = someInput.answer;
  newCardTagsListItem.textContent = someInput.tags;
  //aber das ist doch umstädnlich, kann man nicht direkt die values holen? also indem man bsp hier direkt   newQuestion = newQuestionField.value, reinschreibt?
  // eigentlich brauche ich doch kein return-statement, weil die funktion selnbt schon die werte einfügt ins html

  const main = document.querySelector('[data-js="main-forms"]');
  main.append(newCard);
}

// export { createNewCard };

//NOTIZEN AUS SESSION
/*eingaben des users extrahieren, speichern (objekt),
funktion erstellen. ziel der funktion ist es, neue karte zu erstellen
- parameter: values des objekts
- return: value (in html)
dom verwenden um html-elemente zu erstellen
neu erstellte html-elemente appenden an main von form.html
- dafür zuerst: queryselector für main
*/
