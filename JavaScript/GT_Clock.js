//---------------- Hàm cập nhật ngày, giờ và thời gian ---------------------//

//Lấy setInterval vì muốn nó cập nhật thời gian mỗi 500ms.
setInterval(function () {
    // Lấy thời gian của hệ thống.
    let now = new Date();

    // Lấy các thành phần ngày, giờ, phút, giây
    let day = now.getDate();
    let month = now.getMonth() + 1; //Thời gian lấy của hệ thống là tháng 0;
    let year = now.getFullYear();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Kiểm tra và thêm số 0 cho đẹp chỉ số
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }

    //Cập nhật biến thời gian
    let thoiGian = "Lịch: " + day + "/" + month + "/" + year;
    thoiGian += ", Thời gian: " + hours + ":" + minutes + ":" + seconds;

    //Cập nhật tag phần tử hiện tại có id là Timer
    document.getElementById("Timer").innerHTML = thoiGian;
}, 500);
