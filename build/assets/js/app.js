const menu = document.getElementById('menu');
const open = document.getElementById('open');
const close = document.getElementById('close');

window.ontouchstart = function(event) {
    if(event.target == close){
        menu.classList.add('header__menu--close');
    } 
    if(event.target == open){
        menu.classList.remove('header__menu--close');
    }
}