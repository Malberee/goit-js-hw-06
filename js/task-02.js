const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListRef = document.querySelector('#ingredients')
const ingredientsArray = []

ingredients.forEach(ingredient => {
  const ingredientItemRef = document.createElement('li')

  ingredientItemRef.textContent = ingredient

  ingredientItemRef.classList.add('item')
  
  ingredientsArray.push(ingredientItemRef)
})

ingredientsListRef.append(...ingredientsArray)