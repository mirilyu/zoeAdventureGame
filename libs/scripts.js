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
    placeLibEl(0, 62, qBg);
    placeLibEl(10, 80, qBoard);
    placeLibEl(1200, 100, clock);
    placeLibEl(1200, 600, statueCounter);
    printQuestion();
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