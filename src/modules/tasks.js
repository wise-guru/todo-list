import Edit from '../img/edit.png'
import Delete from '../img/delete.png'

let taskDatabase = []

function Task(title, description, date, priority, categories, close) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.categories = categories;
    this.close = close;
}

function addTask(title, description, date, priority, categories, close) {
    let task = new Task(title, description, date, priority, categories, close)
    taskDatabase.push(task);
    showTaskinfo(task);
}

function showTaskinfo(task) {
    const main = document.querySelector('#main')

    const taskContainer = document.createElement('div')
    main.appendChild(taskContainer)

    const taskRow = document.createElement('div')
    taskRow.classList.add('.task-row')
    taskContainer.appendChild(taskRow)

    const taskTitle = document.createElement('div')
    taskTitle.classList.add('task-left')
    taskRow.appendChild(taskTitle)

        const taskLabel = document.createElement('label')
        taskLabel.htmlFor = 'done'

        const doneTask = document.createElement('input')
        doneTask.type = 'checkbox'
        doneTask.name = 'done'
        doneTask.id = 'done'
    
    const taskIcons = document.createElement('div')
    taskIcons.classList.add('task-right')
    taskRow.appendChild(taskIcons)

        const taskEdit = new Image()
        taskEdit.src = Edit;
        taskIcons.appendChild(taskEdit)

        const taskDelete = new Image()
        taskDelete.src = Delete;
        taskIcons.appendChild(taskDelete)





    

    

}