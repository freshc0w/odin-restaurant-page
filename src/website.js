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

    const setActiveBtn = (targetBtn) => {
        const btns = document.querySelectorAll('.btn-nav');
        btns.forEach((btn) => {
            btn.classList.remove('active'); 
        });

        targetBtn.classList.add('active');
    }

    const addClickFunction = (targetBtn) => {
        targetBtn.addEventListener("click", (e) => {
        if(e.target.classList.contains("active")) return;
        setActiveBtn(targetBtn);
        })
    }

    const homeBtn = createBtn('Home');
    const aboutBtn = createBtn('About');
    const menuBtn = createBtn('Menu');
    const contactBtn = createBtn('Contact');

    let btnOptions = [homeBtn, aboutBtn, menuBtn, contactBtn];

    // Add btns into header
    for(let btn of btnOptions) {
        addClickFunction(btn);
        nav.append(btn);
    }
    // Set Home button to be default active btn.
    setActiveBtn(homeBtn);

    return nav;
}

function createMain() {
    const main = document.createElement('div');
    main.classList.add('main');
    main.textContent = 'Hello world'
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
}

export default initialiseWebsite;