import Icon from './img/checkmark.png'

function createHeader() {
    const header = document.createElement('div')
    header.classList.add('header')
    

    // const homeBtn = document.createElement('input')
    // homeBtn.type = 'image'
    // homeBtn.src = Icon;
    // homeBtn.classList.add('header-buttons')
    // header.appendChild(homeBtn)

    // // homeBtn.addEventListener('click', function(e) {
    // //     if (e.target.classList.contains("active")) {
    // //         setActiveButton(homeBtn)
    // //         loadHome();
    // //     }
    // // })
        

    // const title = document.createElement('div')
    // title.classList.add('header-title')
    // title.textContent = "To Dooley"
    // header.appendChild(title)

    // const headerButtons = document.createElement('ul');
    // header.appendChild(headerButtons);
        
        // const menu = document.createElement('li')
        // headerButtons.appendChild(menu)

        //     const menuBtn = document.createElement('button')
        //     menuBtn.classList.add('header-buttons');
        //     menu.appendChild(menuBtn)
        //     menuBtn.textContent = 'Menu'

        //     // menuBtn.addEventListener('click', function(e) {
        //     //     if (e.target.classList.contains("active")) {
        //     //         setActiveButton(menuBtn)
        //     //         loadMenu();
        //     //     }
                
        //     // })

        // const about = document.createElement('li')
        // headerButtons.appendChild(about)

        //     const aboutBtn = document.createElement('button')
        //     aboutBtn.classList.add('header-buttons');
        //     about.appendChild(aboutBtn)
        //     aboutBtn.textContent = 'About'

        //     // aboutBtn.addEventListener('click', function(e) {
        //     //     if (e.target.classList.contains("active")) {
        //     //         setActiveButton(aboutBtn)
        //     //         loadAbout();
        //     //     }
        //     // })


        // const contact = document.createElement('li')
        // headerButtons.appendChild(contact)

        //     const contactBtn = document.createElement('button')
        //     contactBtn.classList.add('header-buttons');
        //     contact.appendChild(contactBtn)
        //     contactBtn.textContent = 'Contact'

        //     // contactBtn.addEventListener('click', function(e) {
        //     //     if (e.target.classList.contains("active")) {
        //     //         setActiveButton(contactBtn)
        //     //         loadContact();
        //     //     }
        //     // })
    return header;
}

function createSidebar() {
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar')
    sidebar.id ='sidebar'

        const sidebarTitle = document.createElement('li')
        sidebarTitle.classList.add('title')
        sidebar.appendChild(sidebarTitle)

            const checkmark = document.createElement('input') 
            checkmark.type = 'image'
            checkmark.src = Icon
            sidebarTitle.appendChild(checkmark)

            const titleText = document.createElement('p')
            titleText.textContent = 'To Dooley'
            sidebarTitle.appendChild(titleText)


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
    footer.textContent = 'Copyright © Krusty Krab'

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

    setActiveButton(document.querySelector(".header-buttons"));
}

initializeWebsite()

export default initializeWebsite