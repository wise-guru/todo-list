function addTasksModal() {
    const taskModal = document.createElement('div')
    taskModal.classList.add('bg-modal')

        const modalContent = document.createElement('div')
        modalContent.classList.add('modal-content')
        taskModal.appendChild(modalContent)

            const xBtn = document.createElement('div')
            xBtn.classList.add('x-btn')
            xBtn.textContent = '+'
            modalContent.appendChild(xBtn)

                xBtn.addEventListener('click', function(e) {
                    handleClick('close')
                })

            const taskHeading = document.createElement('p')
            taskHeading.textContent = 'Task'
            modalContent.appendChild(taskHeading)


            const taskForm = document.createElement('form')
            modalContent.appendChild(taskForm)

                const taskTitle = document.createElement('div')
                taskTitle.classList.add('field')
                taskForm.appendChild(taskTitle)

                    const titleLabel = document.createElement('label')
                    titleLabel.htmlFor = 'taskTitle'
                    titleLabel.textContent = 'Title:'
                    taskTitle.appendChild(titleLabel)

                    const titleInput = document.createElement('input')
                    titleInput.id = 'taskTitle'
                    taskTitle.appendChild(titleInput)

                const taskDescription = document.createElement('div')
                taskDescription.classList.add('field')
                modalContent.appendChild(taskDescription)

                    const descriptionLabel = document.createElement('label')
                    descriptionLabel.htmlFor = 'taskDesc'
                    descriptionLabel.textContent = 'Description:'
                    taskDescription.appendChild(descriptionLabel)

                    const descriptionInput = document.createElement('input')
                    descriptionInput.id = 'taskDesc'
                    taskDescription.appendChild(descriptionInput)
                
                const taskDate = document.createElement('div')
                taskDate.classList.add('field')
                modalContent.appendChild(taskDate)

                    const dateLabel = document.createElement('label')
                    dateLabel.htmlFor = 'taskDate'
                    dateLabel.textContent = 'Date:'
                    taskDate.appendChild(dateLabel)

                    const dateInput = document.createElement('input')
                    dateInput.type = 'date'
                    dateInput.id = 'taskDate'
                    taskDate.appendChild(dateInput)
                
                const taskPriority = document.createElement('div')
                taskPriority.classList.add('field')
                modalContent.appendChild(taskPriority)

                   const priorityLabel = document.createElement('label')
                   priorityLabel.htmlFor = 'taskPriority'
                   priorityLabel.textContent = 'Priority'
                   taskPriority.appendChild(priorityLabel)

                   const prioritySelect = document.createElement('select')
                   prioritySelect.id = 'taskPriority'
                   prioritySelect.name = 'priority'
                   taskPriority.appendChild(prioritySelect)

                        const priorityLow = document.createElement('option')
                        priorityLow.value = 'low'
                        priorityLow.textContent = 'Low'
                        prioritySelect.appendChild(priorityLow)

                        const pMed = document.createElement('option')
                        pMed.value = 'medium'
                        pMed.textContent = 'Medium'
                        prioritySelect.appendChild(pMed)

                        const pHigh = document.createElement('option')
                        pHigh.value = 'High'
                        pHigh.textContent = 'High'
                        prioritySelect.appendChild(pHigh)

                const taskCategories = document.createElement('div')
                taskCategories.classList.add('field')
                modalContent.appendChild(taskCategories)

                    const categoriesLabel = document.createElement('label')
                    categoriesLabel.htmlFor = 'categories'
                    categoriesLabel.textContent = 'Categories'
                    taskCategories.appendChild(categoriesLabel)

                        const categoriesSelect = document.createElement('select')
                        categoriesSelect.id = 'categories'
                        categoriesSelect.name = 'categories'
                        taskCategories.appendChild(categoriesSelect)

                        const allTasks = document.createElement('option')
                        allTasks.value = 'all'
                        allTasks.textContent = 'All tasks'
                        categoriesSelect.appendChild(allTasks)


                const closeBtn = document.createElement('button')
                closeBtn.classList.add('close-btn', 'task-btn')
                closeBtn.textContent = 'close'
                modalContent.appendChild(closeBtn)

                    closeBtn.addEventListener('click', function(e) {
                        handleClick('close')
                    })

                    
                const addTaskBtn = document.createElement('button')
                addTaskBtn.classList.add('task-btn')
                addTaskBtn.textContent = 'Add'
                modalContent. appendChild(addTaskBtn)
    
    return taskModal
}

function handleClick() {
    if ('close') {
        document.querySelector('.bg-modal').remove()
    }
}

function loadTaskModal() {
    const container = document.querySelector('#container')
    container.appendChild(addTasksModal())
}

export default loadTaskModal