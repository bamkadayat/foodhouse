let mobile = document.querySelector('.btn-mobile');
mobile.addEventListener('click', myFunction);

function myFunction(e) {
    let showsNav = document.getElementById('menu');
    showsNav.classList.toggle("open");
}