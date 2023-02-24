const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (event) => {
	console.log(event.currentTarget.value);
	outputEl.textContent = event.currentTarget.value;
	if (inputEl.value === "") {
		outputEl.textContent = "Anonymous";
	}
});
