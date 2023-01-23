function createContactPage() {
    const aboutPage = document.createElement('div');
    aboutPage.classList.add('about');

    const phoneNum = document.createElement('p');
    phoneNum.classList.add('contactLine');
    phoneNum.textContent = '✆ 555-555-5555';

    const address = document.createElement('p');
    address.classList.add('contactLine');
    address.textcontent = '🏠 123 Main St, Anytown USA 12345';
    
    
}


function loadContact() {
    const main = document.getElementById('main');
    main.textContent = '';
    
};

export default loadContact;