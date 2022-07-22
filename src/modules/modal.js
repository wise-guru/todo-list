import {validateCategoryForm ,closeModal, validateTaskForm} from "./validate-form"
import { showTaskModalCategories } from "./categories"
import Category from "./category-entry"

let categoryDatabase = JSON.parse(localStorage.getItem('categories')) || [];

function addTasksModal() {
    const taskModal = document.createElement('div')
    taskModal.classList.add('bg-modal')

        const modalContent = document.createElement('div')
        modalContent.classList.add('modal-content')
        taskModal.appendChild(modalContent)

            const xBtn = document.createElement('div')
            xBtn.classList.add('x-btn')
            xBtn.textContent = '+'
            modalContent.appendChild(xBtn)

                xBtn.addEventListener('click', function(e) {
                    closeModal(e)
                })

            const taskHeading = document.createElement('p')
            taskHeading.textContent = 'Task'
            modalContent.appendChild(taskHeading)


            const taskForm = document.createElement('form')
            taskForm.classList.add('task-form')
            modalContent.appendChild(taskForm)

                const taskTitle = document.createElement('div')
                taskTitle.classList.add('field')
                taskForm.appendChild(taskTitle)

                    const titleLabel = document.createElement('label')
                    titleLabel.htmlFor = 'titleInput'
                    titleLabel.textContent = 'Title:'
                    taskTitle.appendChild(titleLabel)

                    const titleInput = document.createElement('input')
                    titleInput.id = 'titleInput'
                    taskTitle.appendChild(titleInput)

                const taskDescription = document.createElement('div')
                taskDescription.classList.add('field')
                modalContent.appendChild(taskDescription)

                    const descriptionLabel = document.createElement('label')
                    descriptionLabel.htmlFor = 'descInput'
                    descriptionLabel.textContent = 'Description:'
                    taskDescription.appendChild(descriptionLabel)

                    const descriptionInput = document.createElement('input')
                    descriptionInput.id = 'descInput'
                    taskDescription.appendChild(descriptionInput)
                
                const taskDate = document.createElement('div')
                taskDate.classList.add('field')
                modalContent.appendChild(taskDate)

                    const dateLabel = document.createElement('label')
                    dateLabel.htmlFor = 'dateInput'
                    dateLabel.textContent = 'Date:'
                    taskDate.appendChild(dateLabel)

                    const dateInput = document.createElement('input')
                    dateInput.type = 'date'
                    dateInput.id = 'dateInput'
                    taskDate.appendChild(dateInput)
                
                const taskPriority = document.createElement('div')
                taskPriority.classList.add('field')
                modalContent.appendChild(taskPriority)

                   const priorityLabel = document.createElement('label')
                   priorityLabel.htmlFor = 'taskPriority'
                   priorityLabel.textContent = 'Priority'
                   taskPriority.appendChild(priorityLabel)

                   const prioritySelect = document.createElement('select')
                   prioritySelect.id = 'taskPriority'
                   prioritySelect.name = 'priority'
                   taskPriority.appendChild(prioritySelect)

                        const priorityLow = document.createElement('option')
                        priorityLow.value = 'low'
                        priorityLow.textContent = 'Low'
                        prioritySelect.appendChild(priorityLow)

                        const pMed = document.createElement('option')
                        pMed.value = 'medium'
                        pMed.textContent = 'Medium'
                        prioritySelect.appendChild(pMed)

                        const pHigh = document.createElement('option')
                        pHigh.value = 'High'
                        pHigh.textContent = 'High'
                        prioritySelect.appendChild(pHigh)

                const taskCategories = document.createElement('div')
                taskCategories.classList.add('field')
                modalContent.appendChild(taskCategories)

                    const categoriesLabel = document.createElement('label')
                    categoriesLabel.htmlFor = 'categories-select'
                    categoriesLabel.textContent = 'Categories'
                    taskCategories.appendChild(categoriesLabel)


                        const categoriesSelect = document.createElement('select')
                        categoriesSelect.id = 'categories-select'
                        categoriesSelect.name = 'categories'
                        categoriesSelect.list = 'categories'
                        taskCategories.appendChild(categoriesSelect)

                        const defaultCategory = document.createElement('option')


                        for (let i = 0; i < categoryDatabase.length; i++) {
                            let category = categoryDatabase[i];
                            let categoryOption = document.createElement('option');
                            categoryOption.textContent = category.title;
                            categoryOption.value = category.title;
                            categoriesSelect.appendChild(categoryOption)
                        }


                const closeBtn = document.createElement('button')
                closeBtn.classList.add('close-btn', 'task-btn')
                closeBtn.textContent = 'close'
                modalContent.appendChild(closeBtn)

                    closeBtn.addEventListener('click', function(e) {
                        closeModal(e)
                    })

                    
                const addTaskBtn = document.createElement('button')
                addTaskBtn.classList.add('task-btn')
                addTaskBtn.id = 'addTaskBtn'
                addTaskBtn.textContent = 'Add Task'
                modalContent. appendChild(addTaskBtn)

                    addTaskBtn.addEventListener('click', function(e) {
                        validateTaskForm(e)
                    })
    
    return taskModal
}

function addCategoriesModal() {
    const categoryModal = document.createElement('div')
    categoryModal.classList.add('bg-modal')

        const modalContent = document.createElement('div')
        modalContent.classList.add('modal-content')
        categoryModal.appendChild(modalContent)

            const xBtn = document.createElement('div')
            xBtn.classList.add('x-btn')
            xBtn.textContent = '+'
            modalContent.appendChild(xBtn)

                xBtn.addEventListener('click', function(e) {
                    closeModal(e)
                })

            const categoryHeading = document.createElement('p')
            categoryHeading.textContent = 'Category'
            modalContent.appendChild(categoryHeading)


            const categoryForm = document.createElement('form')
            categoryForm.classList.add('task-form')
            modalContent.appendChild(categoryForm)

                const categoryTitle = document.createElement('div')
                categoryTitle.classList.add('field')
                categoryForm.appendChild(categoryTitle)

                    const categoryLabel = document.createElement('label')
                    categoryLabel.htmlFor = 'categoryInput'
                    categoryLabel.textContent = 'Title:'
                    categoryTitle.appendChild(categoryLabel)

                    const categoryInput = document.createElement('input')
                    categoryInput.id = 'categoryInput'
                    categoryTitle.appendChild(categoryInput)

                     const closeBtn = document.createElement('button')
                closeBtn.classList.add('close-btn', 'task-btn')
                closeBtn.textContent = 'close'
                modalContent.appendChild(closeBtn)

                    closeBtn.addEventListener('click', function(e) {
                        closeModal(e)
                    })

                    
                const addCategoriesBtn = document.createElement('button')
                addCategoriesBtn.classList.add('categories-btn')
                addCategoriesBtn.textContent = 'Add Category'
                modalContent.appendChild(addCategoriesBtn)

                    addCategoriesBtn.addEventListener('click', function(e) {
                        validateCategoryForm(e)
                    })

    return categoryModal
}
function loadModals(e) {
    const container = document.querySelector('#container')

    if(e === 'task') {
        container.appendChild(addTasksModal())
    }   else if(e === 'category') {
        container.appendChild(addCategoriesModal())
    } 
}

export default loadModals