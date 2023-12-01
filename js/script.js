let navBtn = document.querySelector('#nav-toggle')
let links = document.querySelector('.nav-links')

navBtn.addEventListener('click', function() {
    links.classList.toggle('show-links') 
})