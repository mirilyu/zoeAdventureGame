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


// from https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded
function readURL(input, imgId, btnId) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $(imgId).closest(".imgPreviewWrapper").show();
            $(imgId).attr('src', e.target.result);
            $(btnId).hide();
        }

        reader.readAsDataURL(input.files[0]);
    }
}

// option 1
var option1ImgUploadIcon = $("#option1ImgUploadIcon");
var option1ImgUpload = $("#option1ImgUpload");
var option1ImgDeleteBtn = $("#option1ImgDeleteBtn");
var option1Img = $("#option1Img");

option1ImgUploadIcon.on("click", function (e) {
    e.preventDefault();
    option1ImgUpload.click();
});

option1ImgUpload.change(function () {
    readURL(this, "#option1Img", "#option1ImgUploadIcon");
});

option1ImgDeleteBtn.on("click", function () {
    option1Img.value = "";
    option1ImgUploadIcon.show();
    option1Img.closest(".imgPreviewWrapper").hide();
})

// option 2
var option2ImgUploadIcon = $("#option2ImgUploadIcon");
var option2ImgUpload = $("#option2ImgUpload");
var option2ImgDeleteBtn = $("#option2ImgDeleteBtn");
var option2Img = $("#option2Img");

option2ImgUploadIcon.on("click", function (e) {
    e.preventDefault();
    option2ImgUpload.click();
});

option2ImgUpload.change(function () {
    readURL(this, "#option2Img", "#option2ImgUploadIcon");
});

option2ImgDeleteBtn.on("click", function () {
    option2Img.value = "";
    option2ImgUploadIcon.show();
    option2Img.closest(".imgPreviewWrapper").hide();
})

// option 3
var option3ImgUploadIcon = $("#option3ImgUploadIcon");
var option3ImgUpload = $("#option3ImgUpload");
var option3ImgDeleteBtn = $("#option3ImgDeleteBtn");
var option3Img = $("#option3Img");

option3ImgUploadIcon.on("click", function (e) {
    e.preventDefault();
    option3ImgUpload.click();
});

option3ImgUpload.change(function () {
    readURL(this, "#option3Img", "#option3ImgUploadIcon");
});

option3ImgDeleteBtn.on("click", function () {
    option3Img.value = "";
    option3ImgUploadIcon.show();
    option3Img.closest(".imgPreviewWrapper").hide();
})

// option 4
var option4ImgUploadIcon = $("#option4ImgUploadIcon");
var option4ImgUpload = $("#option4ImgUpload");
var option4ImgDeleteBtn = $("#option4ImgDeleteBtn");
var option4Img = $("#option4Img");

option4ImgUploadIcon.on("click", function (e) {
    e.preventDefault();
    option4ImgUpload.click();
});

option4ImgUpload.change(function () {
    readURL(this, "#option4Img", "#option4ImgUploadIcon");
});

option4ImgDeleteBtn.on("click", function () {
    option4Img.value = "";
    option4ImgUploadIcon.show();
    option4Img.closest(".imgPreviewWrapper").hide();
})

// qImg
var qImgUploadIcon = $("#qImgUploadIcon");
var qImageFileUpload = $("#qImageFileUpload");
var qImgDeleteBtn = $("#qImgDeleteBtn");
var qImage = $("#qImage");

qImgUploadIcon.on("click", function (e) {
    e.preventDefault();
    qImageFileUpload.click();
});

qImageFileUpload.change(function () {
    readURL(this, "#qImage", "#qImgUploadIcon");
});

qImgDeleteBtn.on("click", function () {
    qImage.value = "";
    qImgUploadIcon.show();
    qImage.closest(".imgPreviewWrapper").hide();
})

// checking if there is an option img onload
if (option1Img.attr('src').length > 0) {
    option1Img.closest(".imgPreviewWrapper").show();
    option1ImgUploadIcon.hide();
}

if (option2Img.attr('src').length > 0) {
    option2Img.closest(".imgPreviewWrapper").show();
    option2ImgUploadIcon.hide();
}

if (option3Img.attr('src').length > 0) {
    option3Img.closest(".imgPreviewWrapper").show();
    option3ImgUploadIcon.hide();
}

if (option4Img.attr('src').length > 0) {
    option4Img.closest(".imgPreviewWrapper").show();
    option4ImgUploadIcon.hide();
}