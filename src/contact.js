function createContactPage() {
	const aboutPage = document.createElement("div");
	aboutPage.classList.add("about");

	const phoneNum = document.createElement("p");
	phoneNum.classList.add("contactLine");
	phoneNum.textContent = "✆ 555-555-5555";

	const address = document.createElement("p");
	address.classList.add("contactLine");
	address.textContent = "🏠 123 Main St, Anytown USA 12345";

	const map = document.createElement("img");
	map.classList.add("burger-place-img");
	map.src = "imgs/fake-map.png";
	map.alt = "Fake google map of a random place labelled 123 Main St.";

	const contactSections = [phoneNum, address, map];
	for (let section of contactSections) {
		aboutPage.appendChild(section);
	}

	return aboutPage;
}

function loadContact() {
	const main = document.getElementById("main");
	main.textContent = "";
	main.appendChild(createContactPage());
}

export default loadContact;
