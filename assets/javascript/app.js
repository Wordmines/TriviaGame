// initialize the .js document with this:
$( document ).ready(function() {

	var game = {
		questions: [
		{
	   		question: 'What is the capital of Vermont?',
	   		possibles: ['Battleboro', 'Montpelier', 'Barre City', 'Burlington'],
	   		id: 'question-one',
	   		answer: 1
		}, {
			question: 'What is the capital of Illinois?',
			possibles: ['Springfield', 'Chicago', 'Rockford', 'Joliet', 'Evanston'],
			id: 'question-two',
			answer: 0
		}, {
			question: 'What is the capital of California?',
			possibles: ['San Francisco', 'Los Angeles', 'Mendocino', 'San Diego', 'Sacramento'],
			id: 'question-three',
			answer: 4
		}, {
			question: 'What is the capital of Indiana?',
			possibles: ['Fort Wayne', 'Indianapolis', 'Terre Haute', 'Bloomington', 'Indianapolis'],
			id: 'question-four',
			answer: 1
		}, {
			question: 'What is the capital of Alabama?',
			possibles: ['Montgomery', 'Birmingham', 'Mobile', 'Tuscaloosa', 'Gulf Shores'],
			id: 'question-five',
			answer: 0
		}, {
			question: 'What is the capital of Colorado?',
			possibles: ['Boulder', 'Denver', 'Vale', 'Fort Collins', 'Grand Junction'],
			id: 'question-six',
			answer: 1

		}, {
			question: 'What is the capital of Delaware?',
			possibles: ['Wilmington', 'Newark', 'Dover', 'Lewes', 'Middletown'],
			id: 'question-seven',
			answer: 2
		}, {
			question: 'What is the capital of Florida?',
			possibles: ['Miami', 'Tampa', 'Jacksonville', 'Daytona Beach', 'Talahassee'],
			id: 'question-eight',
			answer: 4
		}, {
			question: 'What is the capital of Idaho?',
			possibles: ['Coeur dAlene', 'Idaho Falls', 'Boise', 'Meridian', 'Twin Falls'],
			id: 'question-nine',
			answer: 2
		}, {
			question: 'What is the capital of Michigan?',
			possibles: ['Macinack Island', 'Lansing', 'Grand Rapids', 'Ann Arbor', 'Flint'],
			id: 'question-ten',
			answer: 1
		}, {
			question: 'What is the capital of Washington State?',
			possibles: ['Seattle', 'Bellevue', 'Spokane', 'Olympia', 'Bellingham'],
			id: 'question-eleven',
			answer: 3
		}, {
			question: 'What is the best kind of coffee?',
			possibles: ['Intelligentsia', 'Blue Bottle', 'Starbucks', 'Caribou', 'none of the above'],
			id: 'question-twelve',
			answer: 4
		}
		]}

	// test
	var message = 'Game Over!';
	// var $message = $('#message');
	// test

// ORIGINAL
// need to click a button to start the game and the timer- onclick event
    $(".startGame").on("click", function (){
// when the start button clicked, the div with the questions that was hidden is shown
		$('.wrapper').show();
		console.log('hello');

		$(this).hide();
	});

    // These events start the timer. 
    var number = 30;
    $('#timeLeft').on('click', run);

	// The decrement function.
    function decrement(){
        // Decrease number by one.
        number--;
        // Show the number in the #timeLeft div.
        $('#timeLeft').html('<h2>' + number + " seconds"+'</h2>');
        // Once number hits zero...
        if (number === 0){
        // ...run the stop function.
        stop();
        // Alert the user that time is up. Update the innerHTML of the message
       // div to say 'Game Over!'
        // alert('Time Up!')
        $('#message').html('time up!');
        checkAnswers();
        }
    }
    // test
    // writes the win or lose message 
		// function writeMessage (){
		// 	// updates the contents of the message div
		// 	$message.html(message);
		// }
	// test

    function run(){
        counter = setInterval(decrement, 1000);
    }
    
    // The stop function
    function stop(){
    // Clears our "counter" interval. The interval name is passed to the clearInterval function.
        clearInterval(counter);
    }

    // Execute the run function.
    run();


function formTemplate(data) {
	var qString = "<form id='questionOne'>"+ data.question +"<br>";
	var possibles = data.possibles;
	for (var i = 0; i < possibles.length; i++) {
		var possible = possibles[i];
		console.log(possible);
		qString = qString + "<input type='radio' name='"+data.id+"' value="+ i +">"+possible;

	}
	return qString + "</form>";
}
window.formTemplate = formTemplate;

function buildQuestions(){
	var questionHTML = ''
	for (var i = 0; i<game.questions.length; i++) {
		questionHTML = questionHTML + formTemplate(game.questions[i]);
	}
	$('#questions-container').append(questionHTML);

}

function isCorrect(question){
	var answers = $('[name='+question.id+']');
	var correct = answers.eq(question.answer);
	var isChecked = correct.is(':checked');
	return isChecked;
}


buildQuestions();

function resultsTemplate(question){
	var htmlBlock = '<div>'
	htmlBlock = htmlBlock + question.question + ': ' + isChecked;
	return htmlBlock + "</div>";
}

function checkAnswers (){
	var resultsHTML = '';
	var guessedAnswers = [];
	var correct = 0;
	var incorrect = 0;
	var unAnswered =0


	for (var i = 0; i<game.questions.length; i++) {
		if (isCorrect(game.questions[i])) {
			correct++;
		} else {
			if (checkAnswered(game.questions[i])) {
				incorrect++;
			} else {
				unAnswered++;
			}
		}

	}
	$('.results').html('correct: '+correct+ "<br>" +'incorrect: '+incorrect+ "<br>" +'unanswered: '+unAnswered);
}

function checkAnswered(question){
	var anyAnswered = false;
	var answers = $('[name='+question.id+']');

	for (var i = 0; i < answers.length; i++) {
		if (answers[i].checked) {
			anyAnswered = true;
		}
	}
	return anyAnswered;

}

// create a function with an onclick event for the doneButton that both checks the Answers 
// and stops the clock when "done" is pressed
	$('#doneButton').on('click', function() {
	checkAnswers();
	stop();
	})

});