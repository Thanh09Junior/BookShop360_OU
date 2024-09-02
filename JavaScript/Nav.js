//------------------- Hàm Header và đăng nhập cho toàn bài -------------//

//------------------------- Header ---------------------------------//

//-------- Xử lý submenu (các menu con của phần tử a) -------//
let toggleSubMenu = document.querySelectorAll(".toggle-submenu");

toggleSubMenu.forEach(function (item) {
    item.addEventListener("click", function(event) {
        event.preventDefault(); // Ngăn chặn hành động mặc định của <a>

        // Lấy submenu hiện tại
        let submenu = this.nextElementSibling;
        let icon = this.querySelector("i");

        // Kiểm tra xem submenu hiện tại có phải là submenu đang mở không
        let isCurrentlyOpen = submenu && submenu.classList.contains("show");

        // Đóng tất cả các submenu khác
        document.querySelectorAll(".submenu").forEach(function (otherSubmenu) {
            if (otherSubmenu !== submenu) {
                otherSubmenu.classList.remove("show");
            }
        });

        // Đặt lại tất cả các biểu tượng mũi tên
        document.querySelectorAll(".toggle-submenu i").forEach(function (otherIcon) {
            if (otherIcon !== icon) {
                otherIcon.classList.remove("fa-chevron-down");
                otherIcon.classList.add("fa-chevron-right");
            }
        });

        // Mở hoặc đóng submenu hiện tại
        if (submenu && submenu.classList.contains("submenu")) {
            submenu.classList.toggle("show");
            if (isCurrentlyOpen) {
                icon.classList.remove("fa-chevron-down");
                icon.classList.add("fa-chevron-right");
            } else {
                icon.classList.remove("fa-chevron-right");
                icon.classList.add("fa-chevron-down");
            }
        }
    });
});

//-------- Xử lý sự kiện click chuột ngoài phạm vi Menu -------//
document.addEventListener("click", function(event) {
    let outSideToggleMenu = event.target.closest(".toggle-submenu");
    let outsideSubMenu = event.target.closest(".submenu");
    if (!outSideToggleMenu && !outsideSubMenu) {
        // Đóng tất cả các submenu
        document.querySelectorAll(".submenu").forEach(function (submenu) {
            submenu.classList.remove("show");
        });

        // Đặt lại tất cả các biểu tượng mũi tên
        document.querySelectorAll(".toggle-submenu i").forEach(function (icon) {
            icon.classList.remove("fa-chevron-down");
            icon.classList.add("fa-chevron-right");
        });
    }
});

document.querySelectorAll(".menu_left>ul>li>a").forEach(function (link) {
    link.addEventListener("click", function(event) {
        // Check if the clicked link is already active
        if (this.classList.contains("active")) {
            this.classList.remove("active");
        } else {
            // Remove active class from all links
            document.querySelectorAll(".menu_left>ul>li>a").forEach(function (item) {
                item.classList.remove("active");
            });

            // Add active class to the clicked link
            this.classList.add("active");
        }
    });
});

//---------- Loại bỏ tình trạng kích hoạt hover của SubMenu được chọn.-------//
document.addEventListener("click", function(event) {
    if (!event.target.closest(".menu_left")) {
        document.querySelectorAll(".menu_left>ul>li>a").forEach(function (item) {
            item.classList.remove("active");
        });
    }
});

//-------------- Ẩn hiện header khi kéo xuống và hiện lên khi kéo lên. -------//
let lastScrollTop = 0;
const header = document.querySelector("header");
header.classList.add("fixed");
const scrollThreshold = 450; // Khoảng cách cuộn để thay đổi vị trí header

window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
        // Cuộn xuống
        header.style.top = "-200px";
        setTimeout(function () {
            header.classList.add("hidden");
            header.classList.remove("fixed");
        }, 300);
    } else {
        // Cuộn lên
        header.style.top = "0px";
        header.classList.remove("hidden");
        header.classList.add("fixed");
    }
    lastScrollTop = scrollTop;
});




//------------------------- Đăng nhập ---------------------------------//

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



//----------------- Hàm Block hành vi vào dev bằng nút --------------------//

  document.addEventListener('keydown', function(e) {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
        alert("Cửa sổ dev console chỉ có thể mở thủ công!");
        e.preventDefault();
    }
});
