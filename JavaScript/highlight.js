//------------------------ Các hàm sử dụng của highlight.html --------------------------//

let myPreloader = document.querySelector('.preloader');
let loadingText = document.querySelector('.progress-text');
let progressBar = document.querySelector('.progress-bar');

let percentLoaded = 0;
let startTime = performance.now();
let minLoadingTime = 1500; 
let maxFastLoadTime = 100;

function updateLoading() {
    let currentTime = performance.now();
    let elapsedTime = currentTime - startTime;

    // Increase the loading percentage based on elapsed time
    percentLoaded = Math.min(100, Math.floor((elapsedTime / minLoadingTime) * 100));
    loadingText.textContent = `${percentLoaded}%`;

    // Update the width of the progress bar
    progressBar.style.width = `${percentLoaded}%`;

    // Continue updating until 100% is reached
    if (percentLoaded < 100) {
        requestAnimationFrame(updateLoading);
    } else {
        loadingText.textContent = `Done`;
        setTimeout(function () {
            fadeOut();
        }, 1000);
    }
}

function fadeOut() {
    myPreloader.style.transition = "opacity 1s ease"; 
    myPreloader.style.opacity = 0; 

   
    myPreloader.addEventListener("transitionend", function () {
        myPreloader.style.display = "none";
    });
}

window.addEventListener('load', function () {
  
    let timeAfterLoad = performance.now() - startTime;

    if (timeAfterLoad < maxFastLoadTime) {
    
        myPreloader.style.display = "none";
    } else {
        let remainingTime = minLoadingTime - timeAfterLoad;
        if (remainingTime > 0) {
           
            setTimeout(fadeOut, remainingTime);
        } else {
            fadeOut();
        }
    }
});


requestAnimationFrame(updateLoading);

 //---------------------------- Xử lý header khi kéo xuống mục sec 2-----------------// 

document.addEventListener('DOMContentLoaded', function() {
    let section = document.querySelector('.sec2');
    let header = document.querySelector('header');
    let links = header.querySelectorAll('a');
    let paragraphs = header.querySelectorAll('p');
    let icons = header.querySelectorAll('i');

    let updateHeaderColors = (color) => {
        links.forEach(link => link.style.color = color);
        paragraphs.forEach(p => p.style.color = color);
        icons.forEach(i => i.style.color = color);
    };

    // Thay đổi màu sắc khi con chuột di chuyển vào .sec2
    section.addEventListener('mouseover', function () {
        updateHeaderColors('black');
    });

    // Khôi phục màu sắc khi con chuột rời khỏi .sec2
    section.addEventListener('mouseout', function () {
        let rect = section.getBoundingClientRect();
        let viewportHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.top >= 0 && rect.bottom <= viewportHeight) {
            updateHeaderColors('black');
        } else {
            updateHeaderColors('white');
        }
    });
});


/*----------------------- Chơi và quản lý nhạc ----------------------*/

document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('myAudio');
    var playPauseBtn = document.getElementById('playPauseBtn');
    var icon = playPauseBtn.querySelector('i');
    var originalTitle = document.title; 

    // Thay đổi biểu tượng khi nhạc đang phát hoặc dừng
    audio.addEventListener('play', function() {
        icon.classList.remove('fa-caret-right');
        icon.classList.add('fa-pause');
    });

    audio.addEventListener('pause', function() {
        icon.classList.remove('fa-pause');
        document.title = originalTitle;
        icon.classList.add('fa-caret-right');
    });

    // Điều khiển phát/dừng nhạc khi nhấp vào biểu tượng
    playPauseBtn.addEventListener('click', function(event) {
        event.preventDefault();
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
            document.title = originalTitle;
        }
    });

    // Cập nhật title với thời gian phát hiện tại
    audio.addEventListener('timeupdate', function() {
        var currentTime = formatTime(audio.currentTime);
        var duration = formatTime(audio.duration);
        document.title = `${currentTime} / ${duration}`;
    });

    // Định dạng thời gian thành mm:ss
    function formatTime(seconds) {
        var minutes = Math.floor(seconds / 60);
        var seconds = Math.floor(seconds % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
});


/*-------------------- Hiệu ứng xử lý Nav phần điều hướng nội dung trong trang ------------------*/

document.querySelector('.menu_left a[href="#"]').addEventListener('click', function(e) {
    e.preventDefault();
    let highlightNav = document.querySelector('.Highlight_Navigation');
    highlightNav.classList.toggle('active'); 
    

    this.classList.toggle('active');
});


document.querySelectorAll('.Nav_content a').forEach(function(link) {
    link.addEventListener('click', function() {
        let highlightNav = document.querySelector('.Highlight_Navigation');
        highlightNav.classList.remove('active'); // Ẩn Highlight_Navigation
        
    
        document.querySelector('.menu_left a[href="#"]').classList.remove('active');
    });
});


/*------------------- Hiệu ứng kéo xuất hiện Highlight nav -----------------*/

document.querySelectorAll('.Highlight_Navigation .Nav_content a').forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault(); 

        let targetId = this.getAttribute('href').slice(1); 
        let targetElement = document.getElementById(targetId);
        let header = document.querySelector('header'); 

        if (targetElement && header) {
           
            let targetPosition = targetElement.offsetTop;

           
            let elevation = 300; 
            header.style.transition = 'top 0.7s ease';
            header.style.top = `-${elevation}px`; 

            setTimeout(function () {
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

               
                setTimeout(function () {
                    header.style.top = '0px';
                    header.classList.remove('hidden');
                    header.classList.add('fixed');

                     

                }, 2200); 
            }, 800); 
        }
    });
});

