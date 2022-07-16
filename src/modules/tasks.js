import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { remove } from 'lodash';
import loadModals from './modal';
import Task from './entries';


let taskDatabase = JSON.parse(localStorage.getItem('tasks')) || [];

console.log(taskDatabase[1].title)



function validateForm(e) {
    const titleInput = document.querySelector('#titleInput')
    const descInput = document.querySelector('#descInput')
    const dateInput = document.querySelector('#dateInput')
    const selectPriority = document.querySelector('#taskPriority')
    const selectCategory = document.querySelector('#categories')

    e.preventDefault()

    if (titleInput.value !== '') {
        addTask(titleInput.value, descInput.value, dateInput.value, selectPriority.value, selectCategory.value)
        
    }
    else {
        return;
    }
}


function addTask(title, description, date, priority, categories) {
    let task = new Task(title, description, date, priority, categories)
    taskDatabase.push(task);
    showTaskInfo(task);
}

function showTaskInfo(task) {
    const taskContainer = document.querySelector('#task-container');
    localStorage.setItem('tasks', JSON.stringify(taskDatabase))


            taskDatabase.forEach(task => {
            console.log(taskDatabase[0])
            // const taskRow = document.createElement('div')
            // taskRow.classList.add('task-row')
            // taskRow.setAttribute("data-index", task)
            // taskContainer.appendChild(taskRow)

            //     const firstRow = document.createElement('div')
            //     taskRow.appendChild(firstRow)
            //     firstRow.classList.add('first-row')

            //         const taskTitle = document.createElement('div')
            //         taskTitle.classList.add('task-left')
            //         firstRow.appendChild(taskTitle)

            //             const doneTask = document.createElement('input')
            //             doneTask.type = 'checkbox'
            //             doneTask.name = 'done'
            //             doneTask.id = 'done'
            //             taskTitle.appendChild(doneTask)

            //             const taskLabel = document.createElement('label')
            //             taskLabel.htmlFor = 'done'
            //             taskLabel.textContent = task.title;
            //             taskTitle.appendChild(taskLabel)
                
            //         const taskIcons = document.createElement('div')
            //         taskIcons.classList.add('task-right')
            //         firstRow.appendChild(taskIcons)

            //             const taskEdit = new Image()
            //             taskEdit.src = Edit;
            //             taskIcons.appendChild(taskEdit)

            //                 taskEdit.addEventListener('click', function(e) {
            //                     editTask(e)
            //                 })

            //             const taskDelete = new Image()
            //             taskDelete.src = Delete;
            //             taskDelete.classList.add('delete-btn')
            //             taskIcons.appendChild(taskDelete)

            //                 taskDelete.addEventListener('click', function(e) {
            //                     removeTask(e)
            //                 }) 
                
            //     const secondRow = document.createElement('div')
            //     taskRow.appendChild(secondRow)
            //     secondRow.classList.add('second-row')

            //         const taskDescription = document.createElement('div')
            //         taskDescription.textcontent = `Description: ${task.description}`;
            //         secondRow.appendChild(taskDescription)

            //         const taskDate = document.createElement('div')
            //         taskDate.textContent = (`Due date: ${task.date}`)
            //         secondRow.appendChild(taskDate)
             })

                    
    return taskContainer;

            
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

    loadModals('task')
    // let task = Storage.getTaskDatabase().getCategory().getTaskfromDatabase(taskTitle)
    const titleInput = document.querySelector('#titleInput')
    const descInput = document.querySelector('#descInput')
    const dateInput = document.querySelector('#dateInput')
    const selectPriority = document.querySelector('#taskPriority')
    const selectCategory = document.querySelector('#categories')

    let selectedTask = task.target.parentNode.parentNode.parentNode;
    let selectedIndex = selectedTask.getAttribute("data-index")
    taskDatabase.splice([selectedIndex])
    let taskTitle = selectedIndex.title;

    titleInput.value = taskTitle; 

    

}


function removeTask(e) {
    const taskContainer = document.querySelector('#task-container')
        let selectedTask = e.target.parentNode.parentNode.parentNode;
        let selectedIndex = selectedTask.getAttribute("data-index") 
        taskDatabase.splice([selectedIndex])
        taskContainer.removeChild(e.target.parentNode.parentNode.parentNode)
  
}



export {validateForm, showTaskInfo}