import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { divide, remove } from 'lodash';
import loadModals from './modal';
import Task from './task-entry';
import { isThisWeek, isToday } from 'date-fns';
import {validateEditTaskForm} from './validate-form'


let taskDatabase = JSON.parse(localStorage.getItem('tasks')) || [];


function addTask(title, description, date, priority, categories) {
    let task = new Task(title, description, date, priority, categories)
    taskDatabase.push(task);
    showTaskInfo(task);
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
            taskRow.classList.add('task-row', `${task.priority}`)
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

                        const taskArrowSvg = document.createElementNS("http://www.w3.org/2000/svg", 'svg')

                            taskArrowSvg.setAttribute("width", '16px')
                            taskArrowSvg.setAttribute("height", '16px')
                            taskArrowSvg.setAttribute('viewbox', "0 0 16 16")
                            taskArrowSvg.classList.add('chevron')
                            taskLeft.appendChild(taskArrowSvg);
                          
                            const taskArrowPath = document.createElementNS("http://www.w3.org/2000/svg", 'path')
                            taskArrowPath.setAttribute('d', "M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" )
                            taskArrowSvg.appendChild(taskArrowPath)

                                taskArrowSvg.addEventListener('click', function(e) {
                                    let open = taskArrowSvg.classList.contains('open');

                                    if(!open) {
                                        taskArrowSvg.classList.add('open')
                                        secondRow.classList.remove('hidden')
                                    } else {
                                        taskArrowSvg.classList.remove('open') 
                                        secondRow.classList.add('hidden')
                                    }
                                })
                       

                        const doneTask = document.createElement('input')
                        doneTask.type = 'checkbox'
                        doneTask.name = 'done'
                        doneTask.id = 'done'
                        doneTask.classList.add('checkboxes')
                        doneTask.setAttribute("data-checkbox", i + 1)
                        doneTask.checked = task.isCompleted;
                        taskLeft.appendChild(doneTask)

                            if (task.isCompleted) {
                                taskRow.classList.add('done');
                            }

                            doneTask.addEventListener('change', function(e) {
                                let done = e.target.checked

                                if (done) {
                                    taskRow.classList.add('done');
                                }
                                else {
                                    taskRow.classList.remove('done');
                                }
                                saveCompletedTasks(e)
                            })

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
                secondRow.classList.add('second-row', 'hidden')

                    const taskDescription = document.createElement('div')
                    secondRow.appendChild(taskDescription)
                 
                            
                        const descriptionTitle = document.createElement('span')
                        descriptionTitle.textContent = 'Description: ';
                        descriptionTitle.classList.add('detail-title')
                        taskDescription.appendChild(descriptionTitle);

                        taskDescription.appendChild(document.createTextNode(task.description));
                       

                    const taskDate = document.createElement('div')
                    secondRow.appendChild(taskDate)

                            const dateTitle = document.createElement('span')
                            dateTitle.textContent = 'Due date: '
                            dateTitle.classList.add('detail-title')
                            taskDate.appendChild(dateTitle)

                            taskDate.appendChild(document.createTextNode(task.date));

                    const taskCategory = document.createElement('div');
                    secondRow.appendChild(taskCategory);

                            const categoryTitle = document.createElement('span')
                            categoryTitle.textContent = 'Category: '
                            categoryTitle.classList.add('detail-title')
                            taskCategory.appendChild(categoryTitle)

                            taskCategory.appendChild(document.createTextNode(task.categories));



                    const taskPriority = document.createElement('div');
                    secondRow.appendChild(taskPriority);

                            const priorityTitle = document.createElement('span')
                            priorityTitle.textContent = 'Priority: ';
                            priorityTitle.classList.add('detail-title');
                            taskPriority.appendChild(priorityTitle)

                            taskPriority.appendChild(document.createTextNode(task.priority))

             })
                    
    return taskContainer;

            
}

function editTask(task) {
    loadModals('task')
    const titleInput = document.querySelector('#titleInput')
    const descInput = document.querySelector('#description')
    const dateInput = document.querySelector('#dateInput')
    const selectPriority = document.querySelector('#taskPriority')
    const selectCategory = document.querySelector('#categories-select')
    const addTaskBtn = document.querySelector('#addTaskBtn')
    const modalContent = document.querySelector('.modal-content')

    addTaskBtn.remove()
    const saveTaskBtn = document.createElement('button')
    saveTaskBtn.classList.add('task-btn')
    saveTaskBtn.id = 'saveTaskBtn'
    saveTaskBtn.textContent = 'Save Task'
    modalContent. appendChild(saveTaskBtn)

        saveTaskBtn.addEventListener('click', function(e) {
            validateEditTaskForm(e, selectedIndex)
        })

    let selectedTask = task.target.parentNode.parentNode.parentNode;
    let selectedIndex = selectedTask.getAttribute("data-index")
    // taskDatabase.splice([selectedIndex])
    let taskTitle = selectedIndex.title;


    for (let i = 0; i < taskDatabase.length; i++) {
        if (taskDatabase[i].id == selectedIndex) {
          
            titleInput.value = taskDatabase[i].title;
            descInput.value = taskDatabase[i].description;
            dateInput.value = taskDatabase[i].date;
            selectPriority.value = taskDatabase[i].priority;
            selectCategory.value = taskDatabase[i].categories;
            }
    }
}

function saveEditedTask(title, description, date, priority, categories, selectedIndex) {

    let updatedTask = new Task(title, description, date, priority, categories)

    for(let i = 0; i < taskDatabase.length; i++) {
        if(taskDatabase[i].id == selectedIndex ) {
            taskDatabase[i] = updatedTask;
           
        }

        localStorage.setItem('tasks', JSON.stringify(taskDatabase))
    }
    window.location.reload();
}

function saveCompletedTasks(e) {
    const checkboxes = document.querySelectorAll('.checkboxes');

    Array.from(checkboxes).forEach(checkbox=> {
        const checkboxNum = checkbox.getAttribute("data-checkbox")
      
        for(let i = 0; i < taskDatabase.length; i++) {
            
            if(taskDatabase[i].id == checkboxNum) {
                taskDatabase[i].isCompleted = checkbox.checked;
            }
            localStorage.setItem('tasks', JSON.stringify(taskDatabase))    
        }
    })
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

 
        if((dataCategory === categoryTask.getAttribute('data-category')) &&
         (!categoryTask.querySelector('#done').checked)) {
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


        if(newDate == dataDate && (!categoryTask.querySelector('#done').checked)) {
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



        if(thisWeek && (!categoryTask.querySelector('#done').checked)) {
            categoryTask.style.display = 'grid';
        }

    })
}

const filterByCompleted = () => {
    const categoryTasks = document.querySelectorAll('.task-row')

    Array.from(categoryTasks).forEach(categoryTask => {
       
        categoryTask.style.display = 'none';

        if(categoryTask.querySelector('#done').checked) {
            categoryTask.style.display = 'grid';
        }
    })
}

const filterbyNotCompleted = () => {
    const categoryTasks = document.querySelectorAll('.task-row')

    Array.from(categoryTasks).forEach(categoryTask => {
       
        categoryTask.style.display = 'none';

        if(!categoryTask.querySelector('#done').checked) {
            categoryTask.style.display = 'grid';
        }
    })
}



export {addTask, showTaskInfo, filterbyCategory, filterByCompleted, filterbyNotCompleted, filterbyTodaysDate, filterByThisWeek, saveEditedTask}