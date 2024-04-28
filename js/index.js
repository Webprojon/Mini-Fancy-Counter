"use strict";

//Selectors
const counterEl = document.querySelector(".counter");
const counterTitleEl = document.querySelector(".counter__title");
const counterValueEl = document.querySelector(".counter__value");
const resetButtonEl = document.querySelector(".counter__reset-button");
const increaseButtonEl = document.querySelector(".counter__button--increase");
const decreaseButtonEl = document.querySelector(".counter__button--decrease");

// Events & Functions
resetButtonEl.addEventListener("click", () => {
	// set counter value to 0
	counterValueEl.textContent = 0;
	// reset background color
	counterEl.classList.remove("counter--limit");
	// reset counter title
	counterTitleEl.textContent = "Fancy Counter";
	// disable increase and decrease button
	increaseButtonEl.disabled = false;
	//decreaseButtonEl.disabled = false;
	// unfocus (blur) reset button
	resetButtonEl.blur();
});

decreaseButtonEl.addEventListener("click", () => {
	// get current value of counter
	const currentValue = counterValueEl.textContent;
	// convert value to number type
	const currentValueAsNumber = +currentValue;
	// decrement by 1
	let newValue = currentValueAsNumber - 1;
	// check if new value is less than 0
	if (newValue < 1) {
		newValue = 0;
	}
	// set counter element with new value
	counterValueEl.textContent = newValue;
	// update counter title
	counterTitleEl.textContent = "Fancy Counter";
	// reset background color
	counterEl.classList.remove("counter--limit");
	// enable increase and decrease button
	increaseButtonEl.disabled = false;
	// unfocus (blur)
	decreaseButtonEl.blur();
});

const incrementCounter = () => {
	// get current value of counter
	const currentValue = counterValueEl.textContent;
	// convert value to number type
	const currentValueAsNumber = +currentValue;
	// increment by 1
	let newValue = currentValueAsNumber + 1;
	// check if new value is greater than 5
	if (newValue > 5) {
		newValue = 5;
		// give visual indicator that limit has been reached
		counterEl.classList.add("counter--limit");
		// update counter title
		counterTitleEl.innerHTML = "Limit! Buy <b>Pro</b> for > 5";
		// disable increase and decrease button
		increaseButtonEl.disabled = true;
		//decreaseButtonEl.disabled = true;
	}
	// set counter element with new value
	counterValueEl.textContent = newValue;
	// unfocus (blur)
	increaseButtonEl.blur();
};

document.addEventListener("keydown", incrementCounter);
increaseButtonEl.addEventListener("click", incrementCounter);
