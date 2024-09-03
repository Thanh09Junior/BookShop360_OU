//-------------- Hàm hiệu ứng scroll đặc biệt dành cho highlight ------------//

//Lấy tổng thể kích thước hàm body và main
const body = document.body;
const main = document.getElementById("main");

 // Lấy vị trí con lăng chuột
let sx = 0;
let sy = 0;

 // Set vị trí màn hình container theo con lăng
let dx = sx;
let dy = sy;

// Xét kích thước tag body bằng kích thước tag main.
body.style.height = main.clientHeight + "px";

// Đảm bảo tag main dạng fixed để tạo cảm giác lăng mượt
main.style.position = "fixed";
main.style.top = 0;
main.style.left = 0;


//Hiệu ứng scroll mượt
function easeScroll() {
  sx = window.pageXOffset;
  sy = window.pageYOffset;
}


// Lấy sự kiện lăng chuột của người dùng
window.addEventListener("scroll", easeScroll);

function li(a, b, n) {
  return (1 - n) * a + n * b;
}

function render() {
  //Căn chỉnh lại màn hình theo tỉ lệ trung bình giữa con lăng và container main

    dx = li(dx, sx, 0.07);
    dy = li(dy, sy, 0.07);

    dx = Math.floor(dx * 100) / 100;
    dy = Math.floor(dy * 100) / 100;

    main.style.transform = `translate3d(-${dx}px, -${dy}px, 0px)`;

    window.requestAnimationFrame(render);
}

window.requestAnimationFrame(render);



