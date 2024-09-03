//----------------- Hàm quản lý tài khoản người dùng -----------------//

// Lấy dữ liệu từ tab đăng nhập và đăng kí //
const loginTab = document.getElementById('loginTab');
const registerTab = document.getElementById('registerTab');

const loginInfo = document.getElementById('loginInfo');
const registerInfo = document.getElementById('registerInfo');

const accountPopup = document.getElementById('Account');
const loginButton = document.getElementById('login');

const blackGlass = document.getElementById('Black_glass');

// Kiểm tra tình trạng đăng nhập
let isLoggedIn = false;

// Xử lý chuyển đổi giữa đăng nhập và đăng kí
loginTab.addEventListener('click', () => {
    if (!isLoggedIn) { // Nếu chưa login thì hiện popup
        loginInfo.style.display = 'block';
        registerInfo.style.display = 'none';
        loginTab.style.color = 'red';
        registerTab.style.color = 'black';
    }
});

registerTab.addEventListener('click', () => {
    if (!isLoggedIn) { // Nếu chưa login thì hiện popup
        loginInfo.style.display = 'none';
        registerInfo.style.display = 'block';
        registerTab.style.color = 'red';
        loginTab.style.color = 'black';
    }
});


// Xử lý đăng kí của người dùng
document.querySelector('#registerInfo .Button a:first-child').addEventListener('click', (e) => {
    e.preventDefault();

    //Lấy dữ liệu từ người dùng điền
    const usernameInput = document.querySelector('#registerInfo input[type="text"]');
    const passwordInput = document.querySelector('#registerInfo input[type="password"]');
    const repasswordInput = document.getElementById('Repassword'); 
    
    //Lấy dữ liệu từ database
    const storedUsername = localStorage.getItem('username');

    //Kiểm tra tính hợp lệ của việc đăng kí
    if (usernameInput && passwordInput && repasswordInput) {
        const username = usernameInput.value;
        const password = passwordInput.value;
        const repassword = repasswordInput.value;

        if (password !== repassword) {
            alert('Mật khẩu xác nhận không trùng khớp!');
            return;
        }

        if(username === storedUsername){
            alert('Tài khoản đã tồn tại!');
            return;
        }

        if (username && password) {
            
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            localStorage.setItem('creationTime', new Date().toLocaleString());
            alert('Đăng kí thành công!.');
     
            loginTab.click();
        } else {
            alert('Vui lòng điền hết thông tin cần thiết!.');
        }
    } else {
        alert('Có lỗi trong quá trình nhập xuất!. Vui lòng báo cáo cho admin!');
    }
});


// Xử lý đăng nhập của người dùng
document.querySelector('#loginInfo .Button a:first-child').addEventListener('click', (e) => {
    e.preventDefault();
    const inputUsername = document.querySelector('#loginInfo input[type="text"]').value;
    const inputPassword = document.getElementById('LoginNow').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (inputUsername === storedUsername && inputPassword === storedPassword) {
        alert('Đăng nhập thành công');
        isLoggedIn = true; 

        loginTab.style.pointerEvents = 'none';
        registerTab.style.pointerEvents = 'none';
        loginInfo.querySelectorAll('input, a').forEach(el => el.style.pointerEvents = 'none');
        registerInfo.querySelectorAll('input, a').forEach(el => el.style.pointerEvents = 'none');
      
        accountPopup.style.display = 'none';
        blackGlass.style.display = 'none';
    } else {
        alert('Sai tài khoản hoặc mật khẩu.');
    }
});

// Xử lý sự kiện click chuột của người dùng
loginButton.addEventListener('click', () => {
    if (isLoggedIn) {
        accountPopup.style.display = 'none';
        blackGlass.style.display = 'none';
    } else {
        accountPopup.style.display = 'block';
        blackGlass.style.display = 'block'; 
    }
});

//Ngăn chặn tình huống điều hướng a href
document.querySelectorAll('a#login').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        if (!isLoggedIn) {
            e.preventDefault();
        }
    });
});

