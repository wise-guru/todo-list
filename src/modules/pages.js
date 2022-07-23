import { showCategoryPage } from "./categories.js"
import loadModals from "./modal.js"
import { showTaskInfo } from "./tasks.js"


function showAllTasks() {
    const allTasksContent = document.createElement('div')
    allTasksContent.classList.add('home-content')

    const allTasksTitle = document.createElement('h1')
    allTasksTitle.textContent = 'All Tasks'
    allTasksContent.appendChild(allTasksTitle)

    const addTaskBtn = document.createElement('button')
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
    homeContent.classList.add('home-content')

    const homeTitle = document.createElement('h1')
    homeTitle.textContent = 'Home'
    homeContent.appendChild(homeTitle)

    const addTaskBtn = document.createElement('button')
    addTaskBtn.textContent = "Add Task +"
    homeContent.appendChild(addTaskBtn)

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
    todayContent.classList.add('today-content');

    const todayTitle = document.createElement('h1');
    todayTitle.textContent = `Today's Tasks`;
    todayContent.appendChild(todayTitle);

    const taskContainer = document.createElement('div')
    taskContainer.classList.add('task-container')
    taskContainer.id = 'task-container'
    todayContent.appendChild(taskContainer)

    return todayContent
}

function showThisWeek() {
    const weekContent = document.createElement('div')
    weekContent.classList.add('week-content');

    const weekTitle = document.createElement('h1');
    weekTitle.textContent = `This Week's Tasks`;
    weekContent.appendChild(weekTitle);

    const taskContainer = document.createElement('div')
    taskContainer.classList.add('task-container')
    taskContainer.id = 'task-container'
    weekContent.appendChild(taskContainer)

    return weekContent
}


function loadPage(e) {
    const main = document.querySelector('#main');
    main.textContent = '';

    if (e === 'allTasks') {
        main.appendChild(showAllTasks())
    }   else if (e === 'home') {
        main.appendChild(showHome());
        showTaskInfo
    }   else if (e === 'today') {
        main.appendChild(showToday());
    }   else if (e === 'week') {
        main.appendChild(showThisWeek());
    }   else {
        main.appendChild(showCategoryPage(e))
    }
}

export {loadPage}
