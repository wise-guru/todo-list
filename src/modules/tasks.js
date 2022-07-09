import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { remove } from 'lodash';
import loadTaskModal from './task-modal';

let taskDatabase = []

function Task(title, description, date, priority, categories) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.categories = categories;
}

function validateForm(e) {
    e.preventDefault()
    
    const titleInput = document.querySelector('#titleInput')
    const descInput = document.querySelector('#descInput')
    const dateInput = document.querySelector('#dateInput')
    const selectPriority = document.querySelector('#taskPriority')
    const selectCategory = document.querySelector('#categories')

    if (titleInput.value !== '') {
        addTask(titleInput.value, descInput.value, dateInput.value, selectPriority.value, selectCategory.value)
    }
}

function addTask(title, description, date, priority, categories) {
    let task = new Task(title, description, date, priority, categories)
    taskDatabase.push(task);
    showTaskinfo(task);
}

function showTaskinfo(task) {
    const taskContainer = document.querySelector('#task-container')

    const taskRow = document.createElement('div')
    taskRow.classList.add('task-row')
    taskRow.setAttribute("data-index", task)
    taskContainer.appendChild(taskRow)

        const firstRow = document.createElement('div')
        taskRow.appendChild(firstRow)

            const taskTitle = document.createElement('div')
            taskTitle.classList.add('task-left')
            firstRow.appendChild(taskTitle)

                const taskLabel = document.createElement('label')
                taskLabel.htmlFor = 'done'
                taskLabel.textContent = task.title
                taskTitle.appendChild(taskLabel)

                const doneTask = document.createElement('input')
                doneTask.type = 'checkbox'
                doneTask.name = 'done'
                doneTask.id = 'done'
                taskTitle.appendChild(doneTask)
        
            const taskIcons = document.createElement('div')
            taskIcons.classList.add('task-right')
            firstRow.appendChild(taskIcons)

                const taskEdit = new Image()
                taskEdit.src = Edit;
                taskIcons.appendChild(taskEdit)

                    taskEdit.addEventListener('click', function(e) {
                        editTask(e)
                    })

                const taskDelete = new Image()
                taskDelete.src = Delete;
                taskDelete.classList.add('delete-btn')
                taskIcons.appendChild(taskDelete)

                    taskDelete.addEventListener('click', function(e) {
                        removeTask(e)
                    }) 
        
        const secondRow = document.createElement('div')
        taskRow.appendChild(secondRow)

            const taskDescription = document.createElement('div')
            taskDescription.textcontent = `Description: ${task.description}`;
            secondRow.appendChild(taskDescription)

            const taskDate = document.createElement('div')
            taskDate.textContent = (`Due date: ${task.date}`)
            secondRow.appendChild(taskDate)
}

function editTask(task) {
    // const taskContainer = document.querySelector('#task-container')

    // const span = li.firstElementChild;
    // const input = document.createElement('input');
    // input.type = 'text';
    // input.value = span.textContent;
    // li.insertBefore(input, span);
    // li.removeChild(span);
    // button.textContent = 'save';

    loadTaskModal()
    
    const titleInput = document.querySelector('#titleInput')
    const descInput = document.querySelector('#descInput')
    const dateInput = document.querySelector('#dateInput')
    const selectPriority = document.querySelector('#taskPriority')
    const selectCategory = document.querySelector('#categories')

    let selectedTask = task.target.parentNode.parentNode.parentNode;
    let selectedIndex = selectedTask.getAttribute("data-index")

    titleInput.textContent = selectedTask.title;

}


function removeTask(e) {
    const taskContainer = document.querySelector('#task-container')
        let selectedTask = e.target.parentNode.parentNode.parentNode;
        let selectedIndex = selectedTask.getAttribute("data-index") 
        taskDatabase.splice([selectedIndex])
        taskContainer.removeChild(e.target.parentNode.parentNode.parentNode)
  
}

// function saveTask(e) {
//     let inputvalue = e.target.value;
//     if(e.target.value.length > 0 && (e.keyCode === 13 || e.type === 'click')) {
//         let div = document.createElement('div');
//         div.addEventListener('click', toggleDone)
//         div.addEventListener('click', editItem)
//         div.textContent = e.target.value;
//         e.target.parentNode.prepend(div)
//         e.target.remove()

//     }
// }

export default validateForm

