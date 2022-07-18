import { addTask } from "./tasks"
import { addCategory } from "./categories"


function validateTaskForm(e) {
    const titleInput = document.querySelector('#titleInput')
    const descInput = document.querySelector('#descInput')
    const dateInput = document.querySelector('#dateInput')
    const selectPriority = document.querySelector('#taskPriority')
    const selectCategory = document.querySelector('#categories')

    const categoryInput = document.querySelector('#categoryInput')

    e.preventDefault()

    if (titleInput.value !== '') {
        addTask(titleInput.value, descInput.value, dateInput.value, selectPriority.value, selectCategory.value)
        
    }   else if (categoryInput !== '') {
        addCategory(t)
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
    const module = document.querySelector('.bg-modal')
        module.remove(e)

}

export {validateTaskForm, validateCategoryForm, closeModal}