document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const quantity = document.querySelector('#quantity');
  quantity.addEventListener('input', (event) => {
    const plurals = document.querySelectorAll('.plurals');
    console.log('input change', quantity.value);
    plurals.forEach(function(plural) {
      console.log(plural.nextElementSibling.getAttribute('data-single'));
      if (quantity.value == 1) {
        console.table(plural.nextElementSibling)
        plural.value = plural.getAttribute('data-single');
        plural.nextElementSibling.innerText = plural.nextElementSibling.getAttribute('data-single');
      } else {
        plural.value = plural.getAttribute('data-other');
        plural.nextElementSibling.innerText = plural.nextElementSibling.getAttribute('data-other')
      };
      });
  });


  // create delete recipe button that blooters the recipe child items
  const newButton = document.createElement("button");
  newButton.innerHTML = "Delete Recipe";
  newButton.className = "delete-button";
  document.body.appendChild(newButton);
  newButton.addEventListener ("click", function() {
    const myNode = document.querySelector("#recipe-list");
    while (myNode.firstChild) {
      myNode.removeChild(myNode.firstChild);
    };
  });

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const itemGrab = event.target.ingredient.value;
    const quantityGrab = event.target.quantity.value;
    const measurementGrab = event.target.measurement.value;
    const preparationGrab = event.target.preparation.value;
    targetDiv = document.querySelector('#recipe-list')
    const newDiv = document.createElement("li");
    newDiv.innerHTML = `<h3>${quantityGrab} ${measurementGrab} ${itemGrab} ${preparationGrab}</h3>`;
    newDiv.className = "recipe-list-item";
    targetDiv.appendChild(newDiv);
    form.reset();
  });

});
