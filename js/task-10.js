function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const inputEl = document.querySelector("#controls input");
const btnCreateEl = document.querySelector("[data-create]");
const btnDestroyEl = document.querySelector("[data-destroy]");
const divBoxesEl = document.querySelector("#boxes");

btnCreateEl.addEventListener("click", () => {
	createBoxes(inputEl.value);
});
btnDestroyEl.addEventListener("click", () => {
	divBoxesEl.innerHTML = "";
});
btnDestroyEl.addEventListener("click", () => {
	inputEl.value = "";
});

function createBoxes(amount) {
	const firstDivSize = 30;
	for (let i = 0; i < amount; i += 1) {
		let divSize = firstDivSize + 10 * i;
		const divEl = `<div style=" width: ${divSize}px; height: ${divSize}px; background-color: ${getRandomHexColor()}"></div>`;
		divBoxesEl.insertAdjacentHTML("beforeend", divEl);
	}
}
