import { addTask, saveEditedTask } from "./tasks"
import { addCategory } from "./categories"





function validateTaskForm(e) {

const titleInput = document.querySelector('#titleInput')
const descInput = document.querySelector('#description')
const dateInput = document.querySelector('#dateInput')
const selectPriority = document.querySelector('#taskPriority')
const selectCategory = document.querySelector('#categories-select')
const categoryInput = document.querySelector('#categoryInput')


    e.preventDefault()

    if (titleInput.value !== '') {
        addTask(titleInput.value, descInput.value, dateInput.value, selectPriority.value, selectCategory.value)
        
    }

    else {
        return;
    }
    closeModal()
}

function validateCategoryForm() {
    const categoryInput = document.querySelector('#categoryInput')
        if (categoryInput.value !== '') {
            addCategory(categoryInput.value)
        }
        else {
            return;
        }
    closeModal()
    }

function closeModal(e) {
    const modal = document.querySelector('.bg-modal')
        modal.remove(e)

}

function validateEditTaskForm(e, selectedIndex) {
const titleInput = document.querySelector('#titleInput')
const descInput = document.querySelector('#description')
const dateInput = document.querySelector('#dateInput')
const selectPriority = document.querySelector('#taskPriority')
const selectCategory = document.querySelector('#categories-select')

    e.preventDefault()

    console.log(titleInput.value, descInput.value, dateInput.value, selectPriority.value, selectCategory.value, selectedIndex)
    if (titleInput.value !== '') {
        saveEditedTask(titleInput.value, descInput.value, dateInput.value, selectPriority.value, selectCategory.value, selectedIndex)
        
    }

    else {
        return;
    }
    closeModal()
}

export {validateTaskForm, validateCategoryForm, closeModal, validateEditTaskForm}