function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    createMenuItem('The Bun Jovi')

    return menu;
}


function createMenuItem(headerText, description) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    // In each menu item, there will be a header, img and some text.
    const menuHeader = document.createElement('h1');
    menuHeader.classList.add('menuHeader');
    menuHeader.textcontent = headerText;

    const menuImg = document.createElement('img');
    menuImg.classList.add('menuImg');

    const menuDescription = document.createElement('p');
    menuDescription.classList.add('menuDescription');
    menuDescription.textContent = description;

    const menuInfo = [menuHeader, menuImg, menuDescription];
    for(let info of menuInfo) {
        menuItem.appendChild(info);
    }

    return menuItem;

}


function loadMenu() {
    const main = document.getElementById('main');
    main.textContent = '';
    
};

export default loadMenu;