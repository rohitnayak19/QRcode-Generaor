const mainInput = document.querySelector(".mainInput");
const mainButton = document.querySelector(".btn");
const QRimage = document.querySelector(".qrimage");
const QRcodeURL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

mainButton.addEventListener("click", () => {
    if (mainInput.value === "") { 
        console.log('type something');
    } else {
        QRimage.src = QRcodeURL + mainInput.value;
    }
});
