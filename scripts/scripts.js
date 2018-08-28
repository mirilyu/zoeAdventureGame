var playBtn,
    head,
    openingBg,
    introTexts,
    textInput,
    bush,
    clock,
    closeBtn,
    correctOption,
    optionStone,
    qBoard,
    statueCounter,
    wrongOption,
    openingSceneElements,
    navigation;

function declareLibraryElements() {
    head = new lib.head();
    openingBg = new lib.openingBg();
    introTexts = new lib.introTexts();
    textInput = $("#gameCodeInput");
    bush = new lib.bush();
    clock = new lib.clock();
    closeBtn = new lib.closeBtn();
    correctOption = new lib.correctOption();
    optionStone = new lib.optionStone();
    qBoard = new lib.qBoard();
    statueCounter = new lib.statueCounter();
    wrongOption = new lib.wrongOption();
    navigation = new lib.navigation();
    
    openingSceneElements = [ stage.children[0].instance, stage.children[0].instance_1, stage.children[0].instance_2, stage.children[0].instance_3, stage.children[0].instance_4, stage.children[0].instance_5 ];
}

function cleanStage() {
    stage.removeAllChildren();
    navigation.x = 0;
    navigation.y = 0;
    stage.addChild(navigation);
}

setTimeout(function() {
    declareLibraryElements();
    playBtn = stage.children[0].instance_1;
    playBtn.alpha = 0.5;
    playBtn.on('click', function() {
        console.log($(this));
        if(playBtn.enabled) {
            cleanStage();
        } else {
            console.log("do nothing")
        }
    })
}, 500)

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