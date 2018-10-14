function cleanStage() {
    stage.removeAllChildren();
    navigation.x = 0;
    navigation.y = 0;
    stage.addChild(navigation);
}

function placeLibEl(x, y, el) {
    el.x = x;
    el.y = y;
    stage.addChild(el);
}

function addGameScene() {
    placeLibEl(0, 75, qBg);
    qBg.alpha = 0.5;

    placeLibEl(10, 80, qBoard);
    placeLibEl(1200, 100, clock);
    clock.clockText.font = "50px 'Heebo'";
    clock.clockText.color = "#333";
    
    placeLibEl(1200, 600, statueCounter);
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
            console.log("not found");
        } else {
            cleanStage();
            addGameScene();

            gameObj = JSON.parse(response);
            chosenTopicQuestions = configureQuestions(gameObj);
            numberOfQuestions = chosenTopicQuestions.length;
            questionTime = gameObj.game["@timePerQuestion"];
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