import { showCategoryPage } from "./categories.js"
import loadModals from "./modal.js"
import { showTaskInfo } from "./tasks.js"


function showAllTasks() {
    const allTasksContent = document.createElement('div')
    allTasksContent.classList.add('home-content', 'page')

    const allTasksTitle = document.createElement('h1')
    allTasksTitle.textContent = 'All Tasks'
    allTasksContent.appendChild(allTasksTitle)

    const addTaskBtn = document.createElement('button')
    addTaskBtn.classList.add('addTask-btn')
    addTaskBtn.textContent = "Add Task +"
    allTasksContent.appendChild(addTaskBtn)

    addTaskBtn.addEventListener('click', function(e) {
        loadModals('task')
    })

    const taskContainer = document.createElement('div')
    taskContainer.classList.add('task-container')
    taskContainer.id = 'task-container'
    allTasksContent.appendChild(taskContainer)

    return allTasksContent
}

function showHome() {
    const homeContent = document.createElement('div')
    homeContent.classList.add('home-content', 'page')

    const homeTitle = document.createElement('h1')
    homeTitle.textContent = 'Home'
    homeContent.appendChild(homeTitle)

    const addTaskBtn = document.createElement('button')
    addTaskBtn.textContent = "Add Task +"
    homeContent.appendChild(addTaskBtn)
    addTaskBtn.classList.add('addTask-btn')

    addTaskBtn.addEventListener('click', function(e) {
        loadModals('task')
    })


    const taskContainer = document.createElement('div')
    taskContainer.classList.add('task-container')
    taskContainer.id = 'task-container'
    homeContent.appendChild(taskContainer)

    return homeContent
}

function showToday() {
    const todayContent = document.createElement('div');
    todayContent.classList.add('today-content', 'page');

    const todayTitle = document.createElement('h1');
    todayTitle.textContent = `Today's Tasks`;
    todayContent.appendChild(todayTitle);

    const addTaskBtn = document.createElement('button')
    addTaskBtn.textContent = "Add Task +"
    todayContent.appendChild(addTaskBtn)
    addTaskBtn.classList.add('addTask-btn')

    addTaskBtn.addEventListener('click', function(e) {
        loadModals('task')
    })

    const taskContainer = document.createElement('div')
    taskContainer.classList.add('task-container')
    taskContainer.id = 'task-container'
    todayContent.appendChild(taskContainer)

    return todayContent
}

function showThisWeek() {
    const weekContent = document.createElement('div')
    weekContent.classList.add('week-content', 'page');

    const weekTitle = document.createElement('h1');
    weekTitle.textContent = `This Week's Tasks`;
    weekContent.appendChild(weekTitle);

    const addTaskBtn = document.createElement('button')
    addTaskBtn.textContent = "Add Task +"
    weekContent.appendChild(addTaskBtn)
    addTaskBtn.classList.add('addTask-btn')

    addTaskBtn.addEventListener('click', function(e) {
        loadModals('task')
    })

    const taskContainer = document.createElement('div')
    taskContainer.classList.add('task-container')
    taskContainer.id = 'task-container'
    weekContent.appendChild(taskContainer)

    return weekContent
}

function showCompletedTasks() {
    const completedContent = document.createElement('div')
    completedContent.classList.add('completed-content', 'page')

    const completedTitle = document.createElement('h1')
    completedTitle.textContent = 'Completed Tasks'
    completedContent.appendChild(completedTitle);
    

    const taskContainer = document.createElement('div')
    taskContainer.classList.add('task-container')
    taskContainer.id = 'task-container'
    completedContent.appendChild(taskContainer)

    return completedContent
}

function loadPage(e) {
    const main = document.querySelector('#main');
    main.textContent = '';

    if (e === 'allTasks') {
        main.appendChild(showAllTasks())
    }   else if (e === 'home') {
        main.appendChild(showHome());
    }   else if (e === 'today') {
        main.appendChild(showToday());
    }   else if (e === 'week') {
        main.appendChild(showThisWeek());
    }   else if(e === 'completed') {
        main.appendChild(showCompletedTasks())
    }
    
    else {
        main.appendChild(showCategoryPage(e))
    }
}

export {loadPage}
