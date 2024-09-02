//-------------------- Hàm xử lý mua sách vào giỏ hàng ---------------//

//Danh sách các thông tin cơ bản của sách theo id
function layThongTinSach(bookId) {
    //Danh sách sách theo bookID
    const danhSach = {
        "1": { title: "Con mèo Dạy Hải Âu Bay", price: 88000, image: "../Assest/Book/chuyen_con_meo_day_hai_au_bay_tai_ban_2017_1_2018_12_28_22_51_18.webp" },
        "2": { title: "Đắc Nhân Tâm", price: 110200, image: "../Assest/Book/dnt.webp" },
        "3": { title: "Frieren - Tập 1", price: 77200, image: "../Assest/Book/friren.webp" },
        "4": { title: "Giáo trình Lịch Sử ĐCSVN", price: 61200, image: "../Assest/Book/lsd.webp" },
        "5": { title: "Harry Potter Và Bảo Bối Tử Thần", price: 102200, image: "../Assest/Book/harry.webp" },
        "6": { title: "Không Gia Đình", price: 42000, image: "../Assest/Book/kgd.webp" },
        "7": { title: "Mình Nói Gì Khi Nói Về Hạnh Phúc", price: 99200, image: "../Assest/Book/mngvtp.webp" },
        "8": { title: "Nhà Giả Kim", price: 75200, image: "../Assest/Book/ngk.webp" },
        "9": { title: "The Art of Ori", price: 300200, image: "../Assest/Book/ori.webp" },
        "10": { title: "Lịch Sử 12 (Kết Nối) (Chuẩn)", price: 61200, image: "../Assest/Book/su12.webp" },
        "11": { title: "Thỏ Bảy Màu", price: 85500, image: "../Assest/Book/tbm.webp" },
        "12": { title: "Tiếng Anh 8", price: 61200, image: "../Assest/Book/ta8.webp" },
        "13": { title: "Toán 10", price: 61200, image: "../Assest/Book/toan10.webp" },
        "14": { title: "Tuổi Trẻ Đáng Giá Bao Nhiêu", price: 72200, image: "../Assest/Book/ttdgbn.webp" },
    };
    return danhSach[bookId];
}

//Hàm xử lý thêm vào giỏ hàng
function themGioHang(bookId) {
    // Load the cart from localStorage or initialize an empty array
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let book = layThongTinSach(bookId);

    // Add the selected book to the cart
    cart.push(book);
    localStorage.setItem("cart", JSON.stringify(cart));  // Save the updated cart to localStorage
}


//Xử lý khi người dùng click vào mua ngay
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".buy-now").forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();  // Prevent the default link behavior
            let bookId = this.getAttribute("data-id");
            themGioHang(bookId);
            alert("Đã thêm vào giỏ hàng thành công!");  // Show success alert
        });
    });
});
