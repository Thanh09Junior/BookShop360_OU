//----------------------- Các hàm sài cho taikhoan.html ----------------------//


document.addEventListener("DOMContentLoaded", function() {
    // Lấy các phần tử tương ứng
    let accountLink = document.getElementById("account-link");
    let historyLink = document.getElementById("history-link");
    let editLink = document.querySelector(".Panel_header li:nth-child(3) a");
    let settingsLink = document.querySelector(".Panel_header li:nth-child(4) a");

    //Lấy các phần tử ul li tương ứng 4 lựa chọn trong tài khoản
    let mainInfo = document.querySelector(".Main_info");
    let buyHistory = document.querySelector(".Buy_History");
    let accountEdit = document.querySelector(".Account_Edit");
    let settings = document.querySelector(".Settings");


    // Function để ẩn tất cả các section
    function hideAllSections() {
        mainInfo.style.display = "none";
        buyHistory.style.display = "none";
        accountEdit.style.display = "none";
        settings.style.display = "none";
    }

    // Function để hiển thị section tương ứng
    function showSection(section, isMainInfo = false) {
        hideAllSections();
        if (isMainInfo) {
            section.style.display = "flex"; // Nếu là Main_info, dùng flex
        } else {
            section.style.display = "block"; // Nếu là các phần khác, dùng block
        }
    }

    // Sự kiện khi nhấn vào các liên kết sẽ hiện các section tunongw ứng
    accountLink.addEventListener("click", function(event) {
        event.preventDefault();
        showSection(mainInfo, true);
    });

    historyLink.addEventListener("click", function(event) {
        event.preventDefault();
        showSection(buyHistory);
    });

    editLink.addEventListener("click", function(event) {
        event.preventDefault();
        showSection(accountEdit);
    });

    settingsLink.addEventListener("click", function(event) {
        event.preventDefault();
        showSection(settings);
    });

    // Mặc định hiển thị lần đầu vào trang là section main info
    showSection(mainInfo, true);
});




/*--------- Lấy thông tin tài khoản đăng nhập từ data sever -------*/


// Cập nhật họ tên và ngày tạo tài khoản
function updateUserInfo() {
    let usernameElement = document.getElementById("username");
    let creationTimeElement = document.getElementById("creationTime");

    let username = localStorage.getItem("username");
    let creationTime = localStorage.getItem("creationTime");

    if (username && creationTime) {
        usernameElement.textContent = username;
        creationTimeElement.textContent = creationTime;
    } else {
        usernameElement.textContent = "Không có thông tin";
        creationTimeElement.textContent = "Không có thông tin";
    }
}


// Cập nhật lịch sử mua hàng
function updatePurchaseHistory(boughtData) {
    let boughtItemsList = document.querySelector(".Bought_items_list");
    boughtItemsList.innerHTML = ""; 

    if (boughtData.items.length === 0) {
        boughtItemsList.innerHTML = "<p>Chưa có thông tin mua hàng.</p>";
        document.getElementById("totalQuantity").textContent = "0";
    } else {
        boughtData.items.forEach(function(item) {
            let itemHtml = `
            <div class="Bought_items">
                <div>
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <p>${item.title}</p>
                <p>Số lượng: ${item.quantity}</p>
                <p>Giá tiền: ${item.price} đ</p>
                <p>Ngày mua: ${new Date().toLocaleDateString()}</p>
            </div>
            <hr>`;
            boughtItemsList.innerHTML += itemHtml;
        });
        document.getElementById("totalQuantity").textContent = boughtData.totalQuantity;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // Load kho sách data
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    updateCartDisplay(cart);

    // Hiện số lượng sách trong kho history data
    let boughtData = JSON.parse(localStorage.getItem("boughtData")) || { items: [], totalQuantity: 0 };
    updatePurchaseHistory(boughtData);

    // Cập nhật số lượng mua hàng của user
    updateUserInfo();
});

let boughtData = JSON.parse(localStorage.getItem("boughtData")) || { items: [], totalQuantity: 0 };
updatePurchaseHistory(boughtData);

// Cập nhật số lượng mua hàng của user
updateUserInfo();

//*--------------- Cập nhật danh sách đã mua vào section  -----------------*/

document.getElementById("updateUsernameBtn").addEventListener("click", function() {
    let currentPassword = document.getElementById("currentPassword").value;
    let newUsername = document.getElementById("newUsername").value;
    let confirmNewUsername = document.getElementById("confirmNewUsername").value;
    let storedPassword = localStorage.getItem("password");

    if (currentPassword !== storedPassword) {
        alert("Mật khẩu hiện tại không chính xác. Vui lòng thử lại.");
        return;
    }

    if (newUsername === confirmNewUsername) {
        // Update the username in localStorage
        localStorage.setItem("username", newUsername);
        alert("Tên tài khoản đã được cập nhật thành công!");
        window.location.href = "../HTML/taikhoan.html";
    } else {
        alert("Tên tài khoản không khớp. Vui lòng thử lại.");
    }
});

// Optional: Load the current username (if any) when the page loads
window.onload = function() {
    let storedUsername = localStorage.getItem("username");
    if (storedUsername) {
        document.getElementById("newUsername").value = storedUsername;
    }
};


/*------------- Đăng xuất và đăng nhập ------------------*/
// Get elements for the settings actions
let deleteAccountLink = document.querySelector(".Settings .Settings_content a:nth-child(1)");


// Handle the "Xoá tài khoản" action
deleteAccountLink.addEventListener("click", (e) => {
    e.preventDefault();

    if (isLoggedIn) {
        let action = confirm("Bạn có chắc chắn muốn xoá tài khoản này?");

        if (action) {
            // Clear all data and log out
            localStorage.clear();
            isLoggedIn = false;

            // Re-enable interaction with the login popup
            loginTab.style.pointerEvents = "auto";
            registerTab.style.pointerEvents = "auto";
            loginInfo.querySelectorAll("input, a").forEach((el) => el.style.pointerEvents = "auto");
            registerInfo.querySelectorAll("input, a").forEach((el) => el.style.pointerEvents = "auto");

            // Close the settings menu
            document.querySelector(".Settings").style.display = "none";

            // Show the login popup
            accountPopup.style.display = "block";
            blackGlass.style.display = "block";

            alert("Tài khoản đã được xoá thành công!");
            window.location.href = "../index.html";
        }
    }
});

