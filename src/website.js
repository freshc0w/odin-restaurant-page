// Create header
function createHeader() {
    const header = document.createElement('div');
    header.classList.add('header');
    
    const restaurantName = document.createElement('h1');
    restaurantName.classList.add('restaurantName');
    restaurantName.textContent = 'Burger Queen';

    header.appendChild(restaurantName);

    return header;
}







function initialiseWebsite() {
    const content = document.getElementById("content");
    content.appendChild(createHeader()); 
}
export default initialiseWebsite;