$(document).ready(function(){

	var inputTextField, textEntered, outputContainer, errorContainer, resetButton, errorDisplayed, resultDisplayed, resultError, result,
	longestWord, longestWordLength;

	inputTextField = $("#textField");
	outputContainer = $("#outputContainer");
	errorContainer = $("#errorContainer");
	resetButton = $("#resetButton");
	result = $("#result");
	resultError = $("#resultError");


	// check to see if string is a palindrome
	function findLongestWord(str) {

	  // remove the period at the end of the sentence and create an array of strings from words in the sentence
	  var myArray = str.replace(/\.$/, "").split(' ');
	  // will be used to hold length of longest word
	  var greatestLength = 0;

	  var longestWord, longestWordLength;

	  // loop through array
	  for (var i = 0; i < myArray.length; i++){
	  	// if length of array value is greater than greatestLength, then store that length in greatestLength variable
	  	if (myArray[i].length > greatestLength) {
	  		longestWord = myArray[i];
	  		greatestLength = myArray[i].length;
	  	}
	  }

	  // return an object
	  return{
	  	longestWord: longestWord,
	  	longestWordLength: greatestLength
	  };
	};




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
			resultError.html("<strong>Error:</strong> Please enter a sentence into the field below.");
			errorDisplayed = 1;
		} else {
			// if error message was shown, turn it off
			if (errorDisplayed) {
				errorDisplayed = 0;
				errorContainer.addClass("d-none");
			}
			// reverse string entered
			textEntered = findLongestWord(textEntered);
			longestWord = textEntered.longestWord;
			longestWordLength = textEntered.longestWordLength;
			// display result
			outputContainer.removeClass("d-none");

			// use ternary operator to display correct meesage
			result.html("<strong>Result:</strong> The longest word is \"" + longestWord + "\"" + " with a length of " + longestWordLength + ".");
			// show reset button
			resetButton.removeClass("d-none");
			resultDisplayed = 1;
		}

		event.preventDefault();

	});

});