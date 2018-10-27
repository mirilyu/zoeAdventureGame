var gameObj;
var chosenTopicQuestions;
var numberOfQuestions;
var timerSeconds;
var questionBoard;
var questionImg;

// counters
var correctAnswersCounter = 0;
var questionTime;
var timeSpent = 0;
var statuesNumber = 0;

// arrays and objects
var optionsArray = [];
var optionImagesArray = [];
var cursorsArray = [];
var questionTries = {};

function shuffle(a) { // from https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function secondsToMinutes(seconds) {
    var minutes = Math.floor(seconds / 60);
    var remainder = seconds % 60;

    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (remainder < 10) {
        remainder = '0' + remainder;
    }

    return minutes + ':' + remainder;
}

function decodeString(string) {
    return decodeURIComponent(string.replace(new RegExp("\\+", "g"), ' '));
}

function resizeImage(box, content) {
    var boxBounds = box.nominalBounds;
    var contentBounds = content.getBounds();

    var toScale = 0;
    if (boxBounds.height / contentBounds.height < boxBounds.width / contentBounds.width) {
        toScale = (boxBounds.height - 120) / contentBounds.height;
    } else {
        toScale = (boxBounds.width-60) / contentBounds.width;
    }
    return toScale;
}

function resizeImageFixed(box, img) {
    var imgDimensions = img.getBounds();

    var toScale;

    if (box.height / imgDimensions.height < box.width / imgDimensions.width) {
        toScale = box.height / imgDimensions.height;
    } else {
        toScale = (box.width - 60) / imgDimensions.width;
    }
    return toScale;
}

function hideZoestatueCounterclock() {
    zoe.alpha = 0;
    statueCounter.alpha = 0;
    clock.alpha = 0;
}

function showZoestatueCounterclock() {
    zoe.alpha = 1;
    statueCounter.alpha = 1;
    clock.alpha = 1;
}

function startTimer() {
    clock.clockText.text = questionTime;
    clock.clockText.font = "40px 'Heebo'";
    timerSeconds = setInterval(myTimer, 1000);
}

function myTimer() {
    //console.log(parseInt(clock.clockText.text));
    if (parseInt(clock.clockText.text) == 0) {

        clearInterval(timerSeconds);
        timeSpent += questionTime - parseInt(clock.clockText.text);

        moveQuestionToEnd();

        // removing elements from scene
        questionImg = null;
        stage.removeChild(questionBoard);
        optionsArray.forEach(function (option) {
            stage.removeChild(option);
        });

        optionImagesArray.forEach(function (option) {
            stage.removeChild(option);
        });

        hideZoestatueCounterclock();

        // add time's up popup
        placeLibEl(0, 0, blackBG);
        blackBG.alpha = 0.5;
        placeLibEl(450, 200, timesUp);
        
    } else {
        clock.clockText.text = clock.clockText.text - 1;
    }
}

function stopTimer() {
    clearInterval(timerSeconds);
    timeSpent += questionTime - parseInt(clock.clockText.text);
}

function addQuestionBoard() {
    // if there is a question image, place the question board which has space for an image
    if (chosenTopicQuestions[0].img) {
        questionBoard = qBoardImg;
        questionImg = new createjs.Bitmap("uploads/" + chosenTopicQuestions[0].img);
        questionImg.x = 175;
        questionImg.y = 150;
        questionImg.alpha = 0;
        placeLibEl(10, 80, questionBoard);

        box = {
            height: 200,
            width: 300
        }

        setTimeout(function () {
            questionImg.set({ scaleX: resizeImageFixed(box, questionImg), scaleY: resizeImageFixed(box, questionImg) });
            questionImg.alpha = 1;
            stage.addChild(questionImg);
        }, 500);

        var bigBmp;

        questionImg.addEventListener('mouseover', function (e) {
            bigBmp = new createjs.Bitmap("uploads/" + chosenTopicQuestions[0].img);
            bigBmp.x = 820;
            bigBmp.y = 80;

            box = {
                height: 400,
                width: 550
            }

            bigBmp.set({ scaleX: resizeImageFixed(box, bigBmp), scaleY: resizeImageFixed(box, bigBmp) });
            stage.addChild(bigBmp);
        });

        questionImg.addEventListener('mouseout', function (e) {
            stage.removeChild(bigBmp);
        });

    } else {
        questionBoard = qBoard;
        placeLibEl(10, 80, questionBoard);
    }
}

function printQuestion() {
	if(chosenTopicQuestions.length == 0) {
		alert("Game is over");
		return;
	}

    // removing previous quesiton things
	if(optionsArray.length > 0) {
		optionsArray.forEach(function(option) {
			stage.removeChild(option);
		});
	}

	if (optionImagesArray.length > 0) {
	    optionImagesArray.forEach(function (optionImg) {
	        stage.removeChild(optionImg);
	    });
	}

	questionImg = null;
	stage.removeChild(questionBoard);

	stage.removeChild(continueBtn);

    // starting new question
	startTimer();
	addQuestionBoard();

	showZoestatueCounterclock();
    
	questionBoard.qBoardText.color = "#333333";
	questionBoard.qBoardText.font = "20px 'Heebo'";
	questionBoard.qBoardText.lineHeight = 32;
	questionBoard.qBoardText.text = decodeString(chosenTopicQuestions[0].questionText);

    chosenTopicQuestions[0].answers.answer.forEach(function (option, index) {
        var questionOption = new lib.optionStone();
        var optionWidth = questionOption.nominalBounds.width;

        if (option["@img"].length == 0) {
            questionOption.stoneText.color = "#333333";
            questionOption.stoneText.font = "16px 'Heebo'";
            questionOption.stoneText.lineHeight = 20;
            questionOption.stoneText.text = decodeString(option["#text"]);
        } else {
            var img = new Image();
            img.src = "uploads/" + option["@img"];

            var bigBmp;

            var bmp = new createjs.Bitmap(img);
            bmp.x = 20 + 30 + (optionWidth * index); bmp.y = 560;
            bmp.alpha = 0;
            bmp.isCorrect = option["@isCorrect"];

            bmp.addEventListener("click", function () {
                stopTimer();
                chosenTopicQuestions[0]["@numberOfTries"]++;

                var isCorrect = bmp.isCorrect;
                if (isCorrect === "True") {
                    correctAnswer(questionOption);
                } else {
                    wrongAnswer(questionOption);
                }
            })

            bmp.addEventListener('mouseover', function (e) {
                bigBmp = new createjs.Bitmap(img);
                bigBmp.x = 820;
                bigBmp.y = 80;

                box = {
                    height: 400,
                    width: 550
                }

                bigBmp.set({ scaleX: resizeImageFixed(box, bigBmp), scaleY: resizeImageFixed(box, bigBmp) });
                stage.addChild(bigBmp);
            });

            bmp.addEventListener('mouseout', function (e) {
                stage.removeChild(bigBmp);
            });

            setTimeout(function () {
                bmp.set({ scaleX: resizeImage(questionOption, bmp), scaleY: resizeImage(questionOption, bmp) });
                bmp.alpha = 1;
            }, 1000);
        }

		questionOption.optionCorrect.alpha = 0;
		questionOption.optionWrong.alpha = 0;
        
        questionOption.x = 20+(optionWidth * index);
        questionOption.y = 480;
        questionOption.isCorrect = option["@isCorrect"];
        
        optionsArray.push(questionOption);
        optionImagesArray.push(bmp);

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
        stage.addChild(bmp);
    })
}

function correctAnswer(questionOption) {
    zoe.gotoAndPlay(21);
    statueAnimation.gotoAndPlay(0);
    statuesNumber++;
    statueCounter.statueText.text = statuesNumber + "/" + numberOfQuestions;

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

		cleanStage();
		placeLibEl(0, 80, resultScene);
		resultScene.gameSubjectText.text = decodeString(gameObj.game.subject);
		resultScene.finalScore.text = Math.round(finalScore);
		resultScene.finalTime.text = secondsToMinutes(timeSpent);
	}
}

function wrongAnswer(questionOption) {
    zoe.gotoAndPlay(9);
	questionOption.optionWrong.alpha = 1;
	stage.addChild(continueBtn);
	moveQuestionToEnd();
}

function moveQuestionToEnd() {
	chosenTopicQuestions.splice(chosenTopicQuestions.length, 0, chosenTopicQuestions[0]);
	chosenTopicQuestions.splice(0,1);
}