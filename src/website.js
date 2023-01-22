// Create header
function createHeader() {
    const header = document.createElement('div');
    header.classList.add('header');
    
    const restaurantName = document.createElement('h1');
    restaurantName.classList.add('restaurantName');
    restaurantName.textContent = 'Burger Danger';

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

    return nav;

}







function initialiseWebsite() {
    const content = document.getElementById("content");
    content.appendChild(createHeader()); 
}
export default initialiseWebsite;