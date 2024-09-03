//-------------------- Hàm mũi tên hướng lên đầu trang -------------------//

//Ẩn hiện mũi tên kéo lên
function hideShowArrow() {
    let arrowUp = document.getElementById("Arrow_Up");
    let scrollDocTop = document.documentElement.scrollTop;

    //Kéo xuống tầm 500px màn hình sẽ hiện mũi tên
    if (scrollDocTop > 500) {
        arrowUp.style.opacity = "1";
        arrowUp.style.marginBottom = "1%";
    } else {
        arrowUp.style.marginBottom = "-10%";

        //Hiệu ứng bổ sung
        setTimeout(function () {
            arrowUp.style.opacity = "0";
        }, 500);
    }
}

//Lấy sự kiện là lướt trang để chạy hàm
window.onscroll = function () {
    hideShowArrow();
};

//Nếu người dùng click vào mũi tên kéo lên thì reset
document.getElementById("Arrow_Up").addEventListener("click", function () {
    document.documentElement.scrollTop = 0;
});

