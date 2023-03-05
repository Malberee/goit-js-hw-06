const categoriesRef = document.querySelectorAll('.item')

console.log(`Number of categories: ${categoriesRef.length}`)

categoriesRef.forEach(category => {
    console.log(`Category: ${category.firstElementChild.textContent}`)
    console.log(`Element: ${category.lastElementChild.children.length}`)
})