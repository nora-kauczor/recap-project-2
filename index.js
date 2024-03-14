// 1. Toggle functionality
// Bookmark button
// The following acceptance criteria should be met for the bookmark button:
// When the user clicks the bookmark icon the bookmark icon should change it's visual state (e. g. another color or image)
// When the user clicks the bookmark icon again the bookmark icon should change to its former style
// The user can click on the bookmark endlessly and the bookmark will toggle between both stylings
// Note: Clicking on a bookmark icon will not yet cause the question to be displayed on the favorites page as well and this is not part of the exercise.

console.clear();

const bookmarkButton = document.querySelector(`[data-js="card_button-bookmark"]`);
console.log(bookmarkButton);

bookmarkButton.addEventListener("click", () => {bookmarkButton.classList.toggle("card__button-bookmark_black");});

// function toggleColor(button){button.classList.toggle("card__button-bookmark_black");}

// bookmarkButton.addEventListener("click", toggleColor(bookmarkButton));

// Answer button
// When the user clicks on the button the previously hidden answer should be displayed
// When the user clicks this button again the answer is hidden again
// The user can click on this button endlessly and the answer will either be displayed or hidden after each click

const answerButton = document.querySelector(`[data-js="card_button-answer"]`);

const cardAnswer = document.querySelector(`[data-js="card_answer"]`);

answerButton.addEventListener("click", () => {
    // The toggle functionality should be applied by using a class which is named "hidden"
    cardAnswer.classList.toggle("hidden");
// If the user clicks on an answer button, we want the button to say "hide answer" when the answer is displayed and "show answer" when the answer is not displayed.
answerButton.textContent = "Hide answer";
}
)
