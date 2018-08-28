var playBtn;

setTimeout(function() {
    playBtn = stage.children[0].instance_1;
    playBtn.alpha = 0.5;
    playBtn.on('click', function() {
        console.log($(this));
        if(playBtn.enabled) {
            console.log("go to qBoard")
        } else {
            console.log("do nothing")
        }
    })
}, 500)

$(document).ready(function(){
    $(document).on("keyup", "#gameCodeInput", function(e) {
        if($(this).val().length > 2) {
            playBtn.enabled = true;
            console.log(playBtn);
            playBtn.alpha = 1;
        } else {
            playBtn.enabled = false;
        }
    })
})