// setTimeout(function() {
//     alert("Say hi, Tui là Mynh, Website đang trong quá trình phát triển, TKS For Coming! >.<");
// }, 3000);

let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () => {
    themeToggler.classList.toggle('fa-sun');
    if (themeToggler.classList.contains('fa-sun')) {
        document.body.classList.add('active');
    } else {
        document.body.classList.remove('active');
    }
}

// btn copy

// Lấy tất cả các icon có class là "btn-cpy"
const copyButtons = document.querySelectorAll('.btn-cpy');

// Duyệt qua từng icon và thêm sự kiện "click"
copyButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Lấy giá trị của thuộc tính "data-account"
        const accountNumber = button.getAttribute('data-account');

        // Tạo một element input để sao chép giá trị vào clipboard
        const tempInput = document.createElement('input');
        tempInput.value = accountNumber;
        document.body.appendChild(tempInput);

        // Sao chép giá trị vào clipboard
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);

        // Thêm dòng thông báo bên dưới số tài khoản
        alert("Copied");
    });
});







