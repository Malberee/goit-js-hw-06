const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListRef = document.querySelector('#ingredients')
const ingredientsArray = ingredients.map(ingredient => {
  const ingredientItemRef = document.createElement('li')

  ingredientItemRef.textContent = ingredient

  ingredientItemRef.classList.add('item')
  
  return ingredientItemRef
})



ingredientsListRef.append(...ingredientsArray)