var testQuestions = {
	topic: 'test topic',
	questions: [
		{
			questionText: 'Which bear is the best bear?',
			numberOfTries: 0,
			options: [
				{
					text: 'Black bear',
					isCorrect: true
				},
				{
					text: 'Polar bear',
					isCorrect: false
				},
				{
					text: 'Grizly bear',
					isCorrect: false
				},
				{
					text: 'Brown bear',
					isCorrect: false
				}
			]
		},
		{
			questionText: 'What is the largest mammal on Earth?',
			numberOfTries: 0,
			options: [
				{
					text: 'Elephant',
					isCorrect: false
				},
				{
					text: 'Blue whale',
					isCorrect: true
				},
				{
					text: 'Giraffe',
					isCorrect: false
				},
				{
					text: 'Rhino',
					isCorrect: false
				}
			]
		},
		{
			questionText: 'What is the biggest country on Earth?',
			numberOfTries: 0,
			options: [
				{
					text: 'Australia',
					isCorrect: false
				},
				{
					text: 'Russia',
					isCorrect: true
				},
				{
					text: 'China',
					isCorrect: false
				},
				{
					text: 'Canada',
					isCorrect: false
				}
			]
		},
		{
			questionText: 'What colour is snow?',
			numberOfTries: 0,
			options: [
				{
					text: 'White',
					isCorrect: true
				},
				{
					text: 'Crimson',
					isCorrect: false
				},
				{
					text: 'Gold',
					isCorrect: false
				},
				{
					text: 'Cyan',
					isCorrect: false
				}
			]
		}
	]
}

var chosenTopicQuestions = testQuestions.questions.slice();
var numberOfQuestions = chosenTopicQuestions.length;

var timerSeconds;

// counters
var correctAnswersCounter = 0;
var questionTime = 9;
var timeSpent = 0;
var goldQuantity = 10;

// arrays and objects
var optionsArray = [];
var cursorsArray = [];
var questionTries = {};

function startTimer() {
	clock.clockText.text = questionTime;

	timerSeconds = setInterval(function() {
		var remainingTime = clock.clockText.text - 1;
		if(remainingTime == 0) {
			stopTimer();
			moveQuestionToEnd();
			stage.addChild(continueBtn);
		}
		clock.clockText.text = remainingTime;
	}, 1000);
}

function stopTimer() {
    clearInterval(timerSeconds);
    timeSpent += questionTime - parseInt(clock.clockText.text);
}

function printQuestion() {
	if(chosenTopicQuestions.length == 0) {
		alert("Game is over");
		return;
	}

	if(optionsArray.length > 0) {
		optionsArray.forEach(function(option) {
			stage.removeChild(option);
		});
	}

	startTimer();

	stage.removeChild(continueBtn);

    qBoard.qBoardText.color = "#333333";
    qBoard.qBoardText.font = "20px 'Heebo'";
    qBoard.qBoardText.text = chosenTopicQuestions[0].questionText;

	chosenTopicQuestions[0].options.forEach(function(option, index) {
        var questionOption = new lib.optionStone();
        var optionWidth = questionOption.nominalBounds.width;

        questionOption.stoneText.color = "#333333";
        questionOption.stoneText.font = "16px 'Heebo'";
		questionOption.stoneText.text = option.text;
		questionOption.optionCorrect.alpha = 0;
		questionOption.optionWrong.alpha = 0;
        
        questionOption.x = 20+(optionWidth * index);
        questionOption.y = 450;
        questionOption.isCorrect = option.isCorrect;
        
        optionsArray.push(questionOption);

        questionOption.addEventListener("click", function() {
			stopTimer();
			chosenTopicQuestions[0].numberOfTries++;
			
			var isCorrect = questionOption.isCorrect;
			if(isCorrect) {
				correctAnswer(questionOption);
			} else {
				wrongAnswer(questionOption);
			}
		});

        stage.addChild(questionOption);
    })
}

function correctAnswer(questionOption) {
	if(!questionTries[chosenTopicQuestions[0].numberOfTries]) {
		questionTries[chosenTopicQuestions[0].numberOfTries] = 1;
	} else {
		questionTries[chosenTopicQuestions[0].numberOfTries]++;
	}
	
	stage.addChild(continueBtn);
	chosenTopicQuestions.splice(0,1);
	questionOption.optionCorrect.alpha = 1;

	if(chosenTopicQuestions.length > 0) {
		//alert("Game is over");
	} else {
		var finalScore = 0;
		for (var property1 in questionTries) {
			finalScore += parseInt(questionTries[property1])*(100 / (numberOfQuestions * parseInt(property1)));
		}

		alert("Your final score is: " + finalScore);
	}
}

function wrongAnswer(questionOption) {
	questionOption.optionWrong.alpha = 1;
	stage.addChild(continueBtn);
	moveQuestionToEnd();
}

function moveQuestionToEnd() {
	chosenTopicQuestions.splice(chosenTopicQuestions.length, 0, chosenTopicQuestions[0]);
	chosenTopicQuestions.splice(0,1);
}