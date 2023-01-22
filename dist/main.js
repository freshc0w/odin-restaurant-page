(()=>{"use strict";function e(e){const t=document.createElement("p");return t.classList.add("para"),t.textContent=e,t}const t=function(){const t=document.getElementById("main");t.textContent="",t.appendChild(function(){const t=document.createElement("div");t.classList.add("home");const n=document.createElement("img");n.classList.add("burger-place-img"),n.src="imgs/burger-joint.jpg",n.alt="Burger place interior";const a=document.createElement("h2");a.classList.add("heading"),a.textContent="Hello ANYA and welcome to the BIGGER BETTER BURGER BASEMENT! \n Serving since '50s!";const r=e("At Bigger Better Burger Basement, we pledge ourselves in offering you the best goddamn burger you've ever had in your goddamn life."),s=e("Because let's be real, what's a bigger sin that feeling unsatiated after a long day at work?"),o=e("That's why at BBBB, we don't just sell you burgers. We sell you our heart and soul. The fufillment you never know you needed."),i=e("We sell you our purpose in life.");i.style.fontSize="1.5rem",i.style.fontWeight="bold";const d=e("Fill that ravenous appetite of yours through ordering online or visiting us at Queenstown Burger St."),l=e("What are you waiting for? Hop over to our menu and drool helplessly over our the art that is our burgers.");t.appendChild(a),t.appendChild(n);const u=[r,s,o,i,d,l];for(let e of u)t.appendChild(e);return t}())};function n(e){const t=document.createElement("p");return t.classList.add("about-para"),t.textContent=e,t}const a=function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("about");let t=[n("In the 1970s, Jack decided to expand his operation, and turned the basement of his butcher shop into a full-fledged restaurant. He called it \"The Bigger Better Burger Basement\", and it quickly became a local legend. The restaurant's decor was rustic and industrial, with exposed brick walls and vintage posters of classic burgers adorning the walls. The menu was simple, but the burgers were anything but. They were big, juicy, and packed with flavor, and people couldn't get enough of them."),n('Over the years, "The Bigger Better Burger Basement" became a destination for burger lovers from all over the country. The restaurant was featured in countless magazines and newspapers, and even attracted the attention of some famous food critics. But despite its growing fame, the restaurant remained true to its roots. Jack\'s original recipe was still the star of the menu, and the burgers were still made with the same care and attention to detail as they were in the early days.'),n("Today, \"The Bigger Better Burger Basement\" is still run by the descendants of Jack and has expanded to multiple locations, but the recipes and the passion for creating the perfect burger remains the same. It's a beloved institution, known for its delicious burgers, friendly service and unique atmosphere. It's a place where burger lovers can come together to enjoy a classic American meal in a truly unique setting.")];for(let n of t)e.appendChild(n);return e}())};function r(e,t,n,a){const r=document.createElement("div");r.classList.add("menu-item");const s=document.createElement("h1");s.classList.add("menuHeader"),s.textContent=e;const o=document.createElement("img");o.classList.add("menuImg"),o.src=t,o.alt=n;const i=document.createElement("p");i.classList.add("menuDescription"),i.textContent=a;const d=[s,o,i];for(let e of d)r.appendChild(e);return r}const s=function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");return e.classList.add("menu"),e.appendChild(r("The BlueGrass BBQ","imgs/burgers/the-bluegrass-bbq.jpg","Bluegrass BBQ Burger"," A burger that will have your taste buds singing the sweet song of the south. Juicy pulled pork, tangy BBQ sauce and crispy onion rings all nestled between a soft bun. A true southern delicacy.")),e.appendChild(r("The Spicy Southwest","imgs/burgers/the-spicy-southwest.jpg","Spicy Southwest Burger","A burger that packs a punch of flavor. Jalapenos, avocado, pepper jack cheese, and a spicy chipotle mayo, all nestled between a warm bun. Perfect for those who love a bit of heat.")),e.appendChild(r("The Mushroom Swiss","imgs/burgers/the-mushroom-swiss.jpg","Mushroom Swiss Burger","A burger that will take your taste buds on a journey. Sautéed mushrooms, Swiss cheese, and a garlic aioli, all nestled between a warm bun. Perfect for those who love earthy and rich flavors.")),e.appendChild(r("The Big Cheese","imgs/burgers/the-big-cheese.jpg","Big Cheese Burger","A burger that will satisfy your cheese cravings. Cheddar, Swiss, blue cheese, and a béarnaise sauce, all nestled between a warm bun. Perfect for those who love a cheesy explosion in their mouth.")),e.appendChild(r("The Greek Goddess","imgs/burgers/the-greek-goddess.jpg","Greek Goddess Burger","A burger that will transport you to the Mediterranean. Feta cheese, tzatziki sauce, and a Greek salad, all nestled between a warm bun. Perfect for those who love Mediterranean flavors.")),e.appendChild(r("The Juicy Lucy","imgs/burgers/the-juicy-lucy.jpg","Juicy Lucy Burger","A burger that will make you drool. A beef patty stuffed with cheddar cheese, topped with bacon and lettuce, all nestled between a warm bun. Perfect for those who love a juicy and cheesy bite.")),e.appendChild(r("The Flaming Fajita","imgs/burgers/the-flaming-fajita.jpg","Flaming Fajita Burger","A burger that will take you on a Tex-Mex adventure. Grilled peppers, onions, and cheddar cheese, topped with a spicy fajita sauce, all nestled between a warm bun. Perfect for those who love Tex-Mex flavors.")),e.appendChild(r("The Wild West","imgs/burgers/the-wild-west.png","Wild West Burger","A burger that will make you feel like a cowboy. Bacon, a fried egg, cheddar cheese, and a spicy buffalo sauce, all nestled between a warm bun. Perfect for those who love western adventure.")),e}())},o=function(){document.getElementById("main").textContent=""};!function(){const e=document.getElementById("content");e.appendChild(function(){const e=document.createElement("div");e.classList.add("header");const n=document.createElement("h1");return n.classList.add("restaurantName"),n.textContent="Bigger Better Burger Basement",e.appendChild(n),e.appendChild(function(){const e=document.createElement("nav"),n=e=>{const t=document.createElement("button");return t.classList.add("btn-nav"),t.textContent=e,t},r=e=>{document.querySelectorAll(".btn-nav").forEach((e=>{e.classList.remove("active")})),e.classList.add("active")},i=(e,t)=>{e.addEventListener("click",(n=>{n.target.classList.contains("active")||(r(e),t())}))},d=n("Home");let l=[d,n("Menu"),n("About"),n("Contact")],u=[t,s,a,o];for(let t=0;t<l.length;t++)i(l[t],u[t]),e.append(l[t]);return r(d),e}()),e}()),e.appendChild(function(){const e=document.createElement("div");return e.setAttribute("id","main"),e.classList.add("main"),e}()),e.appendChild(function(){const e=document.createElement("footer");e.classList.add("footer");const t=document.createElement("p");return t.textContent=`Copyright @ ${(new Date).getFullYear()} freshc0w`,e.appendChild(t),e}()),t()}()})();