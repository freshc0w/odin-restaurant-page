function createAboutPage() {
    const about = document.createElement('div');
    about.classList.add("about");
    
    const para1 = createPara("In the 1970s, Jack decided to expand his operation, and turned the basement of his butcher shop into a full-fledged restaurant." + 
        " He called it \"The Bigger Better Burger Basement\", and it quickly became a local legend. The restaurant's decor was rustic and industrial, with exposed brick walls and vintage posters of classic burgers adorning the walls."
        + "The menu was simple, but the burgers were anything but. They were big, juicy, and packed with flavor, and people couldn't get enough of them.");

    const placeImg = document.createElement('img');
    placeImg.classList.add('burger-place-img');
    placeImg.src = "imgs/burger-place.jpg";
    placeImg.alt = "An image of the burger place back in the 1950s."

    const para2 = createPara("Over the years, \"The Bigger Better Burger Basement\" became a destination for burger lovers from all over the country." + 
        "The restaurant was featured in countless magazines and newspapers, and even attracted the attention of some famous food critics. But despite its growing fame, the restaurant remained true to its roots." + 
        "Jack's original recipe was still the star of the menu, and the burgers were still made with the same care and attention to detail as they were in the early days.");

    const para3 = createPara("Today, \"The Bigger Better Burger Basement\" is still run by the descendants of Jack and has expanded to multiple locations, but the recipes and the passion for creating the perfect burger remains the same." + 
        "It's a beloved institution, known for its delicious burgers, friendly service and unique atmosphere. It's a place where burger lovers can come together to enjoy a classic American meal in a truly unique setting.");

    let sections = [para1, placeImg, para2, para3];

    for(let section of sections) {
        about.appendChild(section);
    };

    return about;
};

function createPara(text) {
    const para = document.createElement('p');
    para.classList.add('about-para');
    para.textContent = text;

    return para;
}

function loadAbout() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createAboutPage());
    
};

export default loadAbout;