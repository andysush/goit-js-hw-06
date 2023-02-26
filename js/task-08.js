const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onformSubmit);

function onformSubmit(event) {
	event.preventDefault();

	const formElements = event.currentTarget.elements;
	const mail = formElements.email.value;
	const password = formElements.password.value;

	if (mail === "" || password === "") {
		return alert("Всі поля форми мають бути заповнені!!!");
	} else {
		const dataArray = {
			mail,
			password,
		};
		console.log(dataArray);
		event.currentTarget.reset();
	}
}
