import Category from "./category-entry";

let categoryDatabase = JSON.parse(localStorage.getItem('categories')) || [];

function addCategory(title) {
    let category = new Category(title)
    categoryDatabase.push(category);
    showCategoryInfo(category);
}

function clearCategories() {
    const removeChilds = (grid) => {
        while (grid.lastChild) {
            grid.removeChild(grid.lastChild)
        }
    }
removeChilds(document.querySelector('#category'))

}


function showCategoryInfo() {
    const categoryContainer = document.querySelector('#category-container');
    localStorage.setItem('tasks', JSON.stringify(taskDatabase))
    clearCategories()

    categoryDatabase.forEach(category => {
        const categoryTitle = document.createElement('li');
        categoryTitle.textContent = category;
        categoryContainer.appendChild(categoryTitle)
        categoryTitle.classList.add('category')
    })

}

