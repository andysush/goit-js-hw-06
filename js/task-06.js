const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", (event) => {
	if (event.currentTarget.value.length == inputEl.getAttribute("data-length")) {
		inputEl.classList.add("valid");
	} else {
		inputEl.classList.add("invalid");
	}
	return;
});
inputEl.addEventListener("focus", () => {
	inputEl.classList.remove("valid", "invalid");
});
