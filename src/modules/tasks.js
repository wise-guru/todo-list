import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { remove } from 'lodash';
import loadModals from './modal';
import Task from './task-entry';
import Chevron from '../img/chevron.png'
import Category from './category-entry'
import { isThisWeek, isToday } from 'date-fns';


let taskDatabase = JSON.parse(localStorage.getItem('tasks')) || [];

console.log(isToday(new Date()))



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
}



const getTask = (id) => {
    const task = taskDatabase.filter((id) => task.id === id)
    console.log(task)

    return task;
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
       
            const taskRow = document.createElement('div')
            taskRow.classList.add('task-row')
            taskRow.setAttribute("data-index", i + 1)
            taskRow.setAttribute('data-category', task.categories)
            taskRow.setAttribute('data-date', task.date)
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
    // taskDatabase.splice([selectedIndex])
    let taskTitle = selectedIndex.title;


    for (let i = 0; i < taskDatabase.length; i++) {
        if (taskDatabase[i].id == selectedIndex) {
          
            titleInput.value = taskDatabase[i].title;



            localStorage.setItem('tasks', JSON.stringify(taskDatabase))
            }
    }
}


function removeTask(e) {
    const taskContainer = document.querySelector('#task-container')
        let selectedTask = e.target.parentNode.parentNode.parentNode;
        let selectedIndex = selectedTask.getAttribute("data-index") 
        taskDatabase.splice([selectedIndex])
        taskContainer.removeChild(selectedTask)


    for (let i = 0; i < taskDatabase.length; i++) {
        if (taskDatabase[i].id == selectedIndex) {
            taskDatabase.splice(i, 1);
            localStorage.setItem('tasks', JSON.stringify(taskDatabase))
            }
    }
    const categoryTasks = document.querySelectorAll('.task-row');
}


const filterbyCategory = (dataCategory) => {
    const categoryTasks = document.querySelectorAll('.task-row');
    const sidebarCategory = document.querySelectorAll('.sidebar-category')
    Array.from(categoryTasks).forEach(categoryTask => {
        categoryTask.style.display = 'none';

 
        if(dataCategory === categoryTask.getAttribute('data-category')) {
            categoryTask.style.display = 'grid';
        }
    })
}

const filterbyTodaysDate = () => {
    const categoryTasks = document.querySelectorAll('.task-row');

    

    var dateObj = new Date();
    var month = dateObj.getMonth() + 1; //months from 1-12
    var day = dateObj.getDate();
    var year = dateObj.getFullYear();
    let newDate = year + "-" + "0" + month + "-" + day;

    Array.from(categoryTasks).forEach(categoryTask => {
        let dataDate = categoryTask.getAttribute('data-date');
        categoryTask.style.display = 'none';


        if(newDate == dataDate) {
            categoryTask.style.display = 'grid';
        }

    })

}

const filterByThisWeek = () => {
    const categoryTasks = document.querySelectorAll('.task-row')

    Array.from(categoryTasks).forEach(categoryTask => {
        let dataDate = categoryTask.getAttribute('data-date');
        categoryTask.style.display = 'none';

        let thisWeek = isThisWeek(new Date(dataDate))

        console.log(thisWeek)


        if(thisWeek) {
            categoryTask.style.display = 'grid';
        }

    })
}



export {addTask, validateTaskForm, showTaskInfo, filterbyCategory, filterbyTodaysDate, filterByThisWeek}