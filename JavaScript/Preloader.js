//--------------- Hàm Preloader dành cho index và giới thiệu -------------//


//Lấy phần tử chứa id preloader và loading-text
const myPreloader = document.querySelector(".preloader");
const percentText = document.querySelector(".loading-text");

//Hiệu ứng kết thúc preLoader
function fadeOut() {
    myPreloader.style.transition = "opacity 1s ease";
    myPreloader.style.opacity = 0;

    // Tắt Preloader khi hiệu ứng fadeOut kết thúc
    myPreloader.addEventListener("transitionend", function () {
        myPreloader.style.display = "none";
    });
}

let phanTramLoad = 0;
let thoiGianLoad = performance.now(); //Lấy thời gian load ban đầu của website
let thoiGianToiThieu = 1500;
let tocDoLoad = 300;

//Hàm cập nhật % loading
function updateLoading() {
    let currentTime = performance.now(); //Lấy thời gian load hiện tại.
    let thoiGianDuTinh = currentTime - thoiGianLoad;

    // Tăng % load mỗi thời gian trôi qua
    let tinhDoChinhXac = Math.floor((thoiGianDuTinh / thoiGianToiThieu) * 100);
    phanTramLoad = Math.min(100, tinhDoChinhXac);
    percentText.textContent = `${phanTramLoad}%`;

    //Tiếp tục load hoặc huỷ load sau khi chạm 100%
    if (phanTramLoad < 100) {
        window.requestAnimationFrame(updateLoading);
    } else {
        percentText.textContent = "Done";
        setTimeout(function () {
            fadeOut();
        }, 1000);
    }
}

//Trường hợp đặc biệt: Thời gian tải website nhanh hơn mốc dự kiến.
window.addEventListener("load", function () {
    let thoiGianConLai = performance.now() - thoiGianLoad;
    if (thoiGianConLai < tocDoLoad) {
        myPreloader.style.display = "none";
    } else {
        //Trong trường hợp thời gian còn lại nhiều hơn tốc độ thời gian load
        let thoiGianCho = thoiGianToiThieu - thoiGianConLai;
        if (thoiGianCho > 0) {
            setTimeout(function () {
                fadeOut();
            }, thoiGianCho);
        } else {
            fadeOut();
        }
    }
});


//Bắt đầu chạy Preloader mỗi lần tải lại trang
window.requestAnimationFrame(updateLoading);


