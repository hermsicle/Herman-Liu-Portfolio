const menuBtn = document.querySelector('.menu-btn')
const xBtn = document.querySelector('.x-btn')
const mySideNav = document.getElementById('mySideNav')
const header = document.querySelector('.header')
let menuOpen = false
let img = document.querySelector('.image')
let imgPosition = 0;

img.addEventListener('click' , () => {
    imgPosition++
    switch(imgPosition) {
        case 1: 
            img.src = './assets/images/image2.JPG'
            break
        case 2: 
            img.src = './assets/images/image3.JPG'
            break
        case 3:
            img.src = './assets/images/image4.JPG'
            break
        case 4:
            img.src = './assets/images/image5.JPG'
            break
        case 5: 
            img.src = './assets/images/image.JPG'
            break
    }
    if(imgPosition === 5) {
        imgPosition = 0;
    }
})

/*
Grab all the containers from DOM 
*/
const containers = document.querySelectorAll('.container')

menuBtn.addEventListener('click', () => {
    menuOpen = true;
    mySideNav.style.width = '60%'
    containers.forEach(container => container.style.filter = 'blur(3px)')
    header.style.filter = 'blur(3px)'
})

xBtn.addEventListener('click' , () => {
    mySideNav.style.width = '0'
    containers.forEach(container => container.style.filter = 'none')
    header.style.filter = 'none'
})

containers.forEach(container => {
    container.addEventListener('click' , () => {
        mySideNav.style.width = '0'
        containers.forEach(container => container.style.filter = 'none')
        header.style.filter = 'none'
    })
})

// When user scrolls down, hide the navbar, When scroll up, show the navbar
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
    document.querySelector('.header').style.top = "0";
    } else {
    document.querySelector('.header').style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
}