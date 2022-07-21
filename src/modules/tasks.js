import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { remove } from 'lodash';
import loadModals from './modal';
import Task from './task-entry';
import Chevron from '../img/chevron.png'
import Category from './category-entry'


let taskDatabase = JSON.parse(localStorage.getItem('tasks')) || [];


console.log(taskDatabase.categories)


function validateTaskForm() {
    const titleInput = document.querySelector('#titleInput')
    const descInput = document.querySelector('#descInput')
    const dateInput = document.querySelector('#dateInput')
    const selectPriority = document.querySelector('#taskPriority')
    const selectCategory = document.querySelector('#categories')

    this.preventDefault()

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
    // moveTasktoCategory(task);
   
    // categoryDatabase[0].tasks = Object.assign(categoryDatabase[0].tasks, task)
    // console.log(categoryDatabase[0])
}



const getTask = (id) => {
    const task = taskDatabase.filter((id) => task.id === id)
    console.log(task)

    return task;
}

const updateCategory = (id, categories) => {
    const thisTask = getTask(id);
    thisTask[categories].match
}

// function moveTasktoCategory(task) {
    
// // for (let i = 0;  i < categoryDatabase.length; i++) {
// //     if(task.categories == categoryDatabase[i].title) {
// //         categoryDatabase[i].tasks.push(task)
// //     }
// // }

// function filterbyCategory(tar)

// if(categoryDatabase.title.indexOf(task.categories) !== -1) {
//     categoryDatabase.tasks.push(task)
// }

// }

const filterbyCategory = (dataCategory) => {
    const categoryTasks = document.querySelectorAll('.task-row');
    const sidebarCategory = document.querySelectorAll('.sidebar-category')
    Array.from(categoryTasks).forEach(categoryTask => {
        categoryTask.style.display = 'none'
        // if(!e.dataset.category.includes(categoryTask.dataset.category)) {
        //     categoryTask.style.display = 'none';
        // }
        if(dataCategory === categoryTask.getAttribute('data-category')) {
            categoryTask.style.display = 'grid';
        }
    })
}







function clearTasks() {
    const taskContainer = document.querySelector('#task-container');
    const removeChilds = (task) => {
            while (task.lastChild) {
                task.removeChild(task.lastChild)
            }
        }
    removeChilds(taskContainer)
}

function showTaskInfo() {
    const taskContainer = document.querySelector('#task-container');
    localStorage.setItem('tasks', JSON.stringify(taskDatabase))
    clearTasks()

            taskDatabase.forEach((task, i) => {
            let category = task.categories;

            const taskRow = document.createElement('div')
            taskRow.classList.add('task-row')
            taskRow.setAttribute("data-index", i + 1)
            taskRow.setAttribute('data-category', category)
            task.id = i + 1;
            taskContainer.appendChild(taskRow)

                const firstRow = document.createElement('div')
                taskRow.appendChild(firstRow)
                firstRow.classList.add('first-row')

                    const taskLeft = document.createElement('div')
                    taskLeft.classList.add('task-left')
                    firstRow.appendChild(taskLeft)

                        const taskArrow = new Image();
                        taskArrow.src = Chevron;
                        taskLeft.appendChild(taskArrow)

                        const doneTask = document.createElement('input')
                        doneTask.type = 'checkbox'
                        doneTask.name = 'done'
                        doneTask.id = 'done'
                        taskLeft.appendChild(doneTask)

                        const taskLabel = document.createElement('label')
                        taskLabel.htmlFor = 'done'
                        taskLabel.textContent = task.title;
                        taskLeft.appendChild(taskLabel)
                
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
                secondRow.classList.add('second-row')

                    const taskDescription = document.createElement('div')
                    taskDescription.textcontent = `Description: ${task.description}`;
                    secondRow.appendChild(taskDescription)

                    const taskDate = document.createElement('div')
                    taskDate.textContent = (`Due date: ${task.date}`)
                    secondRow.appendChild(taskDate)
             })
    // filterbyCategory()
                    
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
    // const taskContainer = document.querySelector('#task-container')
    //     let selectedTask = e.target.parentNode.parentNode.parentNode;
    //     let selectedIndex = selectedTask.getAttribute("data-index") 
    //     taskDatabase.splice([selectedIndex])
    //     taskContainer.removeChild(selectedTask)
    //     localStorage.removeItem(selectedTask);

    for (let i = 0; i < taskDatabase.length; i++) {
        let taskDatabase = JSON.parse(taskDatabase[i]);
        taskDatabase.splice(i, 1);
        taskDatabase = JSON.stringify(taskDatabase)
        localStorage.setItem('tasks', taskDatabase)
        
    }
  
}

// function filterTasksToCategory() {
//     let taskRow = document.querySelectorAll('.task-row')

//     taskDatabase.forEach((task) => {
//         let category = task.categories

//         if (category == Category.title) {
//             Category.addTasktoCategory(task)
//         }
//     })





// }



export {addTask, validateTaskForm, showTaskInfo, filterbyCategory}