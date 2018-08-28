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
			questionText: 'What is the largest mammal on the Earth?',
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
		}
	]
}

var chosenTopicQuestions = testQuestions.questions.slice();

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
    qBoard.qBoardText.color = "#333333";
    qBoard.qBoardText.font = "18px 'Heebo'";
    qBoard.qBoardText.text = chosenTopicQuestions[0].questionText;

	chosenTopicQuestions[0].options.forEach(function(option, index) {
        var questionOption = new lib.optionStone();
        var optionWidth = questionOption.nominalBounds.width;

        if(option.text) {
            questionOption.stoneText.color = "#333333";
            questionOption.stoneText.font = "15px 'Heebo'";
            questionOption.stoneText.text = option.text;
            //questionOption.imageBounds.alpha = 0;		
        } else {
            var optionImage = new lib[option.image+'MC']();
            var scaleValue = 0;
            scaleValue = resizeImage(questionOption.imageBounds, optionImage);
            optionImage.scaleX = scaleValue;
            optionImage.scaleY = scaleValue;
            questionOption.imageBounds.addChild(optionImage);

            //questionOption.imageBounds.addEventListener("mouseover", showBigImage, false);
        }
        
        questionOption.x = 20+(optionWidth * index);
        questionOption.y = 450;
        questionOption.isCorrect = option.isCorrect;
        
        optionsArray.push(questionOption);

        // addListenersToOptions(questionOption);

        stage.addChild(questionOption);
    })
}