//-------------------- Hàm thực thi hộp tìm kiếm cho người dùng ---------//

//Nhận sự kiện click chuột vào icon search (kính lúp)
let searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", function (e) {
    //Ngăn chặn hành động a href xảy ra
    e.preventDefault();

    //Lấy nội dung Search
    let noiDungSearch = document.getElementById("search-input").value;

    //Xử lý nội dung Search
    if (noiDungSearch) {
        let diachiURL = `https://www.google.com/search?q=`;

        //Bổ sung nội dung của người dùng vào URL
        diachiURL += `${encodeURIComponent(noiDungSearch)}`;
        window.open(diachiURL, "_blank");
    } else {
        alert("Vui lòng nhập nội dung cần tìm!");
    }
});
