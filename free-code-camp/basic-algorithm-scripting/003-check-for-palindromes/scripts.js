$(document).ready(function(){

	var inputTextField, textEntered, outputContainer, errorContainer, resetButton, errorDisplayed, resultDisplayed, resultError, result;

	inputTextField = $("#textField");
	outputContainer = $("#outputContainer");
	errorContainer = $("#errorContainer");
	resetButton = $("#resetButton");
	result = $("#result");
	resultError = $("#resultError");


	// check to see if string is a palindrome
	function palindrome(str) {

		var p1, p2;

		// declare variable p1 and remove all non-alphanumeric characters (punctuation, spaces and symbols)
		p1 = str.replace(/[^A-Za-z0-9]/g, '');

		// turn everything in string to lowercase
		p1 = p1.toLowerCase();

		// split each character of the string into an array of substrings
		// then reverse the array
		// then join all array elements (characters) back into a single string
		p2 = p1.split("").reverse().join("");

		if ( p1 == p2 )
		{
			return true;
		}else{
			return false;
		}

	}




	$("#myForm").submit(function( event ){

		// get value entered in input text field and remove whitspace from beginning and end of string
		textEntered = jQuery.trim($(inputTextField).val());

		// if no value or white space or a number entered, then show error
		if ((textEntered.length == 0) || (Math.floor(textEntered) == textEntered && $.isNumeric(textEntered))) {
			// if result was shown, turn it off
			if (resultDisplayed) {
				outputContainer.addClass("d-none");
				resultDisplayed = 0;
			}
			// show error message
			errorContainer.removeClass("d-none");
			resultError.html("<strong>Error:</strong> Please enter a word or sentence into the field below.");
			errorDisplayed = 1;
		} else {
			// if error message was shown, turn it off
			if (errorDisplayed) {
				errorDisplayed = 0;
				errorContainer.addClass("d-none");
			}
			// reverse string entered
			textEntered = palindrome(textEntered);
			// display result
			outputContainer.removeClass("d-none");

			// use ternary operator to display correct meesage
			result.html("<strong>Result:</strong> " + (textEntered ? 'Text entered is a palindrome.' : 'Text entered is NOT a palindrome.'));
			// show reset button
			resetButton.removeClass("d-none");
			resultDisplayed = 1;
		}

		event.preventDefault();

	});

});