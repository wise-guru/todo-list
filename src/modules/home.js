function showHome() {
    const homeContent = document.createElement('div')

    const homeTitle = document.createElement('h1')
    homeTitle.textContent = 'All Tasks'
    homeContent.appendChild(homeTitle)

    const addTaskBtn = document.createElement('button')
    addTaskBtn.textContent = "Add Task +"
    homeContent.appendChild(addTaskBtn)

    return homeContent
}

function loadHome() {
    const main = document.querySelector('#main');
    main.textContent = '';
    main.appendChild(showHome());
}

export default loadHome
