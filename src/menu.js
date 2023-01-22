function createMenu() {
	const menu = document.createElement("div");
	menu.classList.add("menu");

	menu.appendChild(createMenuItem(
		"The BlueGrass BBQ",
		"imgs/burgers/the-bluegrass-bbq.jpg",
		"Bluegrass BBQ Burger",
		" A burger that will have your taste buds singing the sweet song of the south." +
			" Juicy pulled pork, tangy BBQ sauce and crispy onion rings all nestled between a soft bun. A true southern delicacy."
	));

    menu.appendChild(createMenuItem(
        "The Spicy Southwest",
        "imgs/burgers/the-spicy-southwest.jpg",
        "Spicy Southwest Burger",
        "A burger that packs a punch of flavor. Jalapenos, avocado, pepper jack cheese, and a spicy chipotle mayo, all nestled between a warm bun. Perfect for those who love a bit of heat."
    ));

    menu.appendChild(createMenuItem(
        "The Mushroom Swiss",
        "imgs/burgers/the-mushroom-swiss.jpg",
        "Mushroom Swiss Burger",
        "A burger that will take your taste buds on a journey. Sautéed mushrooms, Swiss cheese, and a garlic aioli, all nestled between a warm bun. Perfect for those who love earthy and rich flavors."
    ));

    menu.appendChild(createMenuItem(
        "The Big Cheese",
        "imgs/burgers/the-big-cheese.jpg",
        "Big Cheese Burger",
        "A burger that will satisfy your cheese cravings. Cheddar, Swiss, blue cheese, and a béarnaise sauce, all nestled between a warm bun. Perfect for those who love a cheesy explosion in their mouth."
    ));

    menu.appendChild(createMenuItem(
        "The Greek Goddess",
        "imgs/burgers/the-greek-goddess.jpg",
        "Greek Goddess Burger",
        "A burger that will transport you to the Mediterranean. Feta cheese, tzatziki sauce, and a Greek salad, all nestled between a warm bun. Perfect for those who love Mediterranean flavors."
    ));

    menu.appendChild(createMenuItem(
        "The Juicy Lucy",
        "imgs/burgers/the-juicy-lucy.jpg",
        "Juicy Lucy Burger",
        "A burger that will make you drool. A beef patty stuffed with cheddar cheese, topped with bacon and lettuce, all nestled between a warm bun. Perfect for those who love a juicy and cheesy bite."
    ));

    menu.appendChild(createMenuItem(
        "The Flaming Fajita",
        "imgs/burgers/the-flaming-fajita.jpg",
        "Flaming Fajita Burger",
        "A burger that will take you on a Tex-Mex adventure. Grilled peppers, onions, and cheddar cheese, topped with a spicy fajita sauce, all nestled between a warm bun. Perfect for those who love Tex-Mex flavors."
    ));

    menu.appendChild(createMenuItem(
        "The Wild West",
        "imgs/burgers/the-wild-west.png",
        "Wild West Burger",
        "A burger that will make you feel like a cowboy. Bacon, a fried egg, cheddar cheese, and a spicy buffalo sauce, all nestled between a warm bun. Perfect for those who love western adventure."
    ))


	return menu;
}

function createMenuItem(title, src, alt, description) {
	const menuItem = document.createElement("div");
	menuItem.classList.add("menu-item");

	// In each menu item, there will be a header, img and some text.
	const menuHeader = document.createElement("h1");
	menuHeader.classList.add("menuHeader");
	menuHeader.textContent = title;

	const menuImg = document.createElement("img");
	menuImg.classList.add("menuImg");
	menuImg.src = src;
	menuImg.alt = alt;

	const menuDescription = document.createElement("p");
	menuDescription.classList.add("menuDescription");
	menuDescription.textContent = description;

	const menuInfo = [menuHeader, menuImg, menuDescription];
	for (let info of menuInfo) {
		menuItem.appendChild(info);
	};

	return menuItem;
}

function loadMenu() {
	const main = document.getElementById("main");
	main.textContent = "";
    main.appendChild(createMenu());
}

export default loadMenu;
