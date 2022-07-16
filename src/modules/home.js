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

function loadHome() {
    const main = document.querySelector('#main');
    main.textContent = '';
    main.appendChild(showHome());
}

export default loadHome
