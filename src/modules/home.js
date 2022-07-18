import loadModals from "./modal.js"

function showHome() {
    const homeContent = document.createElement('div')
    homeContent.classList.add('home-content')

    const homeTitle = document.createElement('h1')
    homeTitle.textContent = 'All Tasks'
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



function loadPage(page) {
    const main = document.querySelector('#main');
    main.textContent = '';

    if (page === 'home') {
        main.appendChild(showHome());
    }   else if (page === 'today') {
        main.appendChild(showToday());
    }   else if (page == 'week') {
        main.appendChild(showThisWeek());
    }
}

export {loadPage}
