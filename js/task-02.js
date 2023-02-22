const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];

const ulEl = document.querySelector("#ingredients");

const makeListEl = ingredients.map((element) => {
	const ingridientsEl = document.createElement("li");
	ingridientsEl.textContent = element;
	ingridientsEl.classList.add("item");
	return ingridientsEl;
});
ulEl.append(...makeListEl);
