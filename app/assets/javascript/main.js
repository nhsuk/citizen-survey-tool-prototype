// All radio inputs inside a conditional form group
const radioInputs = document.querySelectorAll('.nhsuk-radios--conditional .nhsuk-radios__input');
// All conditional content inside a conditional form group
const conditionalInputs = document.querySelectorAll('.nhsuk-radios--conditional .nhsuk-radios__conditional');

// Hide all conditional content
const hideAllConditional = () => {
	conditionalInputs.forEach(input => input.classList.add('nhsuk-radios__conditional--hidden'));
}

// Add event listener to every radio button
radioInputs.forEach((radioButton) => {
	radioButton.addEventListener('change', (e) => {
		// Hide all conditional content on all input clicks
		hideAllConditional();
		// If the input has conditional content it had a data-aria-controls attribute
		const conditionalId = radioButton.getAttribute('data-aria-controls');
		if (conditionalId) {
			// Get the conditional element from the input data-aria-controls attribute
			const conditionalElement = document.getElementById(conditionalId);
			// Decide if we want to add or remove hidden class based on the inputs checked state
			const classlistFunc = e.target.checked ? 'remove' : 'add';
			// Call classList using the function selected above
			conditionalElement.classList[classlistFunc]('nhsuk-radios__conditional--hidden');
		}
	});
});