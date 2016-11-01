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
 



// when I input these into the console individually, and then check a button, 
// I get my button value returned in the console. it won't return anything/or I don't 
// know how to get it to return anything from my .js file.
 		$('input:radio[name=q2choice]:checked').val();


// I wasn't sure if it needed to be inside an on-click event, so I tried doing this, which
// didn't work:
 	$('#questionOne').on("change", function (){
 		$('input:radio[name=q1choice]:checked').val();
 	 	});

// I've also tried this method, for which I am getting something returned as an alert,
// but I'm not sure how to store the value that is being returned. 
        $('#questionOne input').on('change', function() {
            alert($('input[name="q1choice"]:checked', '#questionOne').val());
        });





// need an incrementer for both correct, incorrect and unanswered questions

// maybe an if-else statement to tabulate them based on the correct answer
// guessed

// onclick events needed to tabulate results for each answer:
    $("").on("click", function (){
    });


});