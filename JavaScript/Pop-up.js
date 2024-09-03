//---------------------- Hàm mở đóng Pop_Up Subcription --------------------//

//Hàm hiện PopUp khi click vào xác nhận
function showPopup() {
    let popUp = document.getElementById("popup");
    popUp.style.display = "block";

    //Hiệu ứng mở bổ sung
    setTimeout(function () {
        popUp.style.transform = "translate(-50%, -50%)";
    }, 10);
}

//Hàm ẩn PopUp khi click vào dấu X trong PopUp
function hidePopup() {
    let popUp = document.getElementById("popup");
    popUp.style.transform = "translate(-50%, -150%)";

     //Hiệu ứng đóng bổ sung
    setTimeout(function () {
        popUp.style.display = "none";
    }, 500);
}
