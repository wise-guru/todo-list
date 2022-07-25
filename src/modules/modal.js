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
            taskHeading.classList.add('modal-title')
            taskHeading.textContent = 'Task'
            modalContent.appendChild(taskHeading)


            const taskForm = document.createElement('form')
            taskForm.classList.add('task-form')
            modalContent.appendChild(taskForm)

                const leftFields = document.createElement('div')
                leftFields.classList.add('left-fields')
                taskForm.appendChild(leftFields)


                    const taskTitle = document.createElement('div')
                    taskTitle.classList.add('left', 'field')
                    leftFields.appendChild(taskTitle)

                        const titleLabel = document.createElement('label')
                        titleLabel.htmlFor = 'titleInput'
                        titleLabel.textContent = 'Title'
                        taskTitle.appendChild(titleLabel)

                        const titleInput = document.createElement('input')
                        titleInput.id = 'titleInput'
                        titleInput.maxLength = 30;
                        taskTitle.appendChild(titleInput)

                    const taskDescription = document.createElement('div')
                    taskDescription.classList.add('left', 'field')
                    leftFields.appendChild(taskDescription)

                        const descriptionLabel = document.createElement('label')
                        descriptionLabel.htmlFor = 'description'
                        descriptionLabel.textContent = 'Description'
                        taskDescription.appendChild(descriptionLabel)

                        const descriptionInput = document.createElement('textarea')
                        descriptionInput.id = 'description'
                        descriptionInput.name = 'description'
                        descriptionInput.rows = 5;
                        descriptionInput.maxLength = 100;
                        taskDescription.appendChild(descriptionInput)
                
                const rightFields = document.createElement('div')
                rightFields.classList.add('right-fields')
                taskForm.appendChild(rightFields)
                
                    const taskDate = document.createElement('div')
                    taskDate.classList.add('right', 'field')
                    rightFields.appendChild(taskDate)

                        const dateLabel = document.createElement('label')
                        dateLabel.htmlFor = 'dateInput'
                        dateLabel.textContent = 'Date'
                        taskDate.appendChild(dateLabel)

                        const dateInput = document.createElement('input')
                        dateInput.type = 'date'
                        dateInput.id = 'dateInput'
                        taskDate.appendChild(dateInput)
                    
                    const taskPriority = document.createElement('div')
                    taskPriority.classList.add('right', 'field')
                    rightFields.appendChild(taskPriority)

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
                                pHigh.value = 'high'
                                pHigh.textContent = 'High'
                                prioritySelect.appendChild(pHigh)

                    const taskCategories = document.createElement('div')
                    taskCategories.classList.add('right', 'field')
                    rightFields.appendChild(taskCategories)

                        const categoriesLabel = document.createElement('label')
                        categoriesLabel.htmlFor = 'categories-select'
                        categoriesLabel.textContent = 'Categories'
                        taskCategories.appendChild(categoriesLabel)


                            const categoriesSelect = document.createElement('select')
                            categoriesSelect.id = 'categories-select'
                            categoriesSelect.name = 'categories'
                            categoriesSelect.list = 'categories'
                            taskCategories.appendChild(categoriesSelect)

                            for (let i = 0; i < categoryDatabase.length; i++) {
                                let category = categoryDatabase[i];
                                let categoryOption = document.createElement('option');
                                categoryOption.textContent = category.title;
                                categoryOption.value = category.title;
                                categoriesSelect.appendChild(categoryOption)
                            }

                const buttons = document.createElement('div')
                buttons.classList.add('task-btns')
                modalContent.appendChild(buttons)


                const closeBtn = document.createElement('button')
                closeBtn.classList.add('close-btn')
                closeBtn.textContent = 'close'
                buttons.appendChild(closeBtn)

                    closeBtn.addEventListener('click', function(e) {
                        closeModal(e)
                    })
                    
                const addTaskBtn = document.createElement('button')
                addTaskBtn.classList.add('task-btn')
                addTaskBtn.id = 'addTaskBtn'
                addTaskBtn.textContent = 'Add Task'
                buttons. appendChild(addTaskBtn)

                    addTaskBtn.addEventListener('click', function(e) {
                        validateTaskForm(e)
                    })
    
    return taskModal
}

function addCategoriesModal() {
    const categoryModal = document.createElement('div')
    categoryModal.classList.add('bg-modal')

        const modalContent = document.createElement('div')
        modalContent.classList.add('cg', 'modal-content')
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
            categoryHeading.classList.add('modal-title')
            modalContent.appendChild(categoryHeading)


            const categoryForm = document.createElement('form')
            categoryForm.classList.add('category-form')
            modalContent.appendChild(categoryForm)

                const fieldContainer = document.createElement('div')
                fieldContainer.classList.add('cg', 'field-container')
                categoryForm.appendChild(fieldContainer)

                const categoryTitle = document.createElement('div')
                categoryTitle.classList.add('cg', 'field')
                fieldContainer.appendChild(categoryTitle)

                    const categoryLabel = document.createElement('label')
                    categoryLabel.htmlFor = 'categoryInput'
                    categoryLabel.textContent = 'Title'
                    categoryTitle.appendChild(categoryLabel)

                    const categoryInput = document.createElement('input')
                    categoryInput.id = 'categoryInput'
                    categoryInput.maxLength = 20;
                    categoryTitle.appendChild(categoryInput)

                        categoryInput.addEventListener('keypress', function(e) {
            
                            if(e.key == 32) {
                                e.preventDefault()
                                return false;
                            }
            
                        })

                const buttons = document.createElement('div')
                buttons.classList.add( 'cg', 'task-btns')
                modalContent.appendChild(buttons)

                    const closeBtn = document.createElement('button')
                    closeBtn.classList.add('close-btn')
                    closeBtn.textContent = 'close'
                    buttons.appendChild(closeBtn)

                        closeBtn.addEventListener('click', function(e) {
                            closeModal(e)
                        })

                        
                    const addCategoriesBtn = document.createElement('button')
                    addCategoriesBtn.classList.add('task-btn')
                    addCategoriesBtn.textContent = 'Add Category'
                    buttons.appendChild(addCategoriesBtn)

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