// Util to toggle a visibility class on conditional content for an input based on checked state
const toggleConditionalInput = (input, className) => {
	// If the input has conditional content it had a data-aria-controls attribute
	const conditionalId = input.getAttribute('data-aria-controls');
	if (conditionalId) {
		// Get the conditional element from the input data-aria-controls attribute
		const conditionalElement = document.getElementById(conditionalId);
		// Decide if we want to add or remove hidden class based on the inputs checked state
		const classlistFunc = input.checked ? 'remove' : 'add';
		// Call classList using the function selected above
		conditionalElement.classList[classlistFunc](className);
	}
}

// Module to handle conditional content for radios
const conditionalRadios = () => {
	// All radio inputs inside a conditional form group
	const radioInputs = document.querySelectorAll('.nhsuk-radios--conditional .nhsuk-radios__input');
	// All conditional content inside a conditional form group
	const conditionalInputs = document.querySelectorAll('.nhsuk-radios--conditional .nhsuk-radios__conditional');

	// Add event listener to every radio button
	radioInputs.forEach((radioButton) => {
		radioButton.addEventListener('change', (e) => {
			// Hide all conditional content on all input clicks
			conditionalInputs.forEach(input => input.classList.add('nhsuk-radios__conditional--hidden'));
			// Toggle conditional content based on checked state
			toggleConditionalInput(e.target, 'nhsuk-radios__conditional--hidden');
		});
	});
};

// Module to handle conditional content for checkboxes
const conditionalCheckboxes = () => {
	// All checkbox inputs inside a conditional form group
	const checkBoxInputs = document.querySelectorAll('.nhsuk-checkboxes--conditional .nhsuk-checkboxes__input');
	// Add event listener to every radio button
	checkBoxInputs.forEach((checkbox) => {
		checkbox.addEventListener('change', (e) => {
			toggleConditionalInput(e.target, 'nhsuk-checkboxes__conditional--hidden');
		});
	});
};

// Initialise modules when the DOM elements are all there
document.addEventListener('DOMContentLoaded', () => {
	conditionalRadios();
	conditionalCheckboxes();
});
