var nav = document.querySelector('nav')
var navButton = document.querySelector('nav p')
var navList = document.querySelector('nav ul')

navButton.addEventListener('click', toggleNav)

function toggleNav(e) {
    var open = !navList.classList.contains('open')
    navButton.innerHTML = open ? "X" : "menu"
    navList.classList.toggle('open', open)
}