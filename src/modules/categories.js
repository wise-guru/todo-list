import Category from "./category-entry";
import Folder from '../img/folder.png';
import { loadPage } from "./pages";
import { filterbyCategory, showTaskInfo } from "./tasks";
import _ from "lodash";

let categoryDatabase = JSON.parse(localStorage.getItem('categories')) || [];









let taskDatabase = JSON.parse(localStorage.getItem('categories')) || [];


function addDefaultCategory() {
const defaultCategory = {
    title: 'Default',
    tasks: []
}

    if (_.find(categoryDatabase, defaultCategory) == null) {
        categoryDatabase.push(defaultCategory)
    }
}

addDefaultCategory();



function addCategory(title) {
    
    let category = new Category(title);
    categoryDatabase.push(category);
    showCategoryInfo(category);
}

function clearCategories() {
    const categoryContainer = document.querySelector('#category-container');
    const categoryPageContent = document.querySelector('category-content');

    const removeChilds = (categories) => {
        while (categories.lastChild) {
            categories.removeChild(categories.lastChild)
        }
    }
removeChilds(categoryContainer, categoryPageContent)

}


function showCategoryInfo() {
    const categoryContainer = document.querySelector('#category-container');
    localStorage.setItem('categories', JSON.stringify(categoryDatabase))
    clearCategories()


    categoryDatabase.forEach((category, i) => {

        const sidebarCategory = document.createElement('li')
        categoryContainer.appendChild(sidebarCategory)
        sidebarCategory.classList.add('sidebar-category', 'menu', category.title);
        sidebarCategory.setAttribute('data-category', category.title);
        category.id = i + 100;

        let dataCategory = sidebarCategory.getAttribute('data-category');
        
        sidebarCategory.addEventListener('click', function(e) {
             loadPage('category');
             showTaskInfo()

            let dataCategory = sidebarCategory.getAttribute('data-category');
            filterbyCategory(dataCategory)
        })

        const categoryImg = new Image()
        categoryImg.src = Folder;
        sidebarCategory.appendChild(categoryImg);

        const categoryTitle = document.createElement('p');
        categoryTitle.textContent = category.title;
        categoryTitle.classList.add('category')
        sidebarCategory.appendChild(categoryTitle)
    })

    

return categoryContainer

}

function showTaskModalCategories() {
    const categoriesSelect = document.querySelector('#categories-select');

    for (let i = 0; i < categoryDatabase.length; i++) {
        let category = categoryDatabase[i];
        let categoryOption = document.createElement('option');
        categoryOption.textContent = category.title;
        categoryOption.value = category.title;
        categoriesSelect.appendChild(categoryOption)
    }
}

function showCategoryPage() {
    const categoryContent = document.createElement('div')
    categoryContent.classList.add('category-content')
 
            const categoryTitle = document.createElement('h1');
            categoryTitle.textContent = `Tasks`;
            categoryContent.appendChild(categoryTitle);

            const addTaskBtn = document.createElement('button')
            addTaskBtn.textContent = "Add Task +"
            categoryContent.appendChild(addTaskBtn)
        
            const categoryTaskContainer = document.createElement('div');
            categoryTaskContainer.classList.add('task-container')
            categoryTaskContainer.id = 'task-container';
            categoryContent.appendChild(categoryTaskContainer)
        
            addTaskBtn.addEventListener('click', function(e) {
                loadModals('task')
            })
     
    return categoryContent
}



export {addCategory, showCategoryInfo, showTaskModalCategories, showCategoryPage}




