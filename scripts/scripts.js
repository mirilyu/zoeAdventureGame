function cleanStage() {
    stage.removeAllChildren();
    navigation.x = 0;
    navigation.y = 0;
    placeLibEl(0, 0, qBg);
    qBg.alpha = 0.5;
    stage.addChild(navigation);
    stage.removeChild(gameNotFound);
}

function placeLibEl(x, y, el) {
    el.x = x;
    el.y = y;
    stage.addChild(el);
}

function addGameScene() {
    placeLibEl(1200, 100, clock);
    clock.clockText.font = "50px 'Heebo'";
    clock.clockText.color = "#333";
    
    placeLibEl(1200, 600, statueCounter);
    placeLibEl(1000, 290, zoe);
    placeLibEl(900, 270, statueAnimation);
}

function configureQuestions(data) {
    return data.game.questions.question;
}

function getJSON() {
    gameCodeUser = parseInt(document.getElementById("gameCodeInput").value);

    $.post("/Handler.ashx", {
        gameCode: gameCodeUser
    })
    .done(function (response) {
        if (response == "game not found") {
            placeLibEl(565, 420, gameNotFound);
        } else {
            cleanStage();
            addGameScene();

            gameObj = JSON.parse(response);

            gameObj.game.questions.question.forEach(function (element) {
                shuffle(element.answers.answer);
            })

            chosenTopicQuestions = configureQuestions(gameObj);
            numberOfQuestions = chosenTopicQuestions.length;
            questionTime = gameObj.game["@timePerQuestion"];
            navigation.children[5].text = decodeString(gameObj.game.subject);
            statueCounter.statueText.text = statuesNumber + "/" + numberOfQuestions;
            statueCounter.statueText.font = "20px 'Heebo'";
            printQuestion();
        }
    })
    .fail(function (error) {
        console.log(error)
    })
}

$(document).ready(function(){
    $(document).on("keyup", "#gameCodeInput", function(e) {
        if($(this).val().length > 2) {
            playBtn.enabled = true;
            playBtn.alpha = 1;
        } else {
            playBtn.enabled = false;
        }
    })
})