import Notebook from './img/notebook.png'
import CheckMark from './img/checkmark.png';
import {loadPage} from './modules/pages';
import HomeIcon from './img/home.png';
import TodayIcon from './img/today.png';
import WeekIcon from './img/week.png'
import loadModals from './modules/modal';
import {filterByThisWeek, filterbyTodaysDate, showTaskInfo, filterByCompleted, filterbyNotCompleted} from './modules/tasks.js'
import { showCategoryInfo as showSidebarCategories } from './modules/categories';
import { isToday } from 'date-fns';

function createHeader() {
   
    const header = document.createElement('div')
    header.classList.add('header')
    header.textContent;

    const greeting = document.createElement('div')
    greeting.classList.add('greeting')
    header.appendChild(greeting)

        const greetingText = document.createElement('h2')
        greetingText.classList.add('title')
        greetingText.textContent = `Hello,`
        greeting.appendChild(greetingText)

        const greetingInput = document.createElement('input')
        greetingInput.classList.add('greeting-input')
        greetingInput.id = 'name'
        greetingInput.placeholder = 'Name here'
        greetingText.appendChild(greetingInput);

        const username = localStorage.getItem('username') || '';
        greetingInput.value = username;

        greetingInput.addEventListener('change', function(e) {
            localStorage.setItem('username', e.target.value)
        })

    return header;
}

function createSidebar() {
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar')
    sidebar.id ='sidebar'

    const sidebarContent = document.createElement('ul');
    sidebar.appendChild(sidebarContent);

        const sidebarTitle = document.createElement('li');
        sidebarTitle.classList.add('title')
        sidebarContent.appendChild(sidebarTitle)

            const notebook = document.createElement('input') 
            notebook.type = 'image';
            notebook.src = Notebook;
            sidebarTitle.appendChild(notebook);

            const titleText = document.createElement('p')
            titleText.textContent = 'To Dooley'
            sidebarTitle.appendChild(titleText)

            sidebarTitle.addEventListener('click', function(e) {
                loadPage('allTasks')
                showTaskInfo()
            })
        
        const home = document.createElement('li');
        home.classList.add('menu')
        sidebarContent.appendChild(home)

            const homeImg = new Image ()
            homeImg.src = HomeIcon
            home.appendChild(homeImg)

            const homeText = document.createElement('p')
            homeText.textContent = 'Home'
            home.appendChild(homeText)

            home.addEventListener('click', function(e) {
                loadPage('home');
                showTaskInfo();
                filterbyNotCompleted();
            })

        const today = document.createElement('li')
        sidebarContent.appendChild(today)
        today.classList.add('menu')

            const todayImg = new Image()
            todayImg.src = TodayIcon
            today.appendChild(todayImg)

            const todayText = document.createElement('p')
            todayText.textContent = 'Today'
            today.appendChild(todayText)

            today.addEventListener('click', function(e) {
                loadPage('today')
                showTaskInfo()
                filterbyTodaysDate()

            })

        
        const week = document.createElement('li')
        sidebarContent.appendChild(week)
        week.classList.add('menu')

            const weekImg = new Image()
            weekImg.src = WeekIcon
            week.appendChild(weekImg)

            const weekText = document.createElement('p')
            weekText.textContent = 'Week'
            week.appendChild(weekText)

            week.addEventListener('click', function(e) {
                loadPage('week')
                showTaskInfo()
                filterByThisWeek();
            })

        const completedTasks = document.createElement('li');
        completedTasks.classList.add('menu')
        sidebarContent.appendChild(completedTasks)

            const completedTasksImg = new Image()
            completedTasksImg.src = CheckMark;
            completedTasks.appendChild(completedTasksImg)

            const completedTasksText = document.createElement('p')
            completedTasksText.textContent = 'Completed'
            completedTasks.appendChild(completedTasksText)

            completedTasks.addEventListener('click', function(e) {
                loadPage('completed')
                showTaskInfo()
                filterByCompleted()
            })
        
  
        const categoriesTitle = document.createElement('li')
        categoriesTitle.classList.add('categories')
        categoriesTitle.textContent = 'Categories'
        sidebarContent.appendChild(categoriesTitle)

        const categoriesContainer = document.createElement('div');
        sidebarContent.appendChild(categoriesContainer);
        categoriesContainer.id = 'category-container';
        
        const addCategories = document.createElement('li')
        sidebarContent.appendChild(addCategories)

            const addCategoriesBtn = document.createElement('button')
            addCategoriesBtn.textContent = 'Add Categories +'
            addCategories.appendChild(addCategoriesBtn)

            addCategoriesBtn.addEventListener('click', function(e) {
                loadModals('category')
            })

        

    return sidebar;
}

function createMain() {
    const main = document.createElement('div')
    main.classList.add('main')
    main.id = 'main'

    return main;

}

function createFooter() {
    const footer = document.createElement('div')
    footer.classList.add('footer')
    footer.textContent 

    return footer;
}

function initializeWebsite() {
    const container = document.createElement('div')
    container.id = 'container'
    document.body.appendChild(container)

    container.appendChild(createHeader())
    container.appendChild(createSidebar())
    container.appendChild(createMain())
    container.appendChild(createFooter())

    showSidebarCategories();
    loadPage('home');
    showTaskInfo();
    filterbyNotCompleted();
}

initializeWebsite()

export default initializeWebsite