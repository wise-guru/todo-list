import Category from "./category-entry";

let categoryDatabase = JSON.parse(localStorage.getItem('categories')) || [];


function addCategory(title) {
    let category = new Category(title)
    categoryDatabase.push(category);
    showCategoryInfo(category);
}

function clearCategories() {
    const categoryContainer = document.querySelector('#category-container');

    const removeChilds = (categories) => {
        while (categories.lastChild) {
            categories.removeChild(categories)
        }
    }
removeChilds(categoryContainer)

}


function showCategoryInfo() {
    const categoryContainer = document.querySelector('#category-container');
    localStorage.setItem('categories', JSON.stringify(categoryDatabase))
    clearCategories()

    categoryDatabase.forEach(category => {
        const categoryTitle = document.createElement('li');
        categoryTitle.textContent = category.title;
        categoryContainer.appendChild(categoryTitle)
        categoryTitle.classList.add('category')
    })

return categoryContainer

}

export {addCategory, showCategoryInfo}




