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


// when one of the radio buttons is clicked, store the value of that button and update either the 
// numCorrectChoice, numIncorrectChoice, or numUnanswered accordingly
		$('#questionOne input').on('change', function() {
            console.log($('input[name="q1choice"]:checked', '#questionOne').val());
        });

        $('#questionTwo input').on('change', function() {
            console.log($('input[name="q2choice"]:checked', '#questionTwo').val());
        });
        $('#questionThree input').on('change', function() {
            console.log($('input[name="q3choice"]:checked', '#questionThree').val());
        });
        $('#questionFour input').on('change', function() {
        	console.log($('input[name="q4choice"]:checked', '#questionFour').val());
        });
        $('#questionFive input').on('change', function() {
        	console.log($('input[name="q5choice"]:checked', '#questionFive').val());
        });
        $('#questionSix input').on('change', function() {
        	console.log($('input[name="q6choice"]:checked', '#questionSix').val());
        });
        $('#questionSeven input').on('change', function() {
        	console.log($('input[name="q7choice"]:checked', '#questionSeven').val());
        });
        $('#questionEight input').on('change', function() {
        	console.log($('input[name="q8choice"]:checked', '#questionEight').val());
        });
        $('#questionNine input').on('change', function() {
        	console.log($('input[name="q9choice"]:checked', '#questionNine').val());
        });
        $('#questionTen input').on('change', function() {
        	console.log($('input[name="q10choice"]:checked', '#questionTen').val());
        });

// create a "done" button that defers matching the questions with their answers
        // Create a deferred object
		var defer = $.Deferred();
 
// Add handlers to be called when dfd is resolved
		defer
// .done() can take any number of functions or arrays of functions
  		.done( [ fn1, fn2 ], fn3, [ fn2, fn1 ] )
// We can chain done methods, too
  .done(function( n ) {
    $( "p" ).append( n + " we're done." );
  });
 
// Resolve the Deferred object when the button is clicked
$( "button" ).on( "click", function() {
  dfd.resolve( "and" );
});

// need an incrementer for both correct, incorrect and unanswered questions

// maybe an if-else statement to tabulate them based on the correct answer
// guessed

// onclick events needed to tabulate results for each answer:
    $("").on("click", function (){
    });


});