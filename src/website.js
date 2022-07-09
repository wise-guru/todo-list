import Icon from './img/checkmark.png';
import loadHome from './modules/home';
import HomeIcon from './img/home.png';
import TodayIcon from './img/today.png';
import WeekIcon from './img/week.png'

function createHeader() {
    const header = document.createElement('div')
    header.classList.add('header')
    header.textContent = 'Placeholder'

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

            const checkmark = document.createElement('input') 
            checkmark.type = 'image'
            checkmark.src = Icon
            sidebarTitle.appendChild(checkmark)

            const titleText = document.createElement('p')
            titleText.textContent = 'To Dooley'
            sidebarTitle.appendChild(titleText)
        
        const home = document.createElement('li');
        sidebarContent.appendChild(home)

            const homeImg = new Image ()
            homeImg.src = HomeIcon
            home.appendChild(homeImg)

            const homeText = document.createElement('p')
            homeText.textContent = 'Home'
            home.appendChild(homeText)

        const today = document.createElement('li')
        sidebarContent.appendChild(today)

            const todayImg = new Image()
            todayImg.src = TodayIcon
            today.appendChild(todayImg)

            const todayText = document.createElement('p')
            todayText.textContent = 'Today'
            today.appendChild(todayText)
        
        const week = document.createElement('li')
        sidebarContent.appendChild(week)

            const weekImg = new Image()
            weekImg.src = WeekIcon
            week.appendChild(weekImg)

            const weekText = document.createElement('p')
            weekText.textContent = 'Week'
            week.appendChild(weekText)

        const categoriesTitle = document.createElement('li')
        categoriesTitle.classList.add('categories')
        categoriesTitle.textContent = 'Categories'
        sidebarContent.appendChild(categoriesTitle)
        

        const addCategories = document.createElement('li')
        sidebarContent.appendChild(addCategories)

            const addCategoriesBtn = document.createElement('button')
            addCategoriesBtn.textContent = 'Add Categories +'
            addCategories.appendChild(addCategoriesBtn)
            





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

    loadHome();
}

initializeWebsite()

export default initializeWebsite