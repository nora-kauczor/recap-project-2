
// The data entered into the form by users should be used to create a new question, that will be displayed as a card like the other questions.
// Listen the form's submit event
// Prevent the default submit behavior to handle everything within JavaScript
// Read all entered data from the input fields (question, answer, tags)
// Generate all DOM element for a card with createElement()
// Insert the form's data as text into the DOM elements
// Append the card to the page, directly below the form
// ❗️ For now the new card should be displayed directly below the form. Adding the card to the list of the other cards is a topic for later.
const newCardsForm = document.querySelector('[data-js="new-cards"]');

newCardsForm.addEventListener("submit", (event) => {
  event.preventDefault();
//   const formElements = event.target.elements;
//   const formData = new FormData(event.target);
//   const data = Object.fromEntries(formData);
//   console.log(data);
}

// Note: To avoid error messages, we recommend creating a new JavaScript file specifically for your form page. This ensures that any event listeners you've added for other pages won't cause problems with HTML elements that aren't present on the form page.