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

var qIndex = 0;

// counters
var correctAnswersCounter = 0;
var questionTime = 59;
var timeSpent = 0;
var goldQuantity = 10;

var numberOfQuestions = 0;

// arrays and objects
var optionsArray = [];
var cursorsArray = [];
var questionTries = {};

function printQuestion() {
	//debugger;

	if(optionsArray.length > 0) {
		optionsArray.forEach(function(option) {
			stage.removeChild(option);
		});
	}

	stage.removeChild(continueBtn);

    qBoard.qBoardText.color = "#333333";
    qBoard.qBoardText.font = "18px 'Heebo'";
    qBoard.qBoardText.text = chosenTopicQuestions[0].questionText;

	chosenTopicQuestions[0].options.forEach(function(option, index) {
        var questionOption = new lib.optionStone();
        var optionWidth = questionOption.nominalBounds.width;

        questionOption.stoneText.color = "#333333";
        questionOption.stoneText.font = "15px 'Heebo'";
		questionOption.stoneText.text = option.text;
		questionOption.optionCorrect.alpha = 0;
		questionOption.optionWrong.alpha = 0;
        
        questionOption.x = 20+(optionWidth * index);
        questionOption.y = 450;
        questionOption.isCorrect = option.isCorrect;
        
        optionsArray.push(questionOption);

        questionOption.addEventListener("click", function() {
			// stopTimer();
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
	
	chosenTopicQuestions.splice(0,1);
	questionOption.optionCorrect.alpha = 1;
	if(chosenTopicQuestions.length > 0) {
		stage.addChild(continueBtn);
	} else {
		var finalScore = 0;
		for (var property1 in questionTries) {
			finalScore += parseInt(questionTries[property1])*(100 / (numberOfQuestions * parseInt(property1)));
		}
	}
}

function wrongAnswer(questionOption) {
	questionOption.optionWrong.alpha = 0;
	moveQuestionToEnd();
	// showAnswerModal('wrong');
	alert('wrong');
}

function moveQuestionToEnd() {
	chosenTopicQuestions.splice(chosenTopicQuestions.length, 0, chosenTopicQuestions[0]);
	chosenTopicQuestions.splice(0,1);
}