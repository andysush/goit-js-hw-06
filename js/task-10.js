function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const inputEl = document.querySelector("#controls");
const inputValue = inputEl.firstElementChild;
const btnCreateEl = document.querySelector("[data-create]");
const btnDestroyEl = document.querySelector("[data-destroy]");
const divBoxesEl = document.querySelector("#boxes");

btnCreateEl.addEventListener("click", createBoxes);
btnDestroyEl.addEventListener("click", () => {
	divBoxesEl.innerHTML = "";
});
btnDestroyEl.addEventListener("click", () => {
	inputValue.value = "";
});

function createBoxes() {
	const maxLengthValue = inputValue.value;
	const firstDivSize = 30;
	for (let i = 0; i < maxLengthValue; i += 1) {
		let divSize = firstDivSize + 10 * i;
		const divEl = `<div style=" width: ${divSize}px; height: ${divSize}px; background-color: ${getRandomHexColor()}"></div>`;
		divBoxesEl.insertAdjacentHTML("beforeend", divEl);
	}
}
