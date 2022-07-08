import Edit from '../img/edit.png'
import Delete from '../img/delete.png'

let taskDatabase = []

function Task(title, description, date, priority, categories) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.categories = categories;
}

function validateForm(e) {
    e.preventDefault()

    if (title.value !== '') {
        addTask(title.value, description.value, date.value, priority.value, categories.value)
    }

    document.querySelector('.task-form').reset()
}

function addTask(title, description, date, priority, categories) {
    let task = new Task(title, description, date, priority, categories)
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


        const firstRow = document.createElement('div')
        taskRow.appendChild(firstRow)

            const taskTitle = document.createElement('div')
            taskTitle.classList.add('task-left')
            firstRow.appendChild(taskTitle)

                const taskLabel = document.createElement('label')
                taskLabel.htmlFor = 'done'
                taskLabel.textContent = task.label;

                const doneTask = document.createElement('input')
                doneTask.type = 'checkbox'
                doneTask.name = 'done'
                doneTask.id = 'done'
        
            const taskIcons = document.createElement('div')
            taskIcons.classList.add('task-right')
            firstRow.appendChild(taskIcons)

                const taskEdit = new Image()
                taskEdit.src = Edit;
                taskIcons.appendChild(taskEdit)

                const taskDelete = new Image()
                taskDelete.src = Delete;
                taskIcons.appendChild(taskDelete)
        
        const secondRow = document.createElement('div')
        taskRow.appendChild(secondRow)

            const taskDescription = document.createElement('div')
            taskDescription.textContent = `Description: ${task.description}`;

            const taskDate = document.createElement('div')
            taskDate.textContent = `Due date: ${task.date}`
}

export default validateForm