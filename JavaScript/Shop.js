//----------------- Hàm dùng quản lý thể hiện Sách (Shop.html) -------------// 

//Danh sách mục lục
const mucLuc = {
    "tat-ca": "Tất cả",
    "truyen-tranh": "Truyện tranh",
    "sach-trong-nuoc": "Sách trong nước",
    "sach-nuoc-ngoai": "Sách nước ngoài",
    "sach-giao-khoa": "Sách giáo khoa"
};

//Danh sách của các sách tương ứng từng mục lục
const danhSach = {
    "tat-ca": [
        { title: "Thỏ Bảy Màu Và Những Người Nghĩ Nó Là Bạn", price: "85.200đ", orginalPrice: "93.000đ", img: "../Assest/Book/tbm.webp", link: "../HTML/Book/Sach.html?id=11" },
        { title: "Frieren - Pháp Sư Tiễn Táng: Tập 1", price: "77.200đ", orginalPrice: "88.000đ", img: "../Assest/Book/friren.webp", link: "../HTML/Book/Sach.html?id=3" },
        { title: "Harry Potter Và Bảo Bối Tử Thần", price: "102.200đ", orginalPrice: "138.000đ", img: "../Assest/Book/harry.webp", link: "../HTML/Book/Sach.html?id=5" },
        { title: "The Art of Ori and the Will of the Wisps", price: "300.200đ", orginalPrice: "375.000đ", img: "../Assest/Book/ori.webp", link: "../HTML/Book/Sach.html?id=9" },
        { title: "Mình Nói Gì Khi Nói Về Hạnh Phúc", price: "101.200đ", orginalPrice: "122.000đ", img: "../Assest/Book/mngvtp.webp", link: "../HTML/Book/Sach.html?id=7" },
        { title: "Chuyện Con Mèo Dạy Hải Âu Bay", price: "88.200đ", orginalPrice: "96.000đ", img: "../Assest/Book/chuyen_con_meo_day_hai_au_bay_tai_ban_2017_1_2018_12_28_22_51_18.webp", link: "../HTML/Book/Sach.html?id=1" },
        { title: "Tuổi Trẻ Đáng Giá Bao Nhiêu", price: "72.200đ", orginalPrice: "79.000đ", img: "../Assest/Book/ttdgbn.webp", link: "../HTML/Book/Sach.html?id=14" },
        { title: "Đắc Nhân Tâm", price: "110.200đ", orginalPrice: "127.000đ", img: "../Assest/Book/dnt.webp", link: "../HTML/Book/Sach.html?id=2" },
        { title: "Không Gia Đình", price: "99.200đ", orginalPrice: "108.000đ", img: "../Assest/Book/kgd.webp", link: "../HTML/Book/Sach.html?id=6" },
        { title: "Nhà Giả Kim", price: "75.200đ", orginalPrice: "87.000đ", img: "../Assest/Book/ngk.webp", link: "../HTML/Book/Sach.html?id=8" },
        { title: "Giáo trình Lịch Sử Đảng CS Việt Nam", price: "61.200đ", orginalPrice: "72.000đ", img: "../Assest/Book/lsd.webp", link: "../HTML/Book/Sach.html?id=4" },
        { title: "Lịch Sử 12 (Kết Nối) (Chuẩn)", price: "61.200đ", orginalPrice: "72.000đ", img: "../Assest/Book/su12.webp", link: "../HTML/Book/Sach.html?id= 10" },
        { title: "Tiếng Anh 8", price: "61.200đ", orginalPrice: "72.000đ", img: "../Assest/Book/ta8.webp", link: "../HTML/Book/Sach.html?id=12" },
        { title: "Toán 10", price: "61.200đ", orginalPrice: "72.000đ", img: "../Assest/Book/toan10.webp", link: "../HTML/Book/Sach.html?id=13" },

    ],


    "truyen-tranh": [
        { title: "Thỏ Bảy Màu Và Những Người Nghĩ Nó Là Bạn", price: "61.200đ", orginalPrice: "72.000đ", img: "../Assest/Book/tbm.webp", link: "../HTML/Book/Sach.html?id=11" },
        { title: "Frieren - Pháp Sư Tiễn Táng: Tập 1", price: "61.200đ", orginalPrice: "72.000đ", img: "../Assest/Book/friren.webp", link: "../HTML/Book/Sach.html?id=3" },
        { title: "Harry Potter Và Bảo Bối Tử Thần", price: "61.200đ", orginalPrice: "72.000đ", img: "../Assest/Book/harry.webp", link: "../HTML/Book/Sach.html?id=5" },
        { title: "The Art of Ori and the Will of the Wisps", price: "300.200đ", orginalPrice: "375.000đ", img: "../Assest/Book/ori.webp", link: "../HTML/Book/Sach.html?id=9" },
    ],


     "sach-trong-nuoc":[
        { title: "Mình Nói Gì Khi Nói Về Hạnh Phúc", price: "61.200đ", orginalPrice: "72.000đ", img: "../Assest/Book/mngvtp.webp", link: "../HTML/Book/Sach.html?id=7" },
        { title: "Chuyện Con Mèo Dạy Hải Âu Bay", price: "61.200đ", orginalPrice: "72.000đ", img: "../Assest/Book/chuyen_con_meo_day_hai_au_bay_tai_ban_2017_1_2018_12_28_22_51_18.webp", link: "../HTML/Book/Sach.html?id=1" },
        { title: "Tuổi Trẻ Đáng Giá Bao Nhiêu", price: "61.200đ", orginalPrice: "72.000đ", img: "../Assest/Book/ttdgbn.webp", link: "../HTML/Book/Sach.html?id=14" },
     ],


     "sach-nuoc-ngoai":[
        { title: "Đắc Nhân Tâm", price: "61.200đ", orginalPrice: "72.000đ", img: "../Assest/Book/dnt.webp", link: "../HTML/Book/Sach.html?id=2" },
        { title: "Không Gia Đình", price: "61.200đ", orginalPrice: "72.000đ", img: "../Assest/Book/kgd.webp", link: "../HTML/Book/Sach.html?id=6" },
        { title: "Nhà Giả Kim", price: "61.200đ", orginalPrice: "72.000đ", img: "../Assest/Book/ngk.webp", link: "../HTML/Book/Sach.html?id=8" },
     ],


     "sach-giao-khoa":[
        { title: "Giáo trình Lịch Sử Đảng CS Việt Nam", price: "61.200đ", orginalPrice: "72.000đ", img: "../Assest/Book/lsd.webp", link: "../HTML/Book/Sach.html?id=4" },
        { title: "Lịch Sử 12 (Kết Nối) (Chuẩn)", price: "61.200đ", orginalPrice: "72.000đ", img: "../Assest/Book/su12.webp", link: "../HTML/Book/Sach.html?id=10" },
        { title: "Tiếng Anh 8", price: "61.200đ", orginalPrice: "72.000đ", img: "../Assest/Book/ta8.webp", link: "../HTML/Book/Sach.html?id=12" },
        { title: "Toán 10", price: "61.200đ", orginalPrice: "72.000đ", img: "../Assest/Book/toan10.webp", link: "../HTML/Book/Sach.html?id=13" },
     ]
};

//Hàm đọc dữ liệu từ danh sách
document.addEventListener("DOMContentLoaded", function () {
    let loaiMucLuc = document.getElementById("category-title");
    let danhSachMucLuc = document.getElementById("category-list");
    let giaTien = document.getElementById("price-range");
    let danhSachContent = document.getElementById("books-content");
    let chonLocGiaTien = new Set();

    // Load danh sách mục lục vào trang
    for (let [key, value] of Object.entries(mucLuc)) {
        let listItem = document.createElement("li");
        let link = document.createElement("a");
        link.href = "#"; // JavaScript will handle the click event
        link.innerHTML = `<p>${value}</p>`;
        link.dataset.categoryKey = key; // Store the category key in a data attribute
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent default link behavior
            loadBooks(key, value);
            setActiveCategory(link); // Set the active category
        });
        listItem.appendChild(link);
        danhSachMucLuc.appendChild(listItem);
    }

    // Load danh sách lọc giá tiền vào trang
    let giaTiens = ["0 - 50.000đ", "50.000đ - 100.000đ", "100.000đ - 150.000đ", "150.000đ - 200.000đ", "200.000đ trở lên"];
    giaTiens.forEach(range => {
        let listItem = document.createElement("li");
        let input = document.createElement("input");
        input.type = "checkbox";
        input.id = `price-${range.replace(/\s+/g, "-")}`;
        let label = document.createElement("label");
        label.textContent = range;
        label.setAttribute("for", input.id);
        listItem.appendChild(input);
        listItem.appendChild(label);
        giaTien.appendChild(listItem);

        input.addEventListener("change", () => {
            if (input.checked) {
                chonLocGiaTien.add(range);
            } else {
                chonLocGiaTien.delete(range);
            }
            loadBooks(document.querySelector("#category-list a.active").dataset.categoryKey, mucLuc[document.querySelector("#category-list a.active").dataset.categoryKey]);
        });
    });

    // Lấy mục lục tất cả làm load mặc định khi tải trang
    loadBooks("tat-ca", mucLuc["tat-ca"]);

    //Hàm load sách tương ứng với thể loại
    function loadBooks(categoryKey, categoryName) {
        loaiMucLuc.textContent = categoryName;
        danhSachContent.innerHTML = "";

        danhSach[categoryKey].forEach(book => {
            let priceNumber = parsePrice(book.price);
            if (isPriceInRanges(priceNumber, chonLocGiaTien)) {
                let bookLink = document.createElement("a");
                bookLink.href = book.link;
                bookLink.className = "Book";

                let bookContent = document.createElement("div");
                bookContent.className = "Book_content";

                let imgDiv = document.createElement("div");
                let img = document.createElement("img");
                img.src = book.img;
                img.alt = "Sách";
                imgDiv.appendChild(img);

                let title = document.createElement("p");
                title.textContent = book.title;

                let price = document.createElement("p");
                price.textContent = book.price;

                let orginalPrice = document.createElement("p");
                orginalPrice.textContent = book.orginalPrice;

                let stars = document.createElement("p");
                stars.innerHTML = `<i class="fa-solid fa-star"></i>`.repeat(5);

                bookContent.appendChild(imgDiv);
                bookContent.appendChild(title);
                bookContent.appendChild(price);
                bookContent.appendChild(orginalPrice);
                bookContent.appendChild(stars);

                bookLink.appendChild(bookContent);
                danhSachContent.appendChild(bookLink);
            }
        });

    }

    //Nếu có chọn lọc giá cả
    function parsePrice(priceString) {
        return parseInt(priceString.replace(/[^0-9]/g, ""));
    }

    function isPriceInRanges(price, ranges) {
        if (ranges.size === 0) 
            return true; //Trong trường hợp không có filter

        let rangeValues = {
            "0 - 50.000đ": [0, 50000],
            "50.000đ - 100.000đ": [50000, 100000],
            "100.000đ - 150.000đ": [100000, 150000],
            "150.000đ - 200.000đ": [150000, 200000],
            "200.000đ trở lên": [200000, Infinity]
        };

        for (let range of ranges) {
            let [min, max] = rangeValues[range];
            if (price >= min && price <= max) {
                return true;
            }
        }
        return false;
    }


    //Đánh dấu đỏ mục lục đang được trọn
    function setActiveCategory(activeLink) {
        let allLinks = danhSachMucLuc.querySelectorAll("a");
        allLinks.forEach(link => link.classList.remove("active"));

        activeLink.classList.add("active");
    }
});
