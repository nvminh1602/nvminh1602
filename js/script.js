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
const copyButtons = document.querySelectorAll('.btn-cpy');
copyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const accountNumber = button.getAttribute('data-account');
        const tempInput = document.createElement('input');
        tempInput.value = accountNumber;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        alert("Copied");
    });
});

//zoom ảnh QR Code VCB
const zoomQrVcb = document.querySelector('.js-qr-zoom-vcb');
const modalVcb = document.querySelector('.js-modal-vcb');
const modalCloseVcb = document.querySelector('.js-modal-close-vcb');
function ShowQrVcb() {
    modalVcb.classList.add('open')
}
function HideQrVcb() {
    modalVcb.classList.remove('open')
}
zoomQrVcb.addEventListener('click', ShowQrVcb)
modalCloseVcb.addEventListener('click', HideQrVcb)

//zoom ảnh QR Code MOMO
const zoomQrMomo = document.querySelector('.js-qr-zoom-momo');
const modalMomo = document.querySelector('.js-modal-momo');
const modalCloseMomo = document.querySelector('.js-modal-close-momo');
function ShowQrMomo() {
    modalMomo.classList.add('open')
}
function HideQrMomo() {
    modalMomo.classList.remove('open')
}
zoomQrMomo.addEventListener('click', ShowQrMomo)
modalCloseMomo.addEventListener('click', HideQrMomo)
//zoom ảnh đại diện
const zoomImgUser = document.querySelector('.user img');
const modalOpenImgUser = document.querySelector('.js-modal-user');
const modalCloseImgUser = document.querySelector('.js-modal-close-img-user');

function ShowImgUser() {
    modalOpenImgUser.classList.add('open')
}

function HideImgUser() {
    modalOpenImgUser.classList.remove('open')
}

zoomImgUser.addEventListener('click', ShowImgUser)
modalCloseImgUser.addEventListener('click', HideImgUser)



