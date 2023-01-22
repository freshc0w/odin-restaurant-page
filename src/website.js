import loadHome from "./home";
import loadAbout from "./about";
import loadMenu from "./menu";
import loadContact from "./contact";

// Create header
function createHeader() {
    const header = document.createElement('div');
    header.classList.add('header');
    
    const restaurantName = document.createElement('h1');
    restaurantName.classList.add('restaurantName');
    restaurantName.textContent = 'Bigger Better Burger Basement';

    header.appendChild(restaurantName);
    header.appendChild(createNav());

    return header;
}

// Create navabar that includes 'home', 'about', 'menu', 'contact'.
function createNav() {
    const nav = document.createElement('nav');

    const createBtn = (text) => {
        const btn = document.createElement('button');
        btn.classList.add('btn-nav');
        btn.textContent = text;
        return btn;
        };

    // Make sure to clear all active buttons before assigning a new active.
    const setActiveBtn = (targetBtn) => {
        const btns = document.querySelectorAll('.btn-nav');
        btns.forEach((btn) => {
            btn.classList.remove('active'); 
        });

        targetBtn.classList.add('active');
    }

    // addClickFunction checks if the current btn is active. It is is do nothing.
    // Otherwise, set the button to be active and load the page based on the given parameter.
    const addClickFunction = (targetBtn, loadPage) => {
        targetBtn.addEventListener("click", (e) => {
            if(e.target.classList.contains("active")) return;
            setActiveBtn(targetBtn);
            loadPage();
        })
    }
    
    const homeBtn = createBtn('Home');
    const menuBtn = createBtn('Menu');
    const aboutBtn = createBtn('About');
    const contactBtn = createBtn('Contact');

    let btnOptions = [homeBtn, menuBtn, aboutBtn, contactBtn];
    let loadWebPage = [loadHome, loadMenu, loadAbout, loadContact]

    // Add btns into header
    for(let btn = 0; btn < btnOptions.length; btn++) {
        addClickFunction(btnOptions[btn], loadWebPage[btn]);
        nav.append(btnOptions[btn]);
    }

    // Set Home button to be default active btn.
    setActiveBtn(homeBtn);

    return nav;
}

function createMain() {
    const main = document.createElement('div');
    main.setAttribute('id', 'main');
    main.classList.add('main');

    // Default home page
    return main;
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const copyright = document.createElement('p');
    copyright.textContent = `Copyright @ ${new Date().getFullYear()} freshc0w`;

    // Add github icon with link

    footer.appendChild(copyright)
    return footer; 
}

function initialiseWebsite() {
    const content = document.getElementById("content");
    content.appendChild(createHeader());
    content.appendChild(createMain()); 
    content.appendChild(createFooter());
    loadHome(); // Default entry home page
}

export default initialiseWebsite;