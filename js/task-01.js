//1. Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
const numbOfCategories =
	document.querySelector("ul#categories").children.length;
console.log(`Number of categories: ${numbOfCategories}`);

//2. Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

const UlInfoEl = document.querySelector("ul#categories");
const LiInfoEl = UlInfoEl.querySelectorAll(".item");
const elements = LiInfoEl.forEach((option) => {
	const itemCategoriesEl = option.firstElementChild.textContent;
	console.log(`Category: ${itemCategoriesEl}`);
	const liCountEl = option.lastElementChild.children.length;
	console.log(`Elements: ${liCountEl}`);
});
