$(document).ready(function(){

	var inputTextField, textEntered, outputContainer, errorContainer, resetButton, errorDisplayed, resultDisplayed, resultError, result;

	inputTextField = $("#textField");
	outputContainer = $("#outputContainer");
	errorContainer = $("#errorContainer");
	resetButton = $("#resetButton");
	result = $("#result");
	resultError = $("#resultError");


	// reverse string that is sent in from input field
	function reverseString(str) {

		var array = str.split('');
		array.reverse();
		str = array.join('');

		return str;
	}



	$("#myForm").submit(function( event ){

		// get value entered in input text field and remove whitspace from beginning and end of string
		textEntered = jQuery.trim($(inputTextField).val());

		// if no value or white space entered, then show error
		if (textEntered.length == 0) {
			// if result was shown, turn it off
			if (resultDisplayed) {
				outputContainer.addClass("d-none");
				resultDisplayed = 0;
			}
			// show error message
			errorContainer.removeClass("d-none");
			resultError.html("<strong>Error:</strong> Please enter text in the field below.");
			errorDisplayed = 1;
		} else {
			// if error message was shown, turn it off
			if (errorDisplayed) {
				errorDisplayed = 0;
				errorContainer.addClass("d-none");
			}
			// reverse string entered
			textEntered = reverseString(textEntered);
			// display result
			outputContainer.removeClass("d-none");
			result.html("<strong>Result:</strong> " + textEntered);
			// show reset button
			resetButton.removeClass("d-none");
			resultDisplayed = 1;
		}

		event.preventDefault();

	});

});