function createHomePage() {
    const home = document.createElement('div');
    home.classList.add('home')

    // Add burger joint interior img
    const burgerPlace = document.createElement('img');
    burgerPlace.classList.add('burger-place-img')
    burgerPlace.src="imgs/burger-joint.jpg";
    burgerPlace.alt="Burger place interior";

    const heading = document.createElement('h2');
    heading.classList.add('heading');
    heading.textContent = 'Hello and welcome to the BIGGER BETTER BURGER BASEMENT! \n Serving since \'03!';
    
    const para1 = createPara('At Bigger Better Burger Basement, we pledge ourselves in offering you' +
        ' the best goddamn burger you\'ve ever had in your goddamn life.');
    const para2 = createPara('Because let\'s be real, what\'s a bigger sin that feeling unsatiated after '
        + 'a long day at work?');
    const para3 = createPara('That\'s why at BBBB, we don\'t just sell you burgers. We sell you our heart and soul. ' +
        'The fufillment you never know you needed.');
    const para4 = createPara('We sell you our purpose in life.');
    para4.style.fontSize = '1.5rem';
    para4.style.fontWeight = 'bold';
    const para5 = createPara('Fill that ravenous appetite of yours through ordering online or visiting us ' +
        'at Queenstown Burger St.')
    const para6 = createPara('What are you waiting for? Hop over to our menu and drool helplessly over our the ' +
        'art that is our burgers.');

    home.appendChild(heading);
    home.appendChild(burgerPlace);
    home.appendChild(para1);
    home.appendChild(para2);
    home.appendChild(para3);
    home.appendChild(para4);
    home.appendChild(para5);
    home.appendChild(para6);
    return home;
}

function createPara(text) {
    const para = document.createElement('p');
    para.classList.add('para')
    para.textContent = text;
    return para
}

function loadHome() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createHomePage());
    
};

export default loadHome;