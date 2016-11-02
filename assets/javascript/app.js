// initialize the .js document with this:
$( document ).ready(function() {
// need to click a button to start the game and the timer- onclick event
    $(".startGame").on("click", function (){
// when the start button clicked, the div with the questions that was hidden is shown
		$('.wrapperA').show();
		console.log('hello');

		$(this).hide();
    });
//timer counts down from 120 seconds and stops game at 120 seconds and then shows wrapperB
	// $('.timer')

// this variable holds answers from radio buttons
	var questionInputs = [];
	console.log(questionInputs);

// when one of the radio buttons is clicked, store the value of that button and update either the 
// numCorrectChoice, numIncorrectChoice, or numUnanswered accordingly
	$('#questionOne input').on('change', function() {
// this action stores the answer of the checked event into the empty questionInputs array
		questionInputs.push($('input[name="q1choice"]:checked', '#questionOne').val());
        console.log($('input[name="q1choice"]:checked', '#questionOne').val());
    });
// this action stores the answer of the checked event into the empty questionInputs array
    $('#questionTwo input').on('change', function() {
        questionInputs.push($('input[name="q2choice"]:checked', '#questionTwo').val());
        console.log($('input[name="q2choice"]:checked', '#questionTwo').val());
    });
    $('#questionThree input').on('change', function() {
// this action stores the answer of the checked event into the empty questionInputs array
    	questionInputs.push($('input[name="q3choice"]:checked', '#questionThree').val());
        console.log($('input[name="q3choice"]:checked', '#questionThree').val());
    });
    $('#questionFour input').on('change', function() {
// this action stores the answer of the checked event into the empty questionInputs array
        questionInputs.push($('input[name="q4choice"]:checked', '#questionFour').val());
        console.log($('input[name="q4choice"]:checked', '#questionFour').val());
    });
    $('#questionFive input').on('change', function() {
// this action stores the answer of the checked event into the empty questionInputs array
        questionInputs.push($('input[name="q5choice"]:checked', '#questionFive').val());
        console.log($('input[name="q5choice"]:checked', '#questionFive').val());
    });
    $('#questionSix input').on('change', function() {
// this action stores the answer of the checked event into the empty questionInputs array
        questionInputs.push($('input[name="q6choice"]:checked', '#questionSix').val());
        console.log($('input[name="q6choice"]:checked', '#questionSix').val());
    });
    $('#questionSeven input').on('change', function() {
// this action stores the answer of the checked event into the empty questionInputs array
        questionInputs.push($('input[name="q7choice"]:checked', '#questionSeven').val());
        console.log($('input[name="q7choice"]:checked', '#questionSeven').val());
    }); 
    $('#questionEight input').on('change', function() {
// this action stores the answer of the checked event into the empty questionInputs array
        questionInputs.push($('input[name="q8choice"]:checked', '#questionEight').val());
        console.log($('input[name="q8choice"]:checked', '#questionEight').val());
    });
    $('#questionNine input').on('change', function() {
// this action stores the answer of the checked event into the empty questionInputs array
        questionInputs.push($('input[name="q9choice"]:checked', '#questionNine').val());
        console.log($('input[name="q9choice"]:checked', '#questionNine').val());
    });
    $('#questionTen input').on('change', function() {
// this action stores the answer of the checked event into the empty questionInputs array
        questionInputs.push($('input[name="q10choice"]:checked', '#questionTen').val());
        console.log($('input[name="q10choice"]:checked', '#questionTen').val());
    });

	// create a "done" button that defers matching the questions with their answers
        // by creating a "deferred" event
	var deferEvent = $.Deferred();
 
	// Add handlers to be called when deferEvent is resolved
	deferEvent;
	// .done() can take any number of functions or arrays of functions
  		// .done('questionInputs');

// Resolve the Deferred object when the button is clicked
	$( "button" ).on( "click", function() {
  		deferEvent.resolve(questionInputs);
  		console.log(questionInputs);
	});

// need an incrementer for both correct, incorrect and unanswered questions

// maybe an if-else statement to tabulate them based on the correct answer
// guessed

// onclick events needed to tabulate results for each answer:
    $("").on("click", function (){
    });


});