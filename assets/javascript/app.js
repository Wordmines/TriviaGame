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
			possibles: ['Intelligentsia', 'Blue Bottle', 'starbucks', 'Caribou', 'none of the above'],
			id: 'question-twelve',
			answer: 4
		}
		]}

	
// need to click a button to start the game and the timer- onclick event
    $(".startGame").on("click", function (){
// when the start button clicked, the div with the questions that was hidden is shown
		$('.wrapper').show();
		console.log('hello');

		$(this).hide();
});
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

function formTemplate(data) {
	var qString = "<form id='questionOne'>"+ data.question +"<br>";
	var possibles = data.possibles;
	for (var i = 0; i < possibles.length; i++) {
		var possible = possibles[i];
		console.log(possible);
		qString = qString + "<input type='radio' name='"+data.id+"' value='A'/>"+possible;
	
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
		// resultsHTML = resultsHTML + resultsTemplate(game.questions[i]);
		if (isCorrect(game.questions[i])) {
			correct++;
		} else {
			incorrect++;
			if (checkAnswered(question)) {
				incorrect++;
			} else {
				unAnswered++;
			}
		}

	}
	$('.results').html('correct: '+correct+ "<br>" +'incorrect: '+incorrect+ "<br>" +'unanswered: '+unAnswered);
}

function checkAnswered(question){
	for (var i=0; i<game.questions.length; i++) {
		if (checkAnswers<isCorrect;
		unAnswered++;
	}
	// query for all inputs for this question
	// if any are checked, return true
	// if none are checked return false
}

checkAnswers();
// select the done button 
$('#doneButton').on("click", checkAnswers);
// and click callback on the done button

// simpleTimerSolution






});