//------------------------- Hàm xử lý đăng nhập -----------------------------//

// Khi bấm vào tab "Đăng nhập"
let loginClick = document.getElementById("loginTab");
loginClick.addEventListener("click", function() {
    setActiveTab("login");
});

// Đặt tab "Đăng nhập" là mặc định khi mở popup
setActiveTab("login");

// Khi bấm vào tab "Đăng ký"
let registerClick = document.getElementById("registerTab");
registerClick.addEventListener("click", function() {
    setActiveTab("register");
});

// Hàm thiết lập kích hoạt tab hoạt động
function setActiveTab(tab) {
    let loginTab = document.getElementById("loginTab");
    let registerTab = document.getElementById("registerTab");
    let loginContent = document.getElementById("loginInfo");
    let registerContent = document.getElementById("registerInfo");

    if (tab === "login") {
        loginTab.style.color = "red";
        registerTab.style.color = "black";
        loginContent.style.display = "block";
        registerContent.style.display = "none";
    } else if (tab === "register") {
        loginTab.style.color = "black";
        registerTab.style.color = "red";
        loginContent.style.display = "none";
        registerContent.style.display = "block";
    }
}


// Khi bấm vào nút đăng nhập
let getLoginID = document.querySelector("#login");

getLoginID.addEventListener("click", function() {
    let blackGlass = document.getElementById("Black_glass");
    blackGlass.style.display = "block";
    blackGlass.classList.add("Black_glass");

    let accountPopup = document.getElementById("Account");
    accountPopup.style.display = "block";

    setTimeout(function() {
        accountPopup.classList.add("show");
    }, 10);
});

// Khi bấm vào Black_glass hoặc nút đóng trong popup
let BlackGlass = document.getElementById("Black_glass");
BlackGlass.addEventListener("click", function() {
    closeAccountPopup();
});

// Chọn tất cả các nút "Bỏ qua" và thêm sự kiện cho chúng
let getButtonEvent = document.querySelectorAll(".Button a:last-child");
getButtonEvent.forEach(function(skipButton) {
    skipButton.addEventListener("click", function() {
        closeAccountPopup();
    });
});

// Hàm đóng popup và ẩn Black_glass
function closeAccountPopup() {
    let accountPopup = document.getElementById("Account");
    let blackGlass = document.getElementById("Black_glass");
    accountPopup.classList.remove("show");
    blackGlass.classList.remove("Black_glass"); // Loại bỏ class Black_glass khi đóng popup
    setTimeout(function () {
        accountPopup.style.display = "none";
        blackGlass.style.display = "none";
    }, 500); // Chờ cho đến khi hiệu ứng kết thúc
}

