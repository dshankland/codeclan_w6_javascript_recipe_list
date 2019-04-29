const deleteRecipeButtonClick = function (someNode) {
  // tried passing the item as a parameter but no joy
  // parameter work when calling function wrapped in an arrow function
  // const myNode = document.querySelector("#recipe-list");
  while (someNode.firstChild) {
    someNode.removeChild(someNode.firstChild);
  };
};

const createNewButton = function(innerHTML, className, location) {
  const newButton = document.createElement("button");
  newButton.innerHTML = innerHTML;
  newButton.className = className;
  location.appendChild(newButton);
  return newButton;
  };

const formSubmit = function (evt) {
  evt.preventDefault();
  const itemGrab = evt.target.ingredient.value;
  const quantityGrab = evt.target.quantity.value;
  const measurementGrab = evt.target.measurement.value;
  const preparationGrab = evt.target.preparation.value;
  targetDiv = document.querySelector('#recipe-list')
  const newDiv = document.createElement("li");
  newDiv.innerHTML = `<h3>${quantityGrab} ${measurementGrab} ${itemGrab} ${preparationGrab}</h3>`;
  newDiv.className = "recipe-list-item";
  targetDiv.appendChild(newDiv);
  const form = evt.target;
  form.reset();
};


const jsUcfirst = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const pluralFixer = function () {
  const plurals = document.querySelectorAll('.plurals');
  plurals.forEach(function(plural) {
    if (quantity.value == 1) {
      // this could be improved if I use a function to upper case the first char
      // also means I can dispense with the data-single and data-other vals in the labels in HTML
      plural.value = plural.getAttribute('data-single');
      // plural.nextElementSibling.innerText = plural.nextElementSibling.getAttribute('data-single');
      plural.nextElementSibling.innerText = jsUcfirst(plural.value);
    } else {
      plural.value = plural.getAttribute('data-other');
      // plural.nextElementSibling.innerText = plural.nextElementSibling.getAttribute('data-other')
      plural.nextElementSibling.innerText = jsUcfirst(plural.value);
    };
  });
};

document.addEventListener('DOMContentLoaded', () => {
  // console.log('JavaScript loaded');

  const quantity = document.querySelector('#quantity');
  quantity.addEventListener('input', pluralFixer);
  // Trying refactoring
  // quantity.addEventListener('input', (event) => {
  //   const plurals = document.querySelectorAll('.plurals');
  //   plurals.forEach(function(plural) {
  //     if (quantity.value == 1) {
  //       plural.value = plural.getAttribute('data-single');
  //       plural.nextElementSibling.innerText = plural.nextElementSibling.getAttribute('data-single');
  //     } else {
  //       plural.value = plural.getAttribute('data-other');
  //       plural.nextElementSibling.innerText = plural.nextElementSibling.getAttribute('data-other')
  //     };
  //     });
  // });

  // Trying refactoring
  // create delete recipe button that blooters the recipe child items
  // const newButton = document.createElement("button");
  // newButton.innerHTML = "Delete Recipe";
  // newButton.className = "delete-button";
  // document.body.appendChild(newButton);
  // newButton.addEventListener ("click", function() {
  //   const myNode = document.querySelector("#recipe-list");
  //   while (myNode.firstChild) {
  //     myNode.removeChild(myNode.firstChild);
  //   };
  // });

  const buttonHTML = "Delete Recipe";
  const buttonClass = "delete-button";
  const buttonLocation = document.body;
  const buttonChildrenToDelete = "#recipe-list";
  const newButton = createNewButton(buttonHTML, buttonClass, buttonLocation);
  // newButton.addEventListener("click", deleteRecipeButtonClick);
  const myNode = document.querySelector(buttonChildrenToDelete);
  // passing this as a parameter to the deleteRecipeButtonClick function
  // needs to be wrapped in an arrow functions as the function is not defined
  // when the page loads
  newButton.addEventListener("click", () => {
    deleteRecipeButtonClick(myNode)
  });

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', formSubmit);

  // Trying refactoring
  // form.addEventListener('submit', (event) => {
  //   event.preventDefault();
  //   const itemGrab = event.target.ingredient.value;
  //   const quantityGrab = event.target.quantity.value;
  //   const measurementGrab = event.target.measurement.value;
  //   const preparationGrab = event.target.preparation.value;
  //   targetDiv = document.querySelector('#recipe-list')
  //   const newDiv = document.createElement("li");
  //   newDiv.innerHTML = `<h3>${quantityGrab} ${measurementGrab} ${itemGrab} ${preparationGrab}</h3>`;
  //   newDiv.className = "recipe-list-item";
  //   targetDiv.appendChild(newDiv);
  //   form.reset();
  // });

});
