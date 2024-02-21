let menu = document.querySelector('.menu');
let toggle = document.querySelector('.toggle');
toggle.style.display = "none";
menu.addEventListener('click', function() {
    toggle.style.display = "flex";
});