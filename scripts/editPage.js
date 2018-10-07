var qText = document.getElementById("qText");
var qTextImg = document.getElementById("qImageFileUpload");

var option1 = document.getElementById("option1Text");
var option1Img = document.getElementById("option1ImgUpload");

var option2 = document.getElementById("option2Text");
var option2Img = document.getElementById("option2ImgUpload");

var option3 = document.getElementById("option3Text");
var option3Img = document.getElementById("option3ImgUpload");

var option4 = document.getElementById("option4Text");
var option4Img = document.getElementById("option4ImgUpload");

var saveQBtn = document.getElementById("saveQBtn");

var arr = [qText, option1, option2, option3, option4];

function validateQData() {
    if ((qText.value.length >= 2 || qTextImg.value.length > 0) && (option1.value.length > 0 || option1Img.value.length > 0)) {
        saveQBtn.disabled = false;
    } else {
        saveQBtn.disabled = true;
    }
}

arr.forEach(function (e) {
    e.addEventListener("keyup", function (e) {
        validateQData();

        if (option3.value.length > 0 || option3Img.value.length > 0) { option4.disabled = false; } else { option4.disabled = true; }
        if (option2.value.length > 0 || option2Img.value.length > 0) { option3.disabled = false; } else { option3.disabled = true; option4.disabled = true; }
        if (option1.value.length > 0 || option1Img.value.length > 0) { option2.disabled = false; } else { option2.disabled = true; option3.disabled = true; option4.disabled = true; }
    });
})

fileUploadsArr = [qTextImg, option1Img, option2Img, option3Img, option4Img];

fileUploadsArr.forEach(function (e) {
    e.addEventListener("change", function (e) {
        validateQData();

        if (option3.value.length > 0 || option3Img.value.length > 0) { option4.disabled = false; } else { option4.disabled = true; }
        if (option2.value.length > 0 || option2Img.value.length > 0) { option3.disabled = false; } else { option3.disabled = true; option4.disabled = true; }
        if (option1.value.length > 0 || option1Img.value.length > 0) { option2.disabled = false; } else { option2.disabled = true; option3.disabled = true; option4.disabled = true; }
    });
})

if (option1.value.length == 0 && option1Img.value.length == 0) option2.disabled = true;
if (option2.value.length == 0 && option2Img.value.length == 0) option3.disabled = true;
if (option3.value.length == 0 && option3Img.value.length == 0) option4.disabled = true;

var qImageFileDeleteBtn = document.getElementById("qImageFileDeleteBtn");
qImageFileDeleteBtn.addEventListener("click", function () {
    document.getElementById("qImageFileUpload").value = "";
});

var option1FileDeleteBtn = document.getElementById("option1FileDeleteBtn");
option1FileDeleteBtn.addEventListener("click", function () {
    option1Img.value = "";
});

var option2FileDeleteBtn = document.getElementById("option2FileDeleteBtn");
option2FileDeleteBtn.addEventListener("click", function () {
    option2Img.value = "";
});

var option3FileDeleteBtn = document.getElementById("option3FileDeleteBtn");
option3FileDeleteBtn.addEventListener("click", function () {
    option3Img.value = "";
});

var option4FileDeleteBtn = document.getElementById("option4FileDeleteBtn");
option4FileDeleteBtn.addEventListener("click", function () {
    option4Img.value = "";
});