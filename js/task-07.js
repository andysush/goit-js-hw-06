const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

const handleSizeControl = inputEl.addEventListener("input", (event) => {
	spanEl.style.fontSize = `${event.currentTarget.value}px`;
});
