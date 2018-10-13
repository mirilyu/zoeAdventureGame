var chosenTopicQuestions;
var numberOfQuestions;
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

function decodeString(string) {
    return decodeURIComponent(string.replace(new RegExp("\\+", "g"), ' '));
}

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
    qBoard.qBoardText.text = decodeString(chosenTopicQuestions[0].questionText);

    chosenTopicQuestions[0].answers.answer.forEach(function (option, index) {
        var questionOption = new lib.optionStone();
        var optionWidth = questionOption.nominalBounds.width;

        questionOption.stoneText.color = "#333333";
        questionOption.stoneText.font = "16px 'Heebo'";
        questionOption.stoneText.text = decodeURIComponent(option["#text"]);
		questionOption.optionCorrect.alpha = 0;
		questionOption.optionWrong.alpha = 0;
        
        questionOption.x = 20+(optionWidth * index);
        questionOption.y = 450;
        questionOption.isCorrect = option["@isCorrect"];
        
        optionsArray.push(questionOption);

        questionOption.addEventListener("click", function() {
			stopTimer();
			chosenTopicQuestions[0]["@numberOfTries"]++;
			
			var isCorrect = questionOption.isCorrect;
			if(isCorrect === "True") {
				correctAnswer(questionOption);
			} else {
				wrongAnswer(questionOption);
			}
		});

        stage.addChild(questionOption);
    })
}

function correctAnswer(questionOption) {
    var currentQuestionNumberOfTries = chosenTopicQuestions[0]["@numberOfTries"];
    if (!questionTries[chosenTopicQuestions[0]["@numberOfTries"]]) {
        questionTries[chosenTopicQuestions[0]["@numberOfTries"]] = 1;
	} else {
        questionTries[chosenTopicQuestions[0]["@numberOfTries"]]++;
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